import React from "react";
import { BsBook } from "react-icons/bs";

const Course = ({ course, handleSelection }) => {
  const { image, title, desc, price, credit } = course;
  return (
    <div className="bg-white rounded-md p-3 space-y-2 shadow-md">
      <img src={image} alt={title} className="w-full" />
      <h1 className="font-bold">{title}</h1>
      <p className="text-gray-500 text-sm text-justify line-clamp-3">{desc}</p>
      <div className="flex justify-between text-gray-500 text-sm">
        <p>
          <span className="text-black">$</span>
          <span className="ml-2">Price: {price}</span>
        </p>
        <p className="flex items-center gap-2">
          <span className="text-black">
            <BsBook />
          </span>
          <span>Credit: {credit}hr</span>
        </p>
      </div>
      <button
        className="bg-blue-500 w-full p-2 rounded-md text-white"
        onClick={() => handleSelection(course)}
      >
        Select
      </button>
    </div>
  );
};

export default Course;
