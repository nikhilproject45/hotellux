import { motion } from "framer-motion";
import {
  FaWifi,
  FaSwimmingPool,
  FaUtensils,
} from "react-icons/fa";

export default function Services() {
  return (
    <section className="py-20 px-8 bg-gray-100">

      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-bold text-center"
      >
        Our Services
      </motion.h1>

      <div className="grid md:grid-cols-3 gap-8 mt-14">

        {/* Card 1 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white shadow-2xl p-10 rounded-3xl text-center"
        >
          <FaSwimmingPool className="text-6xl text-yellow-500 mx-auto" />

          <h2 className="text-3xl font-bold mt-6">
            Luxury Pool
          </h2>

          <p className="text-gray-500 mt-4">
            Enjoy premium swimming pool experience.
          </p>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white shadow-2xl p-10 rounded-3xl text-center"
        >
          <FaWifi className="text-6xl text-yellow-500 mx-auto" />

          <h2 className="text-3xl font-bold mt-6">
            Free Wifi
          </h2>

          <p className="text-gray-500 mt-4">
            High speed internet available in all rooms.
          </p>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white shadow-2xl p-10 rounded-3xl text-center"
        >
          <FaUtensils className="text-6xl text-yellow-500 mx-auto" />

          <h2 className="text-3xl font-bold mt-6">
            Luxury Dining
          </h2>

          <p className="text-gray-500 mt-4">
            Experience premium 5-star dining service.
          </p>
        </motion.div>

      </div>

    </section>
  );
}