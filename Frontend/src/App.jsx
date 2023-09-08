import React from 'react'
import { useEffect, useState } from 'react'

const App = () => {

  // States
  const [notes, setNotes] = useState(null);
  const [createForm, setCreateFrom] = useState({
    title: '',
    body: ''
  })

  // useeffects
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:3000/notes')
      const data = await response.json();
      console.log(data);
      setNotes(data);
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

  const createNote = async (e) => {
    e.preventDefault();
    await fetch('http://localhost:3000/notes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(createForm)
    })
      .then(response => {
        response.json()
        setNotes(...notes, response.data.note)
      })
      .then(data => {
        console.log('Response:', data)
      })
      .catch(error => {
        console.error('Error:', error);
      });

    // const data = await Response.data.json();
    // // setNotes(...notes, data.note)
    // console.log(data);


    console.log("Form submitted");
  }



  return (
    <div>
      {notes && notes.map((note) =>
        <div key={note._id}>
          <h1>{note.title}</h1>
          <h1>{note.body}</h1>
        </div>
      )}

      <form onSubmit={createNote}>
        <input type="text" value={createForm.title} onChange={updateCreateFormField} name='title' />
        <br />
        <textarea value={createForm.body} onChange={updateCreateFormField} name="body" id="" cols="30" rows="10"></textarea>
        <br />
        <button type="submit">Create</button>
      </form>
    </div>
  )
}

export default App