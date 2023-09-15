import React, { useEffect, useState } from "react";
import Cart from "./Cart";
import Course from "./Course";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const res = await fetch("./courseData.json");
      const data = await res.json();
      setCourses(data);
    };
    loadData();
  }, []);

  const handleSelection = (course) => {
    const selected = [...cart, course];
    setCart(selected);
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
        <Cart cart={cart} />
      </div>
    </div>
  );
};

export default Courses;
