import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Navbar() {
  return (

    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 w-full z-50
      bg-black/40 backdrop-blur-xl border-b border-white/10
      px-8 py-5 flex justify-between items-center"
    >

      {/* Logo */}
      <motion.h1
        whileHover={{ scale: 1.08 }}
        transition={{ duration: 0.3 }}
        className="text-3xl font-black text-yellow-400 tracking-widest"
      >
        HotelLux
      </motion.h1>

      {/* Center Navigation */}
      <div
        className="hidden md:flex gap-10 text-lg
        font-semibold text-gray-200 absolute
        left-1/2 transform -translate-x-1/2"
      >

        <Link
          to="/"
          className="text-gray-200 hover:text-yellow-400
          hover:scale-110 duration-300"
        >
          Home
        </Link>

        <Link
          to="/rooms"
          className="text-gray-200 hover:text-yellow-400
          hover:scale-110 duration-300"
        >
          Rooms
        </Link>

        <Link
          to="/reviews"
          className="text-gray-200 hover:text-yellow-400
          hover:scale-110 duration-300"
        >
          Reviews
        </Link>

        <Link
          to="/contact"
          className="text-gray-200 hover:text-yellow-400
          hover:scale-110 duration-300"
        >
          Contact
        </Link>

      </div>

      {/* Button */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >

        <Link
          to="/login"
          className="bg-yellow-500 hover:bg-yellow-400
          text-black font-bold px-7 py-3 rounded-full
          shadow-2xl duration-300"
        >
          Get Started
        </Link>

      </motion.div>

    </motion.nav>
  );
}