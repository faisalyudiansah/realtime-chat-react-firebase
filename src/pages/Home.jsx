import React from 'react';
import Sidebar from '../components/Sidebar';
import Chat from '../components/Chat';

const Home = () => {
  return (
    <>
      <div className='flex justify-center items-center bg-green-200 h-screen'>
        <div className="w-[65%] h-[80%] flex">
          <Sidebar />
          <Chat />
        </div>
      </div>
    </>
  );
}

export default Home;
