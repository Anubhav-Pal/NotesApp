import React from 'react'

const CreateNote = (props) => {
  return (
    <div>
      <form onSubmit={props.onSubmitFunction}>
        <input type="text" value={props.title} onChange={props.onChangeFunction} name='title' required={true} />
        <br />
        <textarea value={props.body} onChange={props.onChangeFunction} name="body" id="" cols="30" rows="10" required={true}></textarea>
        <br />
        <button type="submit">Create</button>
      </form>
    </div>
  )
}

export default CreateNote