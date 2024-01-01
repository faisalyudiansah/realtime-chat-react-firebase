import React from 'react'
import { IconButton } from "@material-tailwind/react";
import { IoIosAttach, IoIosSend } from "react-icons/io"

const InputMessage = () => {
	return (
		<div className='p-2 bg-white flex items-center gap-2 rounded-e-xl rounded-t-none'>
			<input
				type="text"
				placeholder='Type a message...'
				className='w-full focus:outline-none pl-2'
			/>
			<div className='flex items-center gap-4'>
				<input
					type='file'
					style={{ display: 'none' }}
					id='fileInput'
				/>
				<label htmlFor="fileInput" className='flex items-center gap-4 cursor-pointer'>
					<IoIosAttach className='text-2xl text-light-green-900 hover:text-light-green-800' />
				</label>
				<IconButton className='bg-light-green-900 hover:bg-light-green-800'>
					<IoIosSend className="text-xl text-white" />
				</IconButton >
			</div>
		</div>
	)
}

export default InputMessage