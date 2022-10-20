import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import './App.css';

import Users from './users/pages/Users';
import SignUp from './users/components/signup';
import Login from './users/components/login';
import UserCrime from './users/components/userCrime';
import HowItWorks from './shared/howItWorks/howItWorks';
import HomePage from './shared/pages/HomePage/HomePage';
import Crime from './crime/components/Crime';
import Modal from './shared/components/Modal/Modal';
import Reportpage from './crime/pages/Reportpage';


const App = () =>{
  return (
    <Router>
          <Routes>
              <Route path='/' element={<HomePage/>}/>
              <Route path='/signup' exact element = {<SignUp/>}/>
              <Route path='/login' exact element = {<Login/>}/>
              <Route path='/crime' exact element = {<UserCrime/>}/>
              <Route path='/crimes' exact element = {<Users/>}/>
              <Route path='/howitworks' exact element = {<HowItWorks/>}/>
              <Route path='/crimes/:id' exact element = {<Crime/>}/>
              <Route path='/modal' exact element = {<Modal/>}/>
              <Route path='/report' exact element = {<Reportpage/>}/>
          </Routes>
                
    </Router>
     
  );

}


export default App;
