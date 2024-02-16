import React from 'react'

function Input() {
  return (
    <div className='input'>
      <input type="text" placeholder='Type Something...' />
      <div className="send">
        <img src="" alt="send" />
        <input type="file" style={{display:"none"}} id='file'/>
        <label htmlFor="file">
            <img src="" alt="file" />
        </label>
        <button>Send</button>
      </div>
    </div>
  )
}

export default Input
