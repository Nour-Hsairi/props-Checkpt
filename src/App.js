import React from 'react';
import './App.css';
import Profile from './profile/Profile';
import image from './profile/Nour.jpg'

function App() {
  const myProfile={fullName:"Nour Hsairi", bio:"Web developer",
profession:"Civil engineer"}
const handleName=(profile)=>{alert(`Your name is ${profile.fullName}`)};
return (
  <React.StrictMode>
  <Profile profile={myProfile} handleName={handleName}>
  <img src={image} alt="Nour" style={{width:300}}></img></Profile>
  </React.StrictMode>
)
}
export default App;
