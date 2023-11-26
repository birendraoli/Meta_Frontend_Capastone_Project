import React from 'react';
import logo from '../images/Logo .svg'

const Footer = () => {
  return (
    <footer>
      <section>
        <div className='company-info'>
          <img src={logo} alt='Logo'/>
          <p>This is demo Text about little lemon restrurant generated while designing the website.</p>
        </div>
        <div>
          <h3>Important Links</h3>
          <ul>
            <li><a href='/'>Home</a></li>
            <li><a href='/'>About</a></li>
            <li><a href='/'>Menu</a></li>
            <li><a href='/'>Reservation</a></li>
            <li><a href='/'>Order online</a></li>
            <li><a href='/'>Login</a></li>
          </ul>
        </div>
        <div>
          <h3>Contact</h3>
          <ul>
            <li>Address: <br/> 521 Towncity, USA</li>
            <li>Phone: <br/> + 0000 000 000</li>
            <li>Email: <br/> little@lemon.com</li>
          </ul>
        </div>
        <div>
          <h3>Social Media</h3>
          <ul>
          <li><a href='/'>Facebook</a></li>
            <li><a href='/'>Twitter</a></li>
            <li><a href='/'>Instagram</a></li>
            <li><a href='/'>Linkdin</a></li>
          </ul>
        </div>
      </section>
    </footer>
  );
};

export default Footer;