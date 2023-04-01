import React from 'react'
import Post from './Post'


const posts = [
    {
        id: '123',
        username:'Adonis',
        userImg: 'https://i.postimg.cc/ydyhjmC0/185785168-d82eb824-a402-4df3-912d-8787f46ba048.png',
        img: 'https://i.postimg.cc/ydyhjmC0/185785168-d82eb824-a402-4df3-912d-8787f46ba048.png',
        caption: "I  will swing my arm in a figure of 8",
    },
    {
        id: '123',
        username:'Adonis',
        userImg: 'https://i.postimg.cc/ydyhjmC0/185785168-d82eb824-a402-4df3-912d-8787f46ba048.png',
        img: 'https://i.postimg.cc/ydyhjmC0/185785168-d82eb824-a402-4df3-912d-8787f46ba048.png',
        caption: "I  will swing my arm in a figure of 8",
    },
    {
        id: '123',
        username:'Adonis',
        userImg: 'https://i.postimg.cc/ydyhjmC0/185785168-d82eb824-a402-4df3-912d-8787f46ba048.png',
        img: 'https://i.postimg.cc/ydyhjmC0/185785168-d82eb824-a402-4df3-912d-8787f46ba048.png',
        caption: "I  will swing my arm in a figure of 8",
    },
    {
        id: '123',
        username:'Adonis',
        userImg: 'https://i.postimg.cc/ydyhjmC0/185785168-d82eb824-a402-4df3-912d-8787f46ba048.png',
        img: 'https://i.postimg.cc/ydyhjmC0/185785168-d82eb824-a402-4df3-912d-8787f46ba048.png',
        caption: "I  will swing my arm in a figure of 8",
    },
]

const Posts = () => {
  return (
    <div>
        {posts.map(post =>(
            <Post key={post.id} 
            id={post.id} 
            username={post.username}
            userImg={post.userImg}
            img={post.img}
            caption={post.caption}
            />
        ))}
    </div>
  )
}

export default Posts