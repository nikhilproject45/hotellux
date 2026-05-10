import { motion } from "framer-motion";

export default function Testimonials() {
  return (
    <section className="bg-black text-white py-20 px-8">

      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-bold text-center"
      >
        What Clients Say
      </motion.h1>

      <div className="grid md:grid-cols-3 gap-8 mt-14">

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-gray-900 p-8 rounded-2xl shadow-lg"
        >
          <p>
            Amazing luxury experience and very beautiful rooms.
          </p>

          <h2 className="mt-5 font-bold text-yellow-400">
            - John Smith
          </h2>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-gray-900 p-8 rounded-2xl shadow-lg"
        >
          <p>
            Best hotel booking website with modern design.
          </p>

          <h2 className="mt-5 font-bold text-yellow-400">
            - Alex Brown
          </h2>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-gray-900 p-8 rounded-2xl shadow-lg"
        >
          <p>
            Smooth booking experience and premium UI.
          </p>

          <h2 className="mt-5 font-bold text-yellow-400">
            - David Wilson
          </h2>
        </motion.div>

      </div>
    </section>
  );
}