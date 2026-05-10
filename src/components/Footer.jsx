import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Footer() {
  return (

    <footer className="bg-black text-white py-16 px-8 mt-20">

      <div className="grid md:grid-cols-4 gap-12">

        {/* Logo */}
        <div>

          <h1 className="text-4xl font-black text-yellow-400">
            HotelLux
          </h1>

          <p className="text-gray-400 mt-5 leading-8">
            Experience premium luxury rooms,
            world-class dining and unforgettable comfort.
          </p>

        </div>

        {/* Quick Links */}
        <div>

          <h2 className="text-2xl font-bold mb-6">
            Quick Links
          </h2>

          <div className="flex flex-col gap-4 text-gray-400">

            <Link
              className="hover:text-yellow-400 duration-300"
              to="/"
            >
              Home
            </Link>

            <Link
              className="hover:text-yellow-400 duration-300"
              to="/rooms"
            >
              Rooms
            </Link>

            <Link
              className="hover:text-yellow-400 duration-300"
              to="/booking/1"
            >
              Booking
            </Link>

            <Link
              className="hover:text-yellow-400 duration-300"
              to="/contact"
            >
              Contact
            </Link>

          </div>

        </div>

        {/* Booking Info */}
        <div>

          <h2 className="text-2xl font-bold mb-6">
            Booking Info
          </h2>

          <div className="space-y-4 text-gray-400">

            <p>✔ 24 Luxury Rooms Available</p>

            <p>✔ Starting From ₹3500/Night</p>

            <p>✔ Free Wifi & Pool</p>

            <p>✔ 24/7 Room Service</p>

            <p>✔ Premium Dining</p>

          </div>

        </div>

        {/* Newsletter */}
        <div>

          <h2 className="text-2xl font-bold mb-6">
            Newsletter
          </h2>

          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-4 rounded-full
            bg-gray-900 border border-gray-700
            outline-none"
          />

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="mt-5 bg-yellow-500 hover:bg-yellow-400
            text-black px-8 py-3 rounded-full
            font-bold duration-300"
          >
            Subscribe
          </motion.button>

        </div>

      </div>

      <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500">
        © 2026 HotelLux. All Rights Reserved.
      </div>

    </footer>
  );
}