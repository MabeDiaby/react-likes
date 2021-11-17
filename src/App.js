import React from 'react';
import './App.css';
import {useState} from 'react';
import Likes from './Likes';
import LikesTotal from './LikesTotal';
import ProfilePic from './ProfilePic';

function App() {

  return <div className="App">
    <Likes />
    <ProfilePic />
    </div>;
}

export default App;
