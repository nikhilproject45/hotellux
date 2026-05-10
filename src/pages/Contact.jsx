import { motion } from "framer-motion";

export default function Contact() {
  return (

    <section className="min-h-screen bg-gray-100
    flex justify-center items-center px-8 py-20">

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="bg-white shadow-2xl rounded-3xl
        p-10 w-full max-w-2xl"
      >

        <h1 className="text-5xl font-black text-center">
          Contact Us
        </h1>

        <div className="mt-10 flex flex-col gap-6">

          <input
            type="text"
            placeholder="Your Name"
            className="p-4 rounded-xl border outline-none"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="p-4 rounded-xl border outline-none"
          />

          <textarea
            rows="5"
            placeholder="Your Message"
            className="p-4 rounded-xl border outline-none"
          ></textarea>

          <button
            className="bg-yellow-500 hover:bg-yellow-400
            text-black font-bold py-4 rounded-xl duration-300"
          >
            Send Message
          </button>

        </div>

      </motion.div>

    </section>
  );
}