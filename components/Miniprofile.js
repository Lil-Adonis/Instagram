import React from 'react'

const Miniprofile = () => {
    return (
        <div className="flex items-center justify-between mt-14 ml-10">
          <img
            className="w-16 h-16 rounded-full border p-[2px]"
            src='/amazon_PNG25.png'
            alt=""
          />
          <div className="flex-1 mx-4">
            <h2 className="font-bold">Adenuga</h2>
            <h3 className="text-sm text-gray-400">Welcome to Instagram</h3>
          </div>
          <button
            className="text-blue-400 text-sm font-semibold"
          >
            Sign Out
          </button>
        </div>
      );
    };

export default Miniprofile