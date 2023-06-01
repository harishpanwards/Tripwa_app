import Travel from '../../Images/travel.svg';
import Headphone from '../../Images/headphone.svg';
import Arrow from '../../Images/Arrow.svg'
import Send from '../../Images/Send-arrow.svg'
import Phone from '../../Images/Phone.svg'
import Email from '../../Images/Email.svg'
import Location from '../../Images/Office.svg'
import { Form, useNavigate } from 'react-router-dom';

const Footer = () => {  
  const navigate=useNavigate()
  return(
    <div className="Footer">
      <div className="container">
        <div className="row top_footer">
         <div className="fulltime">
            <div className="title">
            <img src={Headphone } alt="headphone"/>
           
               <p>Need any support for tour & travels ?</p>
            </div>
            <a href="#"><img src={Arrow} alt="headphone" className='Action_arrow'/></a>

         </div>
         <div className="fulltime">
         <div className="title">
         <img src={Travel } alt="headphone"/>
        
            <p>Need any support for tour & travels ?</p>
         </div>
         <a href="#"><img src={Arrow} alt="headphone" className='Action_arrow'/></a>

      </div>
        </div>
        <div className='row'>
            <div className='f_block1'>
            <h2>Trip<span>wa</span></h2>
            <p>To take trivial example which usever undertakes laborious physica exercise except obsome.</p>
            </div>
            <div className='f_block1'>
            <h2 className='list-heading'>Page</h2>
            <ul>
            <li onClick={()=>{navigate("/")}}>Home</li>
             <li onClick={()=>{navigate("/about")}}>About</li>
             <li onClick={()=>{navigate("/eror")}}>Blog</li>
             <li onClick={()=>{navigate("/tour")}}>Tour Guide</li>
             <li onClick={()=>{navigate("/eror")}}>Contact</li>
             <li onClick={()=>{navigate("/eror")}}>Privacy</li>
             
            </ul>
            </div>
            <div className='f_block2'>
            <h2>Newsletter</h2>
            <p>Subscribe our newsletter to get our latest update & news.</p>
            <form>
              <input placeholder='Enter Email'/>
              <img src={Send} alt='Send'></img>
            </form>
            </div>
            <div className='f_block2'>
            <h2 className='list-heading'>Contact</h2>
            <ul>
             <li>
              <div className='contact-list'>
                <div className='contact-icon'>
                <img src={Phone} alt='phone'></img>
                </div>
                <div className='contact-text'>
                  <p className='text-heading'>Drop a line</p>
                  <p>+00 (123) 879 97</p>
                </div>
              </div>
             </li>
             <li>
              <div className='contact-list'>
                <div className='contact-icon'>
                <img src={Email} alt='mail'></img>
                </div>
                <div className='contact-text'>
                  <p className='text-heading'>Email Address</p>
                  <p>info@gmail.com</p>
                </div>
              </div>
             </li>
             <li>
              <div className='contact-list'>
                <div className='contact-icon'>
                <img src={Location} alt='office'></img>
                </div>
                <div className='contact-text'>
                  <p className='text-heading'>Visit office</p>
                  <p>583 Main Street, NY, USA</p>
                </div>
              </div>
             </li>
            </ul>
            </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;