import { useParams } from 'react-router-dom'
import { rooms } from '../data/rooms'
import { useState } from 'react'

export default function Booking() {
  const { id } = useParams()

  const room = rooms.find((item) => item.id == id)

  const [date, setDate] = useState('')

  const handleBooking = () => {
    alert(`Room booked on ${date}`)
  }

  return (
    <div className='p-10'>
      <img src={room.image} className='h-96 w-full object-cover rounded-xl' />

      <h1 className='text-4xl font-bold mt-6'>{room.name}</h1>
      <p className='mt-3 text-xl'>₹{room.price}</p>

      <input
        type='date'
        className='border p-3 mt-6'
        onChange={(e) => setDate(e.target.value)}
      />

      <button
        onClick={handleBooking}
        className='block bg-green-500 text-white px-8 py-3 rounded mt-5'
      >
        Confirm Booking
      </button>
    </div>
  )
}