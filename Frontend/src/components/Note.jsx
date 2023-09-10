import React from 'react'

const Note = (props) => {
  return (
    <div>
      {props.notes && (props.notes).map((note) =>
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

export default Note