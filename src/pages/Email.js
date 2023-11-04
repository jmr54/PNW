import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

export const Email = () => {
  const form = useRef();
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_pmiysio', 'template_epwyxcs', form.current, 'av9RYVR322NYYJ9Lk')
      .then((result) => {
        console.log(result.text);
        setIsFormSubmitted(true); // Set the form submission status to true
        form.current.reset(); // Reset the form fields
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  return (
    <section className="mb-4">
      <h2 className="h1-responsive font-weight-bold text-center my-4">Contact me</h2>
      <p className="text-center w-responsive mx-auto mb-5">
        Do you have any questions? Please do not hesitate to contact me directly.
      </p>
      <div className="row">
        <div className="col-md-9 mx-auto mb-0 mb-md-5">
          <form ref={form} onSubmit={sendEmail}>
            <div className="row">
              <div className="col-md-6">
                <div className="md-form mb-0">
                  <label htmlFor="name" className="">
                    Your name
                  </label>
                  <input type="text" id="name" name="user_name" className="form-control" required />
                </div>
              </div>
              <div className="col-md-6">
                <div className="md-form mb-0">
                  <label htmlFor="email" className="">
                    Your email
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="user_email"
                    className="form-control"
                    required
                    pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <label htmlFor="message">Your message</label>
                <div className="md-form">
                  <textarea
                    type="text"
                    id="message"
                    name="message"
                    rows="2"
                    className="form-control md-textarea"
                    required
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="text-center text-md-left">
              <button className="btn btn-primary" type="submit">
                Send
              </button>
            </div>
            {isFormSubmitted && (
              <div className="alert alert-success mt-3" role="alert">
                Message has been sent!
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};
