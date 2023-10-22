"use client";

import emailjs from "@emailjs/browser";
import { FormEvent, useRef } from "react";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";
const Contact = () => {
  const formRef = useRef<HTMLFormElement | null>(null);

  function sendEmail(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (formRef.current)
      emailjs
        .sendForm(
          "service_vfxkmer",
          "template_8n51om4",
          formRef.current,
          "Fl4iRVMtO8tYp2UDS"
        )
        .then(
          (result) => {
            toast.success("Successfully sent email");
          },
          (error) => {
            toast.error("Something went wrong");
          }
        );
    e.currentTarget.reset();
  }

  return (
    <section className="w-full select-none main-section min-h-screen flex justify-center  items-center flex-col  div-padding">
      <div className="w-full flex justify-center  items-center flex-col md:flex-row gap-4 md:gap-10">
        <div className="w-full md:w-[60%] flex justify-center items-start flex-col lg:pl-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4">
            Let&#39;s Work together
          </h2>
          <div className="mb-3">
            <h3 className="text-lg font-bold">Email</h3>
            <h3 className="text-slate-400">keiksl2301@gmail.com</h3>
          </div>
          <div className="mb-3">
            <h3 className="text-lg font-bold">Phone</h3>
            <h3 className="text-slate-400">09-756192218</h3>
          </div>
        </div>
        <div className="w-full md:w-[40%]">
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="w-full flex justify-center items-start flex-col gap-5"
          >
            <input
              type="text"
              placeholder="Name"
              name="name"
              className="w-full bg-transparent border-2 border-slate-500 py-2 px-4 text-lg  focus:border-green-700"
              required
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              className="w-full bg-transparent border-2 border-slate-500 py-2 px-4 text-lg"
              required
            />
            <textarea
              cols={20}
              rows={3}
              placeholder="Message"
              name="message"
              className="w-full bg-transparent border-2 border-slate-500 py-2 px-4 text-lg"
              required
            ></textarea>
            <motion.button
              whileTap={{ scale: 0.96 }}
              type="submit"
              className="w-full transition-colors py-2 px-4 bg-green-700 border-2 border-green-700 hover:text-green-700 hover:bg-transparent"
            >
              Submit
            </motion.button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
