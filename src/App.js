import React from 'react';
import './App.css';
import {
  Route,
  BrowserRouter,
  Routes
} from 'react-router-dom'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar';
import Chatbox from './components/Chatbox';
import Industry from './components/Industry/Industry';
import Navtab from './components/Navtab/Navtab';
import Service from './components/Services/Service';
import Footer from './components/Footer/footer';
import Sdlc from './components/SDLC/Sdlc';
import PartnershipModel from './components/PartnershipModel/PartnershipModel';
import ContactUsForm from './components/ContactUsForm';
import Navbar_update from './components/Navbar/Navbar_update';

function App() {
  return (
    <BrowserRouter>
      <Navbar_update back_color="#00000" />
      <Home />
      <Navtab />
      <Routes>
        <Route exact path='/' element={<Industry/>}/>
        <Route exact path='/industry' element={<Industry/>}/>
        <Route path='/services' element={<Service />}/>
        <Route path='/sdlc' element={<Sdlc/>}/>
        <Route path='/partnershipmodel' element={<PartnershipModel/>}/>
       </Routes>
       <ContactUsForm />
      <Chatbox />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
