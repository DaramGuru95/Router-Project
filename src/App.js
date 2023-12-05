import './App.css';

import About from './Components/About';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Login from './Components/Login';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import User, { Orders, Profile } from './Components/User';
import Lists from './Components/Lists/list';
import Users from "./Components/Lists/UserDetails";

function Header() {
  return (
    <div >
      <ul className='components'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="about">About</Link></li>
        <li><Link to="Contact">Contact US</Link></li>
        <li><Link to="login">Login</Link></li>
        <li><Link to="User">User</Link></li>
        <li><Link to="lists">Lists</Link></li>
      </ul>
    </div>
  )
}

function App() {
  return (
    <>
      <BrowserRouter>
        <Users />
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path='Contact' element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="User" element={<User />}>
            <Route path="orders" element={<Orders />} />
            <Route path="profile" element={<Profile />} />
          </Route>
          <Route path="/lists" element={<Lists />} />
        </Routes>
        {/* <Lists /> */}


      </BrowserRouter>
    </>
  );
}

export default App;
