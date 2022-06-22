import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
  return (
    <div name="contact" className="w-full h-screen">
      <div class="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full text-white">
          <h2 class="text-2xl text-[#a6a6a6]">
            &#47;&#42; - - - - - <span class="text-[#BBED2F]">I</span> love to
            connect!! - - - - - &#47;&#42;
          </h2>
          <h1 class="my-8 text-3xl">Contact</h1>
          <div className="contact-information">
            <p>email: mayusuzumura55@gmail.com</p>
            <p>Phone: +1 416-389-5592</p>
          </div>
          <div className="social-media">
            <p class="mt-10 mb-3">My social media</p>
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
    </div>
  );
};

export default Contact;
