import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare ,faTrash} from '@fortawesome/free-solid-svg-icons'

const Note = (props) => {
  return (
    <div className='Notes-container p-4 md:px-0 flex flex-col md:flex-row md:flex-wrap gap-4 items-center justify-evenly text-white'>
      {props.notes && (props.notes).map((note) =>
        <div key={note._id} className='w-full md:w-1/4 lg:w-1/5 md:min-h-[200px] p-4 rounded-2xl bg-zinc-800 flex flex-col justify-between' >
          <div className='flex flex-col mb-4'>
          <h1 className='text-lg font-semibold'>{note.title}</h1>
          <p className='text-xs md:text-sm opacity-70 pt-1'>{note.body}</p>
          </div>
          <div>
          <hr className='mt- opacity-10'/>
          <div className='pt-2   flex gap-4'>
          <button className='opacity-40' onClick={() => props.deleteNote(note._id)}><FontAwesomeIcon icon={faTrash} /></button>
          <button className='opacity-40' onClick={() => { props.editNote(note) }}><FontAwesomeIcon icon={faPenToSquare} /></button>
          </div>
          </div>

        </div>
      )}
    </div>
  )
}

export default Note 