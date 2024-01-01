import React from 'react'
import NavbarSideBar from './NavbarSidebar'
import SearchSidebar from './SearchSidebar'
import Chats from './Chats'

function Sidebar() {
  return (
    <div className='w-1/3 bg-light-green-900 rounded-l-xl'>
      <NavbarSideBar />
      <SearchSidebar />
      <Chats />
    </div>
  )
}

export default Sidebar