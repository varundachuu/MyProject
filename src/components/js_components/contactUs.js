import React, { useRef } from "react";
import { toast, ToastContainer } from "react-toastify";
import emailjs from '@emailjs/browser';
import "react-toastify/dist/ReactToastify.css";
import "../css-files/contactUs.css";

export const ContactUs = () => {
  const form = useRef();
  const contact = useRef(null);


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_5rp4uvd', 'template_s3p06vb', form.current, 'uYUgRDXjOgNnMfcN-')
      .then(
        () => {
          toast.success("Will Get Back Soon!");
          form.current.reset(); // Reset the form after successful submission
        },
        (error) => {
          toast.error("There was an error sending the message. Please try again.");
          console.error('FAILED...', error.text);
        }
      );
  };

  return (
    <div ref={contact} id="contact" className="contact-us">
      <h1>Let's Connect.</h1>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <div className="form-group">
          <label>Name</label>
          <input type="text" name="user_name" placeholder="Enter your name" required />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" name="user_email" placeholder="Enter your email" required />
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input type="number" name="user_phone" placeholder="Enter your phone number"  required/>
        </div>
        <div className="form-group">
          <label>Subject</label>
          <input type="text" name="subject" placeholder="Enter the subject" />
        </div>
        <div className="form-group full-width">
          <label>Message</label>
          <textarea style={{fontFamily:"unset"}} name="message" placeholder="Enter your message" required />
        </div>
        <button type="submit" className="contact-button">Send</button>
      </form>
      {/* Toast Container */}
      <ToastContainer 
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default ContactUs;
