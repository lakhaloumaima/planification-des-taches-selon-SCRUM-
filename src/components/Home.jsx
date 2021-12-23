import React, { useState } from 'react';
import { Form, Modal, message,Input, Button, Checkbox } from 'antd';

import emailjs from 'emailjs-com';
const Home = () => {

    const success = () => {
        message.success('message successfuly sent');
      }; 
      const [resultat, setresultat] = useState(false);
      const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_4p87v4e', 'template_xdjvnol', e.target, 'user_c18mROsP6hhSIlubZqFTI')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset() ;
          setresultat(true) ;
          success();
      }


    return (
        <div >
         <div className="col-md-6"> 
        <div className="form-group">
          <img className="profile-img" style={{width:"98%" , height:"80%" }} src="../images/home3.jpg" />
        </div>
      </div>
      <div className="col-md-6"> 
        <div className="form-group">
          <img className="profile-img" style={{width:"98%" , height:"80%" }} src="../images/home4.jpg" />
        </div>
      </div>
    <center>
 
  <section className="ftco-section">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-md-6 text-center mb-5">
     
     
       
      </div>
    </div>
    <div className="row justify-content-center">
      <div className="col-md-12">
        <div className="wrapper">
          <div className="row no-gutters">
            <div className="col-lg-8 col-md-7 order-md-last d-flex align-items-stretch">
              <div className="contact-wrap w-100 p-md-5 p-4">
              <h2 className="heading-section">Contact </h2>
                <form method="POST" id="contactForm" name="contactForm" className="contactForm" onSubmit={sendEmail}>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="label" htmlFor="name">Full Name</label>
                        <input type="text" className="form-control" name="name" id="name" placeholder="Name" />
                      </div>
                    </div>
                    <div className="col-md-6"> 
                      <div className="form-group">
                        <label className="label" htmlFor="email">Email Address</label>
                        <input type="email" className="form-control" name="email" id="email" placeholder="Email" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label className="label" htmlFor="subject">Subject</label>
                        <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label className="label" htmlFor="#">Message</label>
                        <textarea name="message" className="form-control" id="message" cols={30} rows={4} placeholder="Message" defaultValue={""} />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <input style={{ backgroundColor:"steelblue" }} type="submit" defaultValue="Send Message" class="btn btn-info" />
                        <div className="submitting" />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-4 col-md-5 d-flex align-items-stretch">
              <div style={{ backgroundColor:"steelblue" , color :"white"}} className="info-wrap w-100 p-md-5 p-4">
                <h3>Information</h3>
               <br></br> <br></br>
                <div className="dbox w-100 d-flex align-items-start">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="fa fa-map-marker" />
                  </div>
                  <div className="text pl-3">
                    <p><span>Address:</span> Tunisie , Monastir</p>
                  </div>
                </div>
                <div className="dbox w-100 d-flex align-items-center">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="fa fa-phone" />
                  </div>
                  <div className="text pl-3">
                    <p><span>Phone :</span>  25475864</p>
                  </div>
                </div>
                <div className="dbox w-100 d-flex align-items-center">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="fa fa-paper-plane" />
                  </div>
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="fa fa-envelope" />
                  </div>
                  <div className="text pl-3">
                    <p><span  >Email :</span>  info@planning.com</p>
                  </div>
                </div>
                <div className="dbox w-100 d-flex align-items-center">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="fa fa-globe" />
                  </div>
                  <div className="text pl-3">
                    <p><span>Website :</span> Planning.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      
    <br></br>
   </center>
   <br></br>
</div>
    )
}
export default Home