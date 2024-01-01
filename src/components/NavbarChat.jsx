import React from 'react';
import { Navbar, Typography, IconButton } from "@material-tailwind/react";
import { IoMdVideocam, IoIosCall, IoIosMore } from "react-icons/io";

const NavbarChat = () => {
  return (
    <Navbar className='sticky rounded-l-none rounded-b-none border-none'>
      <div className="flex items-center justify-between text-black">
        <div className=''>
          <Typography
            as="a"
            className="font-medium"
          >
            Username
          </Typography>
        </div>
        <div className='flex items-center gap-1'>
          <IconButton
            variant="text"
          >
            <IoMdVideocam className="text-xl text-light-green-900" />
          </IconButton >
          <IconButton
            variant="text"
          >
            <IoIosCall className="text-xl text-light-green-900" />
          </IconButton >
          <IconButton
            variant="text"
          >
            <IoIosMore className="text-xl text-light-green-900" />
          </IconButton >
        </div>
      </div>
    </Navbar>
  );
}

export default NavbarChat;