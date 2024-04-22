import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import './App.css';
import Home from './screens/Home'; 
import Charts from './screens/Charts';
import Forecast from './screens/Forecast';
import Navbar from './components/Navbar';
import Price from './screens/Price'; 




const App = () => {
  return (
    <>
      
        <Router> 
         <Navbar />
         <div>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/Home' element={<Home/>} /> 
            <Route path='/Charts' element={<Charts/>} />
            <Route path='/Forecast' element={<Forecast/>} />
<<<<<<< HEAD
            
            
=======
            <Route path='/Price' element={<Price/>} />
>>>>>>> 3fc46205a7c69761693abd368ab5f76dfba441ef
          </Routes>
          </div>
        </Router>
    </>
  );
}

export default App;
