import React from 'react';
import logo from './img/Shoptinga.png';
import menu from './img/Icon menu.svg';
import chevron from './img/chevron-right.svg';
import '../home/Home.css';
import Customer from '../customer/Customer';

const Home = () => {
  return (
    <div className='frame-one'>
        
    <div className='navbar'>
        <img src={logo} alt='logo' style={{width:'200px', height:'150px'}}/>
        <img src={menu} alt='menu' style={{width: '100px', height:'50px'}} />
    </div>
     <div className='about'>
        <p>"Unlock Your Business Potential with Shoptinga storefront "</p>
     </div>
     <div className='join'>
        <p>Join the waitlist !!!</p>
     </div>
     <div className='updates'>
        <p>Don't wait any longer - join our waitlist today and be the first to be informed about our latest update</p>
     </div>
     <div className='input'>
        <input
           type='email'
           placeholder='Email'
           className='email-search'
        />
        <button className='button'>
            Join Now
            <img src={chevron} alt='chevron'/>
        </button>
     </div>
      <Customer/>
    </div>
  )
}

export default Home