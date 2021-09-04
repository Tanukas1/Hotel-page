import React from 'react';
import './contact.css';
function Contact(){
    return(
 <section className="contact" id="contact">       
    <div className="heading">
    <h2 className="head">Contact Us</h2>
    <p>When you Needed</p>
    </div>
    <div className="row-body">
    <form action="#">
      <div className="left">
      <input  className="enter" type="EMAIL:" placeholder="Email"required/>
      <input className="enter" type="digit" placeholder="Phone"required/> 
      </div>
      <div className="message">
      <textarea className="ent" type="text" placeholder="Type your Message " required/>                                   
      </div>
      <div className="button">
     <button className="form-btn" type="submit">SUBMIT</button>
     </div>
    </form>                                  
          </div>
</section>
    )
}
export default Contact;