"use client";

import React from "react";
import emailjs from "@emailjs/browser";

const Contact = ({ data }) => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail", // Replace with your service ID
        "PortfolioTemplate", // Replace with your template ID
        e.target,
        "user_LTfJaD1P0OGKt61H6CoDR" // Replace with your public user key
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          alert("Email sent successfully!");
        },
        (error) => {
          console.error("Email error:", error.text);
          alert("Email failed. Try again later.");
        }
      );

    e.target.reset();
  };

  const sendWhatsApp = () => {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    const whatsappURL =
      "https://wa.me/923232190116?text=" +
      `Name: ${name}%0aEmail: ${email}%0aSubject: ${subject}%0aMessage: ${message}`;

    window.open(whatsappURL, "_blank").focus();
  };

  return (
    <section id="contact">
      <div className="row section-head">
        <div className="two columns header-col">
          <h1>
            <span>Get In Touch.</span>
          </h1>
        </div>
        <div className="ten columns">
          <p className="lead">{data?.message}</p>
        </div>
      </div>

      <div className="row">
        <div className="eight columns">
          <form className="contact-form" onSubmit={sendEmail}>
            <input type="hidden" name="contact_number" />
            <label htmlFor="name">Name</label>
            <input id="name" name="user_name" required type="text" />

            <label htmlFor="email">Email</label>
            <input id="email" name="user_email" required type="email" />

            <label htmlFor="subject">Subject</label>
            <input id="subject" name="user_subject" required type="text" />

            <label htmlFor="message">Message</label>
            <textarea id="message" name="user_message" required />

            <br />
            <input className="submit" type="submit" value="Send Email" />
            <input
              className="submit"
              type="button"
              value="Send via WhatsApp"
              onClick={sendWhatsApp}
              style={{ marginLeft: "10px" }}
            />
          </form>
        </div>

        <aside className="four columns footer-widgets">
          <div className="widget widget_contact">
            <h4>Address and Phone</h4>
            <p className="address">
              {data?.name}
              <br />
              {data?.address?.street}
              <br />
              {data?.address?.city}, {data?.address?.state}{" "}
              {data?.address?.zip}
              <br />
              <span>{data?.phone}</span>
              <br />
              <span>{data?.email}</span>
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Contact;
