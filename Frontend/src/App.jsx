import React from 'react'
import { useEffect, useState } from 'react'

const App = () => {

  // States
  const [notes, setNotes] = useState([]);
  const [createForm, setCreateFrom] = useState({
    title: '',
    body: ''
  })
  const [editForm, setEditForm] = useState({
    _id: '',
    title: '',
    body: ''
  })

  // useeffects
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/notes')
        const data = await response.json();
        // console.log(data);
        setNotes(data);

      } catch (error) { console.log(error); }
    };
    fetchData();
  }, [])

  // Functions
  const updateCreateFormField = (e) => {
    const { name, value } = e.target;
    // console.log({ name, value });

    setCreateFrom({
      ...createForm,
      [name]: value
    });
  }

  const updateEditFormField = (e) => {
    const { name, value } = e.target;

    setEditForm({
      ...editForm,
      [name]: value
    })
  }


  //Add a note
  const createNote = async (e) => {
    e.preventDefault();
    let Data = ''
    await fetch('http://localhost:3000/notes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(createForm)     //The Js object that has recently been in the createForm object will be added to the db
    })
      .then(response => { return response.json() })
      .then(data => { Data = data.note })
      .catch(error => { console.error('Error:', error); });

    //Update state
    setNotes([...notes, Data]);

    //Clear the form fields
    setCreateFrom({ title: '', body: '' })
    console.log("Form submitted");
  }

  //Delete a note
  const deleteNote = async (_id) => {
    try {
      await fetch(`http://localhost:3000/notes/${_id}`, {
        method: "DELETE",
        headers: {
          'Content-Type': 'application/json',
        }
      })
        //Update the state
        .then(setNotes((notes) => notes.filter((note) => note._id !== _id)))
    } catch (error) { console.log(error); }
  }

  //Update the note
  const updateNote = async (e) => {
    e.preventDefault();
    try {
      await fetch(`http://localhost:3000/notes/${editForm._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editForm)     //The Js object that has recently been in the editForm object will be added to the db
      })
    } catch (error) { console.log(error); }


    // Changing the state(we have created a copy of original notes array, then find the index of updated note and set the old note with updated note and then finally put the updated notes array in front of the user)
    const updateNotes = [...notes];
    const updatedNoteIndex = notes.findIndex((note) => note._id === editForm._id)

    updateNotes[updatedNoteIndex] = editForm;
    setNotes(updateNotes);
    setEditForm({ _id: "", title: "", body: "" })


  }

  const editNote = (note) => {
    setEditForm({ _id: note._id, title: note.title, body: note.body });
  }


  return (
    <div>
      <form onSubmit={createNote}>
        <input type="text" value={createForm.title} onChange={updateCreateFormField} name='title' required={true} />
        <br />
        <textarea value={createForm.body} onChange={updateCreateFormField} name="body" id="" cols="30" rows="10" required={true}></textarea>
        <br />
        <button type="submit">Create</button>
      </form>

      <form onSubmit={updateNote}>
        <input placeholder='Edit your note title' type="text" value={editForm.title} onChange={updateEditFormField} name='title' required={true} />
        <br />
        <textarea placeholder='Edit your note body' value={editForm.body} name="body" onChange={updateEditFormField} id="" cols="30" rows="10" required={true}></textarea>
        <br />
        <button type="submit">Update Note</button>
      </form>


      {notes && notes.map((note) =>
        <div key={note._id}>
          <h1>{note.title}</h1>
          <h1>{note.body}</h1>
          <button onClick={() => deleteNote(note._id)}>Delete</button>
          <button onClick={() => { editNote(note) }}>Edit</button>
        </div>
      )}
    </div>
  )
}

export default App