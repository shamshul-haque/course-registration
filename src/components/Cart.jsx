import React from "react";

const Cart = ({ cart, totalCost, totalCredit }) => {
  return (
    <div className="bg-white rounded-md p-3 space-y-3 shadow-md">
      <h1 className="text-blue-400 font-bold">
        Credit Hour Remaining: {20} hr
      </h1>
      <hr />
      <div>
        <h2 className="font-bold">Course Name</h2>
        <ol className="text-gray-500 pt-3 text-sm">
          {cart.map((course, index) => (
            <li key={index}>
              {index + 1}. {course.title}
            </li>
          ))}
        </ol>
      </div>
      <hr />
      <h3>Total Credit Hour: {totalCredit} hr</h3>
      <hr />
      <h4>Total Cost: {totalCost} USD</h4>
    </div>
  );
};

export default Cart;
