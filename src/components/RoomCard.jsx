import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function RoomCard({ room }) {
  return (

    <motion.div

      whileHover={{
        y: -8,
        scale: 1.02,
      }}

      transition={{
        duration: 0.4,
        ease: "easeOut",
      }}

      className="group bg-white rounded-3xl overflow-hidden
      shadow-xl hover:shadow-yellow-200
      duration-500 border border-gray-100"
    >

      {/* Image */}
      <div className="overflow-hidden">

        <img
          src={room.image}
          alt={room.name}
          className="h-72 w-full object-cover
          group-hover:scale-105 duration-700"
        />

      </div>

      {/* Content */}
      <div className="p-6">

        <div className="flex justify-between items-center">

          <h2 className="text-3xl font-black">
            {room.name}
          </h2>

          <span
            className="bg-green-100 text-green-700
            px-3 py-1 rounded-full text-sm"
          >
            Available
          </span>

        </div>

        <p className="text-gray-500 mt-5 leading-7">
          Experience premium luxury stay with
          modern interiors, pool access and
          high-speed wifi.
        </p>

        <div className="flex justify-between items-center mt-7">

          <h3 className="text-3xl font-black text-yellow-500">
            ₹{room.price}
          </h3>

          <Link
            to={`/booking/${room.id}`}
            className="bg-black hover:bg-yellow-500
            hover:text-black text-white px-6 py-3
            rounded-full font-bold duration-300
            hover:scale-105"
          >
            Book Now
          </Link>

        </div>

      </div>

    </motion.div>
  );
}