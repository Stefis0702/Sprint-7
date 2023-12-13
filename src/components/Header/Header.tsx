import React from 'react';
import Logo from '../../img/Logo.png';


const HeaderCom: React.FC = () => {
  return (
    <header>
    <div className="flex justify-between items-center mt-4">
      <div className="flex self-start items-center">
        <a href="#"className='w-7'><img src="./src/img/XLogo.png" alt="" /></a>
        <a href="#" className='w-7'><img src="./src/img/FLogo.png" alt="" /></a>
        <a href="#"className='w-9'><img src="./src/img/ILogo.png" alt="" /></a>
        <a href="#"className='w-6'><img src="./src/img/TTLogo.png" alt="" /></a>
        
      </div>
    
    <div className="logo">
            <a href="/" className="aw-independent "><img id="local-nav-logo-desktop" src= {Logo} alt="Star Wars Logo" className="mx-auto w-100"/></a>     
    </div>
    <div className="flex self-start ">
      <button className="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
        <p className="ml-2">Search</p>
      </button>
      <button className="flex items-center p-2" >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
         <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
         </svg>
        <p ml-2>Sign In</p>
      </button>
    </div>
    </div>

    <div className=" bg-black border border-white mt-4 flex justify-center items-center">
    <div className="flex border border-white">
    <a className="btn btn-ghost text-xl">Home</a>
    </div>
    <div className="flex border border-white">
    <a className="btn btn-ghost text-xl">StartShips</a>
     </div>
  
  
</div>
    </header>
  );
};

export default HeaderCom;
