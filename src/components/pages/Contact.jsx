import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ContactForm from "../forms/ContactForm";
import bgImage2 from "../../images/code_pic2.jpg";

const Contact = () => {
  return (
    <div name="contact" className="w-full h-96 relative">
      <div>
        <img
          src={bgImage2}
          alt="codePic"
          class="w-full h-[50rem] object-cover opacity-40 absolute"
        ></img>

        <div class="w-[80%] md:w-[50%] mx-auto pt-20">
          <h1 class="neon-yellow my-8 text-3xl flex justify-start relative">
            Contact
          </h1>
          <div class="flex flex-col md:flex-row justify-between relative">
            <div>
              <div class="flex flex-col">
                <p class="flex justify-start text-md md:text-lg">
                  email: mayusuzumura55@gmail.com
                </p>
                <p class="flex justify-start text-md md:text-lg">
                  Phone: +1 416-389-5592
                </p>
              </div>
              <div>
                <p class="mt-10 mb-3">Social media</p>
                <div className="icon mb-10 md:mb-0">
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
            <div class="ml-0 md:ml-32 md:flex justify-end">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
