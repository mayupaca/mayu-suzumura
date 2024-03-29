import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fjq9xzr",
        "template_ei2adrx",
        form.current,
        "aljvyMs7sqOuFB5WV"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Message sent:)");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="lg:w-[300px]">
      <form ref={form} onSubmit={sendEmail} className="flex flex-col">
        <label className="text-sm lg:text-md">Name</label>
        <input
          type="text"
          name="user_name"
          className="border-none text-stone-900"
        />
        <label className="text-sm lg:text-md">Email</label>
        <input
          type="email"
          name="user_email"
          className="border-none text-stone-900"
        />
        <label className="text-sm lg:text-md">Message</label>
        <textarea className="message border-none text-stone-900" />
        <input type="submit" value="Send" className="text-right pointer" />
      </form>
    </div>
  );
};

export default ContactForm;
