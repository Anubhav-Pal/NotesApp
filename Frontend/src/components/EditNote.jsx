import React from 'react'

const EditNote = (props) => {
  return (
    <div>
      <form onSubmit={props.onSubmitFunction}>
        <input placeholder='Edit your note title' type="text" value={props.title} onChange={props.onChangeFunction} name='title' required={true} />
        <br />
        <textarea placeholder='Edit your note body' value={props.body} name="body" onChange={props.onChangeFunction} id="" cols="30" rows="10" required={true}></textarea>
        <br />
        <button type="submit">Update Note</button>
      </form></div>
  )
}

export default EditNote