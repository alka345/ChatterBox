import React from 'react'
import Messages from './Messages'
import Input from './Input'

function Chat() {
  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>Jane</span>
        <img src='' alt="" />
        <img src='' alt="" />
        <img src='' alt="" />
      </div>
      <Messages/>
      <Input/>
    </div>
  )
}

export default Chat
