import React from 'react';
import {
  Input,
  Avatar,
} from "@material-tailwind/react";
import { FaSearch } from "react-icons/fa";

const SearchSidebar = () => {
  return (
    <div className="w-full bg-green-800">
      <div>
        <Input
          type='text'
          className='rounded-none border-none focus:border-none text-green-100 '
          placeholder='find a user...'
          icon={<FaSearch className='text-green-100' />}
        />
      </div>
      <div className='flex items-center gap-4 p-2 hover:bg-green-900 cursor-pointer'>
        <Avatar
          className="border border-green-100 p-0.5"
          src="https://docs.material-tailwind.com/img/face-2.jpg"
          alt="avatar" />
        <div className='text-green-100'>
          <span>Cristiano Ronaldo</span>
        </div>
      </div>
    </div>
  );
}

export default SearchSidebar;