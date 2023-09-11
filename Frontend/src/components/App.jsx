import React from 'react'
import { useEffect, useState } from 'react'
import Note from './Note.jsx'
import CreateNote from './CreateNote.jsx'
import EditNote from './EditNote.jsx'
import Navbar from './Navbar.jsx'

const App = () => {

  // States
  const [notes, setNotes] = useState([]);
  const [createForm, setCreateFrom] = useState({ title: '', body: '' });
  const [editForm, setEditForm] = useState({ _id: '', title: '', body: '' });


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
    <div className='h-screen bg-zinc-900 overflow-x-hidden  '>
      {/* <Navbar /> */}
      <CreateNote title={createForm.title} body={createForm.body} onChangeFunction={updateCreateFormField} onSubmitFunction={createNote} />
      {/* <EditNote title={editForm.title} body={editForm.body} onChangeFunction={updateEditFormField} onSubmitFunction={updateNote} /> */}
      <Note notes={notes} />
    </div>
  )
}

export default App