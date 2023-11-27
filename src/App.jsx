import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './home/Home';
import Customer from './customer/Customer';


function App() {
  
  return (
    <>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/customer' element={<Customer/>}/>
     </Routes>
    </>
  )
}

export default App
