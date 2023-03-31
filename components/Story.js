import React from 'react'

function Story ({ img, username }) {
  return (
    <div>
        <img src={img} alt='feed'/>
        <p>{username}</p>
    </div>
  );
}

export default Story;
