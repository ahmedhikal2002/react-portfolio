import React from "react";
import "./Contact.css";
import { ValidationError, useForm } from "@formspree/react";
import Lottie from "lottie-react";
import Done from "../../src/Animation/Done.json";
import Contactus from "../../src/Animation/ContactUs.json";
function Contact() {
  const [state, handleSubmit] = useForm("xgegnnvo");
  return (
    <div className="contact">
      <div className="head">
        <div className="mail">
          <i className="fa-solid fa-envelope"></i>
          <h2>Contact US</h2>
        </div>
        <p>
          Contact US For More information and get noyified when i publish
          somthing new.
        </p>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email Address:</label>
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="off"
              placeholder="Email Address"
              required
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div>
            <label htmlFor="message">Your Message:</label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              required
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <button className="btn" disabled={state.submitting}>
            {state.submitting ? "Submit..." : "Submit"}
          </button>
        </form>
        {state.succeeded && (
          <div className="success">
            <Lottie
              style={{ width: "40px" }}
              loop={false}
              animationData={Done}
            />
            <p>Your message has been sent successfully</p>
          </div>
        )}
      </div>
      <div className="animation">
        <Lottie animationData={Contactus} />
      </div>
    </div>
  );
}

export default Contact;
