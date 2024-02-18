import React, { useContext } from 'react'
import Messages from './Messages'
import Input from './Input'
import { ChatContext } from '../context/ChatContext'
import { SlCamrecorder } from "react-icons/sl";
import { LuUserPlus } from "react-icons/lu";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

function Chat() {
const {data} = useContext(ChatContext);

  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
        <SlCamrecorder />
        <LuUserPlus />
        <HiOutlineDotsHorizontal />
        </div>
      </div>
      <Messages/>
      <Input/>
    </div>
  )
}

export default Chat
