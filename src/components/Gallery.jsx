export default function Gallery() {
  return (
    <div className="p-10 bg-gray-100">

      <h1 className="text-4xl font-bold text-center mb-10">
        Gallery
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        <img
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb"
          alt="Hotel"
          className="rounded-xl h-72 w-full object-cover hover:scale-105 duration-300"
        />

        <img
          src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
          alt="Room"
          className="rounded-xl h-72 w-full object-cover hover:scale-105 duration-300"
        />

        <img
          src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267"
          alt="Luxury Room"
          className="rounded-xl h-72 w-full object-cover hover:scale-105 duration-300"
        />

      </div>

    </div>
  );
}