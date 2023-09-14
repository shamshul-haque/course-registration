import React, { useEffect, useState } from "react";
import Cart from "./Cart";
import Course from "./Course";

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const res = await fetch("./courseData.json");
      const data = await res.json();
      setCourses(data);
    };
    loadData();
  }, []);

  return (
    <div>
      <div>
        {courses.map((course) => (
          <Course key={course.id} course={course} />
        ))}
      </div>
      <Cart />
    </div>
  );
};

export default Courses;
