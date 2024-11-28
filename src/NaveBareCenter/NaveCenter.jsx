import React, { useState } from 'react';
import"./index.css";
import { Facebook, Mail, Phone } from 'lucide-react';
import { useHistory } from 'react-router-dom';


const Navbar = () => {
  const [click,setClick]=useState(false)
  const history = useHistory()
   
  return (
    <nav className='nav'>
      <div className='container'>
        <div className='topBar'>
          <div className='logo'>
            <span className='groupText'><img src="VerificationCertificat/image/Logo.png" alt="" /></span>
            <span className='validateText'><img src="VerificationCertificat/image/suivre.png" alt="" /><p>VALIDATE A STUDENTS</p></span>
          </div>
          <div className='topBarRight'>
            <div className='socialIcons'>
             <span><Phone size={20} /> <p>+261 38 46  503 32 /</p> <p>+261 38 38 734 53</p></span>
              <a href='https://web.facebook.com'><Facebook size={20} /></a>
              <a href='https://email.com/'><Mail size={20} /></a>
            </div>
            <label className='safetyButton'>Safety Certificats</label>
          </div>
        </div>
        
        <div className='mainBar'>
          <div className={click ? "mobil-nave" : "navLinks"} onClick={()=>setClick(false)}>
            <a  className='navLink'>Verification of student who followed our training courses</a>
          </div>
           <button className="toggle"  onClick={()=>setClick(!click)}>
              {click ? <i className="fa fa-times"></i> : <i className="fa fa-bars"></i>}
            </button>
          <div>
            <div className='brandName'><i>TECHSKILLS LEARNING</i></div>
            <div className='subTitle'>Health, security and environment related training programs</div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
