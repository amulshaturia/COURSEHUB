// import './App.css';
import { Routes, Route } from 'react-router-dom';



// importing components 
import Home from './components/Home';
import Detail from './components/Detail';
import LoginSignup from './components/LoginSignup';
import Courses from './components/Courses.js'; 
import IDE from './components/IDE'; 
import Community from './components/community/components/Messenger.jsx'; 
import About from './components/About'; 
import Payment from './components/Payment.js';
import Profile from './components/Profile.js';
import Insert from './components/Insert.js';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/insert" element={<Insert/>}></Route>
        <Route path = "/Profile" element = {<Profile/>}></Route>
        <Route path="/Detail" element={<Detail/>}></Route>
        <Route path="/Login" element={<LoginSignup/>}></Route>
        <Route path="/Courses" element={<Courses/>}></Route>
        <Route path="/IDE" element={<IDE/>}></Route>
        <Route path="/Community" element={<Community/>}></Route>
        <Route path="/About" element={<About/>}></Route>
        <Route path="/Payment" element={<Payment/>}></Route>
      </Routes>
    </>
  );
}

export default App;
