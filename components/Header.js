import React from "react";
import Image from "next/image";
import {
    SearchIcon,
    PlusCircleIcon,
    UserGroupIcon,
    HeartIcon,
    PaperAirplaneIcon,
    MenuIcon,
    HomeIcon,
} from "@heroicons/react/outline"

const Header = () => {
  return (
    <div className="shadow-sm border-b bg-white sticky tp-0 z-50">
      <div className="flex justify-between max-w-6xl mx-5 lg:mx-auto">
        {/* Left */}
        <div className="relative hidden lg:inline-grid   w-24 cursor-pointer">
          <Image src="/amazon_PNG25.png" alt="logo" fill style={{objectFit:"contain"}}/>
        </div>

        <div className="relative flex-shrink-0 lg:hidden w-10 cursor-pointer">
          <Image src="/amazon_PNG25.png" alt="logo" fill style={{objectFit:"contain"}}/>
        </div>

        {/* Middle */}
        <div className="max-w-xs">
        <div className="mt-1 relative p-3 rounded-md">
            <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
               <SearchIcon className="h-5 w-5 text-gray-500"/>
            </div>
            <input 
            className="bg-gray-50 block w-full pl-10 sm:text-sm 
            rounded-md border-gray-300 focus:border-black 
            focus:ring-black " type="text" placeholder="search"/>
        </div>
        </div>

        {/* RIght */}
        <div className="flex items-center justify-end space-x-4">
        <HomeIcon className="navBtn"/>
        <MenuIcon className="h-6 md:hidden cursor-pointer"/>
        <div className="relative navBtn">
        <PaperAirplaneIcon className="navBtn rotate-45"/>
        <div className="absolute animate-pulse text-white -top-2 -right-1 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">4</div>
        </div>
        <PlusCircleIcon className="navBtn"/>
        <UserGroupIcon className="navBtn"/>
        <HeartIcon className="navBtn"/>

        <img src="/amazon_PNG25.png" alt="profile pic" className="rounded-full w-10 h-10 cursor-pointer"/>
        </div>
      </div>
    </div>
  );
};

export default Header;
