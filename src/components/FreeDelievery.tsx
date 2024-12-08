// components/Rectangle.tsx
import React from 'react';

const Rectangle: React.FC = () => {
  return (
    <div className="flex justify-center items-center relative w-full h-72 bg-[#FAF4F4] md:h-80 lg:h-96">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8  ">
            <div>
                <h1 className='text-2xl'>Free Delievery</h1>
                <p>For all oders over $50, consectetur <br />adipim scing elit.</p>

            </div>
            <div>
                <h1 className='text-2xl'>90 Days Retur</h1>
                <p>If goods have problems, consectetur <br />adipim scing elit.</p>
                
            </div>
            <div>
                <h1 className='text-2xl'>Secure Paymen</h1>
                <p>100% secure payment, consectetur <br /> adipim scing elit.</p>
                
            </div>

        </div>
      
    </div>
  );
};

export default Rectangle;