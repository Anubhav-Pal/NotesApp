import React from 'react'

const CreateNote = (props) => {
  return (
    <div className='create-note-form'>
      <form onSubmit={props.onSubmitFunction}>
        <div className=' flex flex-col items-start  m-4 gap-2 xl:mx-8'>
          <input className='w-full p-4 rounded-2xl bg-transparent border-2 border-zinc-800 text-white placeholder:text-zinc-600 focus:outline-none focus:border-zinc-600' placeholder='Enter note title' type="text" value={props.title} onChange={props.onChangeFunction} name='title' required={true} />
          <textarea className='w-full p-4 rounded-2xl bg-transparent border-2 border-zinc-800 text-white placeholder:text-zinc-600 focus:outline-none focus:border-zinc-600' placeholder="Enter note content" value={props.body} onChange={props.onChangeFunction} name="body" id="" cols="30" rows="10" required={true}></textarea>
          <button className='text-white w-full lg:w-1/5 xl:w-1/6  p-4 rounded-2xl bg-zinc-800 hover:ring hover:outline-none hover:ring-zinc-700 ease-in-out' type="submit">Create</button>
        </div>
      </form>
    </div>
  )
}

export default CreateNote