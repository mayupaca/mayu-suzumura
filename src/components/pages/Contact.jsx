import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ContactForm from "../forms/ContactForm";
import bgImage2 from "../../images/code_pic2.jpg";

const Contact = () => {
  return (
    <div name="contact" className="max-w-7xl w-[50%] h-screen mx-auto my-20">
      <h1 class="neon-yellow my-8 text-3xl">Contact</h1>
      <div class="relative">
        <div class="flex">
          <img
            src={bgImage2}
            alt="codePic"
            class="w-full h-[40rem] object-cover opacity-40 absolute"
          ></img>
          <div>
            <div className="contact-information">
              <p>email: mayusuzumura55@gmail.com</p>
              <p>Phone: +1 416-389-5592</p>
            </div>
            <div className="social-media">
              <p class="mt-10 mb-3">Social media</p>
              <div className="icon">
                <span class="text-[#BBED2F] mr-3">
                  <a href="https://www.linkedin.com/in/mayu-suzumura/">
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                  </a>
                </span>
                <span class="text-[#BBED2F]">
                  <a href="https://github.com/mayupaca">
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div class="ml-32">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
