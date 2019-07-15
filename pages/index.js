import React from 'react';
import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';

const dummy = {
  User:{
    nickname:"GeonilJang"
  },
  isLoggedIn : true,
  imagePath:[],
  mainPost:[
    {
      content:'',
      createdAt:new Date(),
      img:'',
      User:{
        id:1,
        nickname:"GeonilJang",
      }
      ,content:"welcome"
    }
]
}

const Home = () => {
  return (
    <div>
      {dummy.isLoggedIn && <PostForm />}
        {dummy.mainPost.map(c=>{
          return (
            <PostCard key={c} post={c}/>
          )
        })}
    </div>
  )
}

export default Home;
