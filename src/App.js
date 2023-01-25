
import React from 'react';
import './App.css';
import Navbar from './Navbar.js';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import BlockA from './components/BlockA';
import BlockE from './components/BlockE';
import Blocks from './components/pages/Blocks';
import ContactUs from './components/pages/ContactUs';
import Signup from './components/Signup';
import Home from './components/pages/Home';
import Events from './components/pages/Events';
import Sidebar from './components/Sidebar';
import Sidebar2 from './components/Sidebar2';
import Create from './components/Create';
import BlogDetails from './components/BlogDetails';
import UserList from './components/UserList';
import User from './components/User';
import NewUser from './components/NewUser';
import Complaints from './components/Complaints';
import ViewComplaints from './components/pages/ViewComplaints';
import Login from './components/Login';
import Rules from './components/Rules';
import ComplaintDetails from './components/ComplaintDetails';

function App() {
  return (
  <Router>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/blockA' element={<BlockA/>}/>
      <Route path='/blockE' element={<BlockE/>}/>
      <Route path='/blocks' element={<Blocks/>}/>
      <Route path='/contact' element={<ContactUs/>}/> 
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/events' element={<Events/>}/>
      <Route path='/sidebar' element={<Sidebar/>}/>
      <Route path='/sidebar2' element={<Sidebar2/>}/>
      <Route path='/create' element={<Create/>}/>
      <Route path='/blogs/:id' element={<BlogDetails/>}/>
      <Route path='/userlist' element={<UserList/>}/>
      <Route path='/newuser' element={<NewUser/>}/>
      <Route path='/rules' element={<Rules/>}/>
      <Route path='/complaints' element={<Complaints/>}/>
      <Route path='/viewcomplaint' element={<ViewComplaints/>}/>
      <Route path='/user/:id' element={<User/>}/>
      <Route path='/comps/:id' element={<ComplaintDetails/>}/>
     
    </Routes>
  </Router>
  );
}

export default App;