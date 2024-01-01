import React from 'react'
import {
  Navbar,
  Typography,
  Button,
  Avatar,
} from "@material-tailwind/react";

const NavbarSideBar = () => {
  return (
    <>
      <Navbar className='sticky rounded-r-none rounded-b-none border-none'>
        <div className="flex items-center justify-between text-black gap-4">
          <div className='-ml-3'>
            <Typography
              as="a"
              href="#"
              className="cursor-pointer font-medium"
            >
              Chatsapp
            </Typography>
          </div>
          <div className='flex items-center gap-1.5 '>
          <Avatar
            variant="circular"
            size="sm"
            alt="tania andrew"
            className="border border-gray-900 p-0.5"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          />
            <div className="max-w-[55px] overflow-hidden flex items-center gap-2">
              <Typography
                as="a"
                variant="small"
                className="overflow-hidden"
              >
                username
              </Typography>

            </div>
            <div className="w-[55px]"> {/* Atur lebar sesuai kebutuhan */}
              <Button size="sm" className='bg-light-green-900'>Logout</Button>
            </div>
          </div>
        </div>
      </Navbar>
    </>
  )
}

export default NavbarSideBar