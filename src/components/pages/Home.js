import React from 'react';

export default function Home() {
  return (
    <div className='Home'>
      <h1 >
        <h2> Home Page</h2>
        </h1>
      
      <p className='Home-Page'h>
      Welcome to My Portfolio
      </p> 
      <img style={{ width: 300, height: 200 }} className='profile' src={require('../assets/profilepic.jpg')} alt='Profilepic'></img>
    </div>
  );
}
