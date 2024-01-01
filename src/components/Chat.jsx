import React from 'react'
import NavbarChat from './NavbarChat'
import Messages from './Messages'
import InputMessage from './InputMessage'

const Chat = () => {
  return (
    <div className='w-2/3 bg-green-100 rounded-r-xl flex flex-col'>
      <NavbarChat />
      <Messages />
      <InputMessage />
    </div>
  )
}

export default Chat