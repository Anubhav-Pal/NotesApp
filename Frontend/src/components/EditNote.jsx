import React from 'react'

const EditNote = (props) => {
  return (
    <div className='create-edit-form'>
      <form onSubmit={props.onSubmitFunction}>
        <div className=' flex flex-col items-start  m-4  xl:mx-8'>
        <input className='w-full p-4 rounded-2xl bg-transparent border-2 border-zinc-800 text-white placeholder:text-zinc-600 focus:outline-none focus:border-zinc-600' placeholder='Edit your note title' type="text" value={props.title} onChange={props.onChangeFunction} name='title' required={true} />
        <br />
        <textarea className='w-full p-4 rounded-2xl bg-transparent border-2 border-zinc-800 text-white placeholder:text-zinc-600 focus:outline-none focus:border-zinc-600' placeholder='Edit your note body' value={props.body} name="body" onChange={props.onChangeFunction} id="" cols="30" rows="10" required={true}></textarea>
        <br />
        <button className='text-white w-full lg:w-1/5 xl:w-1/6  p-4 rounded-2xl bg-zinc-800 hover:ring hover:outline-none hover:ring-zinc-700 ease-in-out' type="submit">Update Note</button>
        </div>
      </form>
      </div>
  )
}

export default EditNote