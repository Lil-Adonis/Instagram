import { DotsHorizontalIcon, ChatIcon, HeartIcon, PaperAirplaneIcon, EmojiHappyIcon, BookmarkIcon } from '@heroicons/react/outline'
import React from 'react'
import {HeartIcon as heartIconFilled} from "@heroicons/react/outline"


const Post = ({id,username,userImg,img,caption}) => {
  return (
    <div className='bg-white my-7 border rounded-sm'>
        {/* Header */}
        <div className='flex items-center p-5'>
            <img src={userImg} className='rounded-full h-12 w-12 object-contain border p-1 mr-3' alt=''/>
            <p className='flex-1 font-bold'>{username}</p>
            <DotsHorizontalIcon className='h-5'/>
        </div>
        {/* img */}
        <img src={img} className='object-cover w-full' alt=''/>

        {/* Button */}
        <div className='flex justify-between'>
        <div className='flex space-x-4'>
            <HeartIcon className='btn'/>
            <ChatIcon className='btn'/>
            <PaperAirplaneIcon className='btn'/>
        </div>
          <BookmarkIcon className='btn'/>
        </div>
       
        {/* caption */}
        <p className='p-5 truncate'>
            <span className='font-bold mr-1'>{username}</span>
            {caption}

        </p>

        {/* Comments */}

        {/* Input box */}
        <form className='flex items-center p-4'>
            <EmojiHappyIcon className='h-7'/>
            <input type='text' className='border-none flex-1 focus:ring-0 outline-none' placeholder='Add a comment ...'/>
            <button className='font-semibold text-blue-400'>Post</button>

        </form>
    </div>
  )
}

export default Post