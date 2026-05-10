import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Login() {
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
          Login
        </h1>

        <div className="flex flex-col gap-5 mt-10">

          <input
            type="email"
            placeholder="Enter Email"
            className="p-4 rounded-xl border outline-none"
          />

          <input
            type="password"
            placeholder="Enter Password"
            className="p-4 rounded-xl border outline-none"
          />

          <div className="flex justify-end">

            <Link
              to="/forgot-password"
              className="text-yellow-500 hover:underline"
            >
              Forgot Password?
            </Link>

          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-yellow-500 hover:bg-yellow-400
            text-black font-bold py-4 rounded-xl"
          >
            Login
          </motion.button>

          <p className="text-center text-gray-500">

            Don’t have an account?

            <Link
              to="/register"
              className="text-yellow-500 ml-2 hover:underline"
            >
              Sign Up
            </Link>

          </p>

        </div>

      </motion.div>

    </section>
  );
}