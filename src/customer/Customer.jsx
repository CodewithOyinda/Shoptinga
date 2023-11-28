import {useState} from 'react';
import '../customer/Customer.css';
import imgOne from './img/Ellipse 12.svg';
import imgTwo from './img/Ellipse 11.svg';
import imgThree from './img/Ellipse 10.svg';
import imgFour from './img/Ellipse 7.svg';
import imgFive from './img/Ellipse 13.svg';
import imgSix from './img/Ellipse 9.svg';
import imgSeven from './img/Ellipse 8.svg';
import group from './img/Group 3.svg';
import desktop from './img/Desktop Computer.png';
import lock from './img/Group 16.svg';
import payment from './img/Group 26.svg';
import delivery from './img/Group 15.svg';
import search from './img/search.svg';
import instagram from './img/Instagram.svg';
import whatsapp from './img/whatsapp.svg';
import twitter from './img/twitter.svg';
import linkedin from './img/linkedin.svg';

const Customer = () => {
    const [selected, setSelected] = useState(null)

     const toggle = (i) => {
        if (selected === i) {
            return setSelected(null)
        } 

        setSelected(i)
     }

  return (
    <div className='client'>
       <div className='start'>
        <p>Start selling your product by creating an account in less than 5 minutes</p>
       </div>
       <div className='account'>
        <div className='one'><p>1</p></div>
         <div>
            <h3>Create an account</h3>
            <p>Create a free shoptinga account if you're a new user or login if you're a registered user.</p>
         </div>
       </div>
       <div className='account'>
        <div className='one'><p>2</p></div>
         <div>
            <h3>Create your store</h3>
            <p>Setup your store, with product photos and specifications</p>
         </div>
       </div>
       <div className='account'>
        <div className='one'><p>3</p></div>
         <div>
            <h3>Start selling</h3>
            <p>Share your store link, start sellng and accept payment in digital or physical currency</p>
         </div>
       </div>
       <div className='btn-container'>
       <button className='btn'>
        Start selling now
       </button>
       </div>
       <div className='images'>
        <div className='ellipse-container'>
        <div className='ellipse-two'><p></p></div>
        <div className='ellipse'><p></p></div>
        </div>
        <img src={imgOne} alt='img'/>
        <img src={imgTwo} alt='img'/>
        <img src={imgThree} alt='img'/>
        <img src={imgFour} alt='img'/>
        <img src={imgFive} alt='img'/>
        <img src={imgSix} alt='img'/>
        <img src={imgSeven} alt='img'/>
       </div>
       <div className='connect'><p>Connect with customers around the world </p></div>
       <div className='group'><img src={group} alt='group'/></div>
       <div className='reasons'>
        <p>Reasons why you should sell with shoptinga</p>
       </div>
       <div className='product'>
        <div className='desktop'><img src={desktop} alt='desktop'/></div>
         <div>
            <h3>Digital Product</h3>
            <p>Amplify your digital offerings by joining our platform to connect with tech-savvy consumer seeking innovative digital solutions.</p>
         </div>
       </div>
       <div className='product'>
        <div className='desktop'><img src={lock} alt='lock'/></div>
         <div>
            <h3>Physical product</h3>
            <p>Expand your digital your market reach by showcasing your high quality physical product on our platform, reaching eager customer globally</p>
         </div>
       </div>
       <div className='product'>
        <div className='desktop'><img src={payment} alt='payment'/></div>
         <div>
            <h3>Easy payment method</h3>
            <p>Optimize your sales with our seamless payment methods, empowering you to receive payments hassle free and efficiently with crptocurrency and fiat money.</p>
         </div>
       </div>
       <div className='product'>
        <div className='desktop'><img src={delivery} alt='delivery'/></div>
         <div>
            <h3>Fast delivery</h3>
            <p>Enhance customer satisfaction by leveraging our rapid delivery service, ensuring your products reach buyers promptly fostering a positive buying experience with our logistic partner quikpik</p>
         </div>
       </div>
       <div className='grouptwo'><img src={group} alt='group'/></div>
       <div className='faqs'>
          <div className='faq-title'><p>FAQ'S</p></div>
          <div className='sub-title'><p>Frequently asked questions</p></div>
          <div className='search-bar'>
          <img src={search} alt='search'/>
            <input
             type='search'
             placeholder='Search'
             className='faq-search'
            />
            
          </div>
           <div className='accordion'>
                  {data.map((item, i) => (
                     <div className='item'>
                         <div className='title' onClick={() => toggle(i)}>
                            <p>{item.question}</p>
                            <span style={{fontWeight:'bolder', fontSize:'20px'}}>{selected === i ? 'x' : '+'}</span>
                         </div>
                         <div className={selected === i ? 'content show' : 'content'}>
                            {item.answer}
                         </div>
                     </div>
                  ))}
           </div>
          <div className='faq-btn'>
            <button>See More FAQS</button>
          </div>

       </div>
       <div className='socials'>
      
           <div className='social-icon'>
           <h1>Follow us</h1>
           <div className='icons'>
             <img src={instagram} alt='instagram'/>
             <img src={whatsapp} alt='whatsapp'/>
             <img src={twitter} alt='twitter'/>
             <img src={linkedin} alt='linkedin'/>
             </div>
           </div>
           
           <div>
           <h1>Company</h1>
            <p>Home</p>
            <p>Shop</p>
            <p>Search</p>
            <p>Sign in</p>
           </div>
           
           <div>
           <h1>Resources</h1>
            <p>Become a seller</p>
            <p>Help and support</p>
           </div>
           <div>
           <h1>Legal</h1>
           <p>Terms and Conditions</p>
           </div>
       </div>
       <div className='copy-right'>
            <p>Copyright © 2023 Shoptinga inc. All rights reserved.</p>
       </div>
    </div>
  )
}

export default Customer

const data = [
    {
        question: 'What is Shoptinga?',
        answer: 'Shoptinga has been crafted as an operating system that seamlessly integrates with both digital and physical products, providing a platform that not only facilities transactions but also enhances the overall experience for both buyers and sellers. this innovative system is dedicated to creating a sense of ease and empowerment by streamlining the interaction between consumers and empowerment by streamlining between consumers and product in in the ever evolving marketplace.'
    },
    {
        question: 'Can i sell physical products on shoptinga?',
        answer: 'Yes, the shoptinga storefront empower you to effortlessly sell physical products, harnessing the capabilities pf the shoptinga platform.',
    },
    {
        question: 'Is it only fiat i can pay with ?',
        answer: 'Shoptinga offers a dual payment system, allowing you the flexibility to choose between traditional fiat currency or cryptocurrency for your transactions.',
    },
    {
        question: 'What type of digital product can i sell ?',
        answer: 'With shoptinga you can sell all kinds of digital products like ebooks, online courses, music, softwares, digital arts, mobile apps, games, movies and tv shows, virtual events and more .',
    },
    {
        question: 'Are they any fees for using shoptinga?',
        answer: 'Certainly, sellers can enjoy a complimentary 3 month free trial period with shoptinga. Following this trial, a monthly subscription of 2000 naira is applicable.',
    },
]