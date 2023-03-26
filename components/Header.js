import React from "react";
import Image from "next/image";
import {
    SearchIcon,
    PlusCircleIcon,
    UserGroupIcon,
    HeartIcon,
    PaperAirplaneIcon,
    MenuIcon,
} from "@heroicons/react/outline"

const Header = () => {
  return (
    <div>
      <div className="flex justify-between max-w-6xl">
        {/* Left */}
        <div className="relative hidden lg:inline-grid  h-24 w-24 cursor-pointer">
          <Image src="https://links.papareact.com/ocw" alt="logo" fill style={{objectFit:"contain"}}/>
        </div>

        <div className="relative flex-shrink-0 lg:hidden h-10 w-10 cursor-pointer">
          <Image src="https://links.papareact.com/jjm" alt="logo" fill style={{objectFit:"contain"}}/>
        </div>

        {/* Middle */}

        <div>
            <div>
               <SearchIcon/>
            </div>
            <input type="text" placeholder="search"/>
        </div>

        {/* RIght */}
      </div>
    </div>
  );
};

export default Header;
