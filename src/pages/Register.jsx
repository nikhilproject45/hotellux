import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Register() {
  return (

    <section className="min-h-screen flex justify-center
    items-center bg-gray-100 px-6">

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="bg-white shadow-2xl rounded-3xl
        p-10 w-full max-w-md"
      >

        <h1 className="text-5xl font-black text-center">
          Sign Up
        </h1>

        <div className="flex flex-col gap-5 mt-10">

          <input
            type="text"
            placeholder="Full Name"
            className="p-4 rounded-xl border outline-none"
          />

          <input
            type="email"
            placeholder="Email"
            className="p-4 rounded-xl border outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            className="p-4 rounded-xl border outline-none"
          />

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-yellow-500 hover:bg-yellow-400
            text-black font-bold py-4 rounded-xl"
          >
            Create Account
          </motion.button>

          <p className="text-center text-gray-500">

            Already have an account?

            <Link
              to="/login"
              className="text-yellow-500 ml-2 hover:underline"
            >
              Login
            </Link>

          </p>

        </div>

      </motion.div>

    </section>
  );
}