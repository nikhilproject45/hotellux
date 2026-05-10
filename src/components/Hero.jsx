import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <div
      className='h-screen bg-cover bg-center'
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1566073771259-6a8506099945')",
      }}
    >
      <div className='bg-black/60 h-full flex flex-col justify-center items-center text-white'>
        <motion.h1
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className='text-6xl font-bold'
        >
          Luxury Hotel Experience
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className='mt-4 text-xl'
        >
          Enjoy Premium Stay with Comfort
        </motion.p>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.5 }}
        >
          <Link
            to='/rooms'
            className='bg-yellow-500 text-black px-8 py-3 rounded-lg mt-8 inline-block font-bold'
          >
            Explore Rooms
          </Link>
        </motion.div>
      </div>
    </div>
  )
}