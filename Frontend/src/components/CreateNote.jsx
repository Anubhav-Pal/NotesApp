import React from 'react'

const CreateNote = (props) => {
  return (
    <div className='create-note-form'>
      <form onSubmit={props.onSubmitFunction}>
        <div className=' flex flex-col items-start m-4 gap-2'>
          <input className='w-full p-4 rounded-2xl bg-transparent border-2 border-zinc-800' placeholder='Enter note title' type="text" value={props.title} onChange={props.onChangeFunction} name='title' required={true} />
          <textarea className='w-full p-4 rounded-2xl bg-transparent border-2 border-zinc-800' placeholder="Enter note content" value={props.body} onChange={props.onChangeFunction} name="body" id="" cols="30" rows="10" required={true}></textarea>
          <button type="submit">Create</button>
        </div>
      </form>
    </div>
  )
}

export default CreateNote