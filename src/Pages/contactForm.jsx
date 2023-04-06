import React from 'react';
import "../styles/contactForm.css";
function ContactForm() {
  return (
    <section className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 input">
          <h1>Get in touch with me!</h1>
          <div className="form-group">
            <label htmlFor="name">Enter your Full name</label>
            <input id="name" className="form-control" type="text" placeholder="Example - Donatas Kusleika" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Enter your email:</label>
            <input id="email" name="email" className="form-control" type="email" placeholder="Example - Donatas@gmail.com" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Enter your phone number:</label>
            <input id="phone" name="phone" className="form-control" type="number" pattern="[+][0-9]{11,14}" placeholder="+1234567890" required />
          </div>
          <div className="form-group text-center">
            <button id="submit" type="button" className="btn btn-secondary btn-lg">Submit</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
