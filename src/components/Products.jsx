import React from "react";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";

const Products = () => {
  return (
    <div className="w-4/5 m-auto space-y-10">
      <div className="flex justify-between items-center p-2">
        <ul className="flex items-center space-x-8">
          <li>Collection</li>
          <li>Phones</li>
          <li>Shirts</li>
          <li>Shoes</li>
          <li>Glasses</li>
        </ul>
        <div className="flex items-center space-x-5">
          <button>
            <BsArrowLeft size={"1.5rem"} />
          </button>
          <button className="bg-rose-300 rounded-full p-2 text-white drop-shadow-xl">
            <BsArrowRight size={"1.5rem"} />
          </button>
        </div>
      </div>
      <div
        className="products grid xl:grid-cols-4 
      grid-cols-2 justify-content-center "
      >
        <div className="products h-[300px] space-y-2">
          <img
            classname="w-full h-4/5 object-cover"
            src="images/labtop.jpg"
            alt="image labtop"
          />
          <p className="font-semibold text-gray-600">Lorem ipsum dolor.</p>
          <h1 className="text-xl font-semibold">$700</h1>
        </div>
      </div>
      <div className="w-full h-[300px relative]">
        <img src="images/phone.jpg" alt="image phone" />
        <div>
          <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consectetur veniam, hic facilis quibusdam dolore voluptates.
          </p>
          <button>See More</button>
        </div>
      </div>
      <h2>apenas teste de commit</h2>
    </div>
  );
};

export default Products;
