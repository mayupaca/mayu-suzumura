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
          console.log("Message sent:)")
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div class="w-[400px]">
      <form ref={form} onSubmit={sendEmail} class="flex flex-col">
        <label>Name</label>
        <input type="text" name="user_name" class="border-none text-stone-900" />
        <label>Email</label>
        <input type="email" name="user_email" class="border-none text-stone-900" />
        <label>Message</label>
        <textarea name="message" class="border-none text-stone-900"/>
        <input type="submit" value="Send" class="text-right pointer"/>
      </form>
    </div>
  );
};

export default ContactForm;
