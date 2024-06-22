import './contact.css'
import {FaLocationArrow, FaMailBulk, FaPhone} from 'react-icons/fa'
import { useState } from 'react';





export default function Contact() {

  const [result, setResult] = useState("");

  const submitContact = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    try {
      const formData = new FormData(event.target);
      formData.append("access_key", "bfd7450f-bb72-4932-971a-15ce6b132c38");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        alert("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.log("Network Error:", error);
      setResult("An error occurred while submitting the form. Please try again later.");
    }
  };

   console.log(result)
  return (
    <div className="contact-box">
      <h2 className="title">Get in touch</h2>
      <div className="contact-section">
        <div className="contact-left">
          <h3 className="contact-title">Let&apos;s talk</h3>
          <p>
            Thank you for your interest in working together! If you have a
            project in mind or would like to collaborate, I’d love to hear from
            you. Please reach out through any of the following methods.
          </p>
          <div className='contact-details'>
              <div className='contact'>
                <FaMailBulk size={25}/> <p>awal8043@gmail.com</p>
              </div>
              <div className='contact'>
                <FaPhone size={25}/> <p>+233591084959</p>
              </div>
              <div className='contact'>
                <FaLocationArrow size={25}/> <p>Spintex Street 234</p>
              </div>
          </div>
        </div>

        <form onSubmit={() => submitContact(event)} className='contact-right'>
            <label htmlFor=''>Your Name</label>
            <input type='text' name='name' placeholder='Your name'/>
            <label htmlFor=''>Email Address</label>
            <input type='email' name='email' placeholder='Your email'/>
            <label htmlFor=''>Write your message</label>
            <textarea rows='8' placeholder='Write message' name='message'/>
            <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
  );
}

