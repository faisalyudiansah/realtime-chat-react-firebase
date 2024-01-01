import React from 'react'
import {
  Avatar,
  Typography,
} from "@material-tailwind/react";

const Chats = () => {
  return (
    <>
      <div className='flex items-center gap-4 p-2 hover:bg-green-900 cursor-pointer '>
        <Avatar
          className="border border-green-100 p-0.5"
          src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
          alt="avatar" />
        <div className='cursor-pointer max-w-[200px] '>
          <Typography
            as="a"
            className='font-medium text-sm text-green-100'
          >
            Selena Gomez
          </Typography>
          <Typography
            as="a"
            variant="small"
            className='text-green-200 overflow-hidden whitespace-nowrap'
          >
            This is latest message. long messageeeeeeeee
          </Typography>
        </div>
      </div >
    </>
  )
}

export default Chats