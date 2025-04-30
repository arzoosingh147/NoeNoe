import { useState, useEffect } from 'react';

const MyItems = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Fetch items from localStorage
    const savedItems = JSON.parse(localStorage.getItem('recycledItems')) || [];
    setItems(savedItems);
  }, []); // Empty dependency array ensures this runs only once

  return (
    <section className="py-16 bg-[#E1FEA4]">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Your Recycled Items</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {items.length > 0 ? (
            items.map((item, index) => (
              <div key={index} className="bg-[#FAFAC6] p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
                <p className="text-gray-600">{item.description}</p>
                <p className="text-gray-500">Category: {item.category}</p>
                <img src={item.image} alt={item.name} className="w-full h-48 object-cover rounded-lg mt-4" />
              </div>
            ))
          ) : (
            <p className="text-gray-600">No items uploaded yet.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default MyItems;
