import React from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ezis4dm",
        "template_tipled5",
        form.current,
        "LZjzlYMsdZeg9jxS3"
      )
      .then(
        (result) => {
          if (result.status === 200) {
            // using https://sweetalert2.github.io/ to produce modal
            Swal.fire({
              title: "Good job!",
              text: "Message sent successfully!",
              icon: "success",
            });
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="grid grid-cols-1 gap-3 rounded-sm md:grid-cols-2 lg:gap-6 lg:grid-cols-1 md:grid-rows2 dark:text-slate-200"
      action=""
    >
      <input
        className="pl-6 focus:ring-cyan1 p-2 bg-bgFormColor2 dark:bg-bgFormColor1 focus:outline-none focus:ring-[3px] rounded-sm "
        type="text"
        name="user_name"
        id="name"
        placeholder="Fullname"
        data-aos="fade-up"
          data-aos-delay="1000"
      />
      <input
        className="pl-6 focus:ring-cyan1 p-2 bg-bgFormColor2 dark:bg-bgFormColor1 focus:outline-none focus:ring-[3px] rounded-sm"
        type="email"
        name="user_email"
        id="email"
        placeholder="Email Address"
        autoComplete="off"
        data-aos="fade-up"
          data-aos-delay="1100"
      />
      <textarea
        className="pl-6 pt-2 bg-bgFormColor2 dark:bg-bgFormColor1 focus:outline-none focus:ring-[3px] rounded-sm focus:ring-cyan1 lg:col-auto md:col-span-2"
        name="message"
        id="message"
        cols="30"
        rows="10"
        placeholder="Message"
        data-aos="fade-up"
          data-aos-delay="1200"
      ></textarea>

      <div className="flex justify-center gap-5 md:justify-end ">
        <button className="transition-[.3s] drop-shadow-sm active:scale-[.95] hover:bg-slate-400 text-lightModeContrast dark:text-darkModeText rounded-full border-[3px] w-[100px] h-9 lg:w-[120px] lg:h-10 lg:border-[4px] lg:text-[19px]  md:w-[135px] md:h-10 md:text-[17px] border-cyan2 dark:border-cyan1"
        data-aos="zoom-in"
        data-aos-delay="1100"
        >
        <a href="https://drive.google.com/file/d/1WSG8ijPgFMJUEiCGNCdDE71Bnoc6qYVD/view?usp=drive_link" target="#">Resume</a>
        </button>
        <button
        
        data-aos="zoom-in"
        data-aos-delay="1200"
          type="submit"
          id="submit"
          value="sending..."
          className="transition-[.3s] hover:animate-none  drop-shadow-sm active:scale-[.95] hover:bg-slate-400 text-darkModeText rounded-full w-[100px] h-9 lg:w-[120px] lg:h-10 lg:text-[19px]  md:w-[135px] md:h-10 md:text-[17px] bg-cyan2 dark:border-cyan1"
        >
          Send
        <span className="absolute top-0 right-0 w-6 h-6 rounded-full animate-ping bg-cyan1"></span>        
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
