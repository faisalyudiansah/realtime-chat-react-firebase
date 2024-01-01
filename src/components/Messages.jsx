import React from 'react'
import Message from './Message'

const Messages = () => {
  return (
    <div className='p-3 flex-1 overflow-y-auto'>
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
    </div>
  )
}

export default Messages