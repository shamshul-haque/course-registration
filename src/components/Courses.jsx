import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cart from "./Cart";
import Course from "./Course";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [cart, setCart] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const [totalCredit, setTotalCredit] = useState(0);
  const [remainingCredit, setRemainingCredit] = useState(20);

  useEffect(() => {
    const loadData = async () => {
      const res = await fetch("./courseData.json");
      const data = await res.json();
      setCourses(data);
    };
    loadData();
  }, []);

  const handleSelection = (course) => {
    const isExist = cart.find((selected) => selected.id === course.id);
    let cost = course.price;
    let credit = course.credit;
    if (isExist) {
      return toast.warn(
        "You have already selected this course before. Please select a new course!",
        {
          theme: "colored",
        }
      );
    } else {
      cart.forEach((item) => {
        cost += item.price;
        credit += item.credit;
      });

      if (credit > 20) {
        return toast.warn("More than 20 credit is not allowed!", {
          theme: "colored",
        });
      } else {
        setTotalCost(cost);
        setTotalCredit(credit);
        const remaining = remainingCredit - course.credit;
        setRemainingCredit(remaining);
        const selected = [...cart, course];
        setCart(selected);
      }
    }
  };

  return (
    <div className="flex flex-col lg:flex-row gap-10 mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 basis-9/12">
        {courses.map((course) => (
          <Course
            key={course.id}
            course={course}
            handleSelection={handleSelection}
          />
        ))}
      </div>
      <div className="basis-3/12">
        <Cart
          cart={cart}
          totalCost={totalCost}
          totalCredit={totalCredit}
          remainingCredit={remainingCredit}
        />
      </div>
      <ToastContainer />
    </div>
  );
};

export default Courses;
