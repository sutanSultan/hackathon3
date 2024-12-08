// pages/product/[id].tsx
import React, { useState } from 'react';
import Image from 'next/image';
import { GetStaticProps, GetStaticPaths } from 'next';

// Define the Product interface
interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  images: string[];
}

// Define the Props interface
interface ProductDetailProps {
  product: Product;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('L');
  const [selectedColor, setSelectedColor] = useState('purple');

  const colors = [
    { name: 'purple', hex: '#816DFA' },
    { name: 'black', hex: '#000000' },
    { name: 'gold', hex: '#CDBA7B' }
  ];

  const sizes = ['L', 'XL', 'XS'];

  const handleQuantityChange = (action: 'increase' | 'decrease') => {
    if (action === 'increase') {
      setQuantity(prev => prev + 1);
    } else {
      setQuantity(prev => (prev > 1 ? prev - 1 : 1));
    }
  };

  // Custom Icon Components
  const StarIcon = ({ filled, className }: { filled?: boolean; className?: string }) => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      className={`w-5 h-5 ${filled ? 'text-yellow-400' : 'text-gray-300'} ${className}`}
      fill="currentColor"
    >
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
    </svg>
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Product Image Section */}
        <div className="bg-[#FFF9E6] rounded-lg">
          <Image 
            src={product.images[0] || '/asgaard-sofa.png'} 
            alt={product.name} 
            width={500} 
            height={400} 
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Product Details Section */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          
          {/* Price and Rating */}
          <div className="flex items-center space-x-4">
            <span className="text-2xl font-semibold text-gray-700">
              Rs. {product.price.toLocaleString()}
            </span>
            <div className="flex items-center">
              {[1, 2, 3, 4, 5].map((star) => (
                <StarIcon 
                  key={star} 
                  filled={star <= 4}
                />
              ))}
              <span className="ml-2 text-gray-500">(5 Customer Reviews)</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-600">{product.description}</p>

          {/* Size Selection */}
          <div>
            <h3 className="font-semibold mb-2">Size</h3>
            <div className="flex space-x-2">
              {sizes.map(size => (
                <button
                  key={size}
                  className={`px-4 py-2 rounded ${
                    selectedSize === size 
                      ? 'bg-[#FBEBB5] text-black' 
                      : 'bg-[#FAF4F4] text-gray-700'
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Color Selection */}
          <div>
            <h3 className="font-semibold mb-2">Color</h3>
            <div className="flex space-x-2">
              {colors.map(color => (
                <button
                  key={color.name}
                  className={`w-8 h-8 rounded-full ${
                    selectedColor === color.name ? 'ring-2 ring-black' : ''
                  }`}
                  style={{ backgroundColor: color.hex }}
                  onClick={() => setSelectedColor(color.name)}
                />
              ))}
            </div>
          </div>

          {/* Quantity and Add to Cart */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center border rounded">
              <button 
                onClick={() => handleQuantityChange('decrease')}
                className="px-4 py-2"
              >
                -
              </button>
              <span className="px-4">{quantity}</span>
              <button 
                onClick={() => handleQuantityChange('increase')}
                className="px-4 py-2"
              >
                +
              </button>
            </div>
            <button className="bg-black text-white px-6 py-2 rounded">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Static Props Generation
export const getStaticPaths: GetStaticPaths = async () => {
  // In a real app, fetch product IDs from an API
  const paths = [
    { params: { id: '1' } },
    { params: { id: '2' } },
  ];

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<ProductDetailProps> = async ({ params }) => {
  // In a real app, fetch product data from an API based on params.id
  const product: Product = {
    id: params?.id as string,
    name: 'Asgaard Sofa',
    price: 250000,
    description: 'A comfortable and stylish sofa perfect for modern living spaces.',
    images: ['/asgaard-sofa.png']
  };

  return {
    props: {
      product
    }
  };
};

export default ProductDetail;