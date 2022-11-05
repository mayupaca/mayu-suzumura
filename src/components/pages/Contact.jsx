import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ContactForm from "../forms/ContactForm";
// import bgImage2 from "../../images/code_pic2.jpg";

const Contact = () => {
  return (
    <div className="contact w-full h-96 relative">
      <div>
        <img
          src='../../../public/images/code_pic2.jpg'
          alt="codePic"
          className="w-full h-[50rem] object-cover opacity-40 absolute"
        ></img>

        <div className="w-[80%] lg:w-[50%] mx-auto pt-20">
          <h1 className="neon-yellow my-8 text-3xl flex justify-start relative">
            Contact
          </h1>
          <div className="flex flex-col lg:flex-row justify-between relative">
            <div>
              <div className="flex flex-col">
                <p className="flex justify-start text-md lg:text-lg">
                  email: mayusuzumura55@gmail.com
                </p>
                <p className="flex justify-start text-md lg:text-lg">
                  Phone: +1 416-389-5592
                </p>
              </div>
              <div>
                <p className="mt-10 mb-3">Social media</p>
                <div className="icon mb-10 lg:mb-0">
                  <span className="text-[#BBED2F] mr-3">
                    <a href="https://www.linkedin.com/in/mayu-suzumura/">
                      <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    </a>
                  </span>
                  <span className="text-[#BBED2F]">
                    <a href="https://github.com/mayupaca">
                      <FontAwesomeIcon icon={faGithub} size="2x" />
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="ml-0 lg:ml-32 lg:flex justify-end">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
