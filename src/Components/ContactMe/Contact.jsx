import React from 'react'
import './Contact.css'
function Contact(){
  return (
    <div className='cont1'>
    <div className='about-h'>Contact Me</div>
    <div className="row1">
    <div className='contact-form'>
        <form className='contact' action="" method='post'>
          <input type="text" name="name" className='text-box' placeholder='Your Name' required/>
          <input type="email" name="email" className='text-box' placeholder='Your Email' required></input><br/>
          <center><textarea name="Message" rows="5" placeholder='Your Message' required></textarea><br/></center>
         <center><input type="submit" name="submit" className='send-btn' value="send"></input></center> 
        </form>
    </div>
    </div>
    </div>
  )
}

export default Contact
