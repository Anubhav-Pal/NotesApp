import React from 'react'

const Note = (props) => {
  return (
    <div className='Notes-container flex items-center justify-evenly '>
      {props.notes && (props.notes).map((note) =>
        <div key={note._id} className='p-10' >
          <div className='flex flex-col'>
          <h1>{note.title}</h1>
          <h1>{note.body}</h1>
          </div>
          <div>
          <button onClick={() => deleteNote(note._id)}>Delete</button>
          <button onClick={() => { editNote(note) }}>Edit</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Note