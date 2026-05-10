import { rooms } from '../data/rooms'
import RoomCard from '../components/RoomCard'

export default function Rooms() {
  return (
    <div className='grid md:grid-cols-3 gap-8 p-10'>
      {rooms.map((room) => (
        <RoomCard key={room.id} room={room} />
      ))}
    </div>
  )
}