import React from "react";

const Course = ({ course }) => {
  const { image, title, desc, price, credit } = course;
  return (
    <div className="bg-red-400 rounded-md p-3 space-y-2">
      <img src={image} alt={title} className="w-full" />
      <h1 className="font-bold">{title}</h1>
      <p>{desc}</p>
      <div className="flex justify-between">
        <p>$ Price: {price}</p>
        <span>📚 Credit: {credit}hr</span>
      </div>
      <button className="bg-blue-500 w-full p-2 rounded-md">Select</button>
    </div>
  );
};

export default Course;
