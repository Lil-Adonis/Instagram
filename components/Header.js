import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <div>
      <h1>I am a header</h1>
      {/* Left */}

      <div>
        <Image src="https://links.papareact.com/ocw" fill/>
      </div>

      {/* Middle */}

      {/* RIght */}
    </div>
  );
};

export default Header;
