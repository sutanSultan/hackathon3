import React from "react";

const TopPicks = () => {
  const products = [
    {
      id: 1,
      image: "/Group 14.png", // Replace with the actual image URL
      title: "Trenton modular sofa_3",
      price: "Rs. 25,000.00",
    },
    {
      id: 2,
      image: "/Group 15.png", // Replace with the actual image URL
      title: "Granite dining table with dining chair",
      price: "Rs. 25,000.00",
    },
    {
      id: 3,
      image: "/Group 16.png", // Replace with the actual image URL
      title: "Outdoor bar table and stool",
      price: "Rs. 25,000.00",
    },
    {
      id: 4,
      image: "/Group 17.png", // Replace with the actual image URL
      title: "Plain console with teak mirror",
      price: "Rs. 25,000.00",
    },
  ];

  return (
    <div>
    <section className="px-4 py-16 md:px-16 lg:px-24 bg-[#FFFFFF]">
    
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.id} className="text-center">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-64 object-cover mb-4"
            />
            <h3 className="text-lg font-medium mb-2">{product.title}</h3>
            <p className="text-xl font-semibold">{product.price}</p>
          </div>
        ))}
      </div>
    
    </section>
    <section className="px-4 py-16 md:px-16 lg:px-24 bg-[#FFFFFF]">
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {products.map((product) => (
        <div key={product.id} className="text-center">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-64 object-cover mb-4"
          />
          <h3 className="text-lg font-medium mb-2">{product.title}</h3>
          <p className="text-xl font-semibold">{product.price}</p>
        </div>
      ))}
    </div>
    <div className="flex justify-center mt-8">
  
    </div>
  </section> 
  <section className="px-4 py-16 md:px-16 lg:px-24 bg-[#FFFFFF]">
    
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.id} className="text-center">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-64 object-cover mb-4"
            />
            <h3 className="text-lg font-medium mb-2">{product.title}</h3>
            <p className="text-xl font-semibold">{product.price}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
       
      </div>
    </section>
    <section className="px-4 py-16 md:px-16 lg:px-24 bg-[#FFFFFF]">
    
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.id} className="text-center">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-64 object-cover mb-4"
            />
            <h3 className="text-lg font-medium mb-2">{product.title}</h3>
            <p className="text-xl font-semibold">{product.price}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <button className="text-black text-lg font-medium border-b-2 border-black">
          View More
        </button>
      </div>
    </section>
  </div>

  );
};

export default TopPicks;
