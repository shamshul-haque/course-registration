# Course Registration

Click here to see the live project: [course-registration](http://shams-course-registration.surge.sh/)

# Project Features

This project offers several key features that enhance its functionality:

## 1. Unique Selection

- Ensures that courses can only be selected once, eliminating duplicates.
- Provides a user-friendly notification when attempting to select the same course again.

## 2. Cost Calculation

- Automatically calculates the total cost incurred by selecting specific courses.

## 3. Credit Management

- Keeps track of the total credit hours taken.
- Notifies the user if the total credit hours exceed the limit of 20.

# How State is Managed in the Project

In this React project, state management is vital for dynamic user interactions. The `useState` function is employed extensively to manage various states effectively:

- `const [courses, setCourses] = useState([]);` is used to store data in a container called `courses`. Once data is loaded and stored using `setCourses`, then I pass `courses` as a prop to `Course` components for displaying it on the user interface.
- `const [cart, setCart] = useState([]);` is used to managed which course is selected by user. Initially I set the state value is an empty array[]. When a unique course is selected by a user I stored the course in `cart` using `setCart`, then I pass `cart` as a prop to `Cart` components for displaying it on the user interface.
- `const [totalCost, setTotalCost] = useState(0);` is used to managed total cost calculation. Initially I set the state value is 0. When a course will be selected, the selected course cost will be added with the previous selected course cost. Then I store the total cost in `totalCost` using `setTotalCost`, then I pass the `totalCost` as a prop to `Cart` component to displaying it on the user interface.
- `const [totalCredit, setTotalCredit] = useState(0);` is used to managed total credit calculation. Initially I set the state value is 0. When a course will be selected, the selected course credit will be added with the previous selected course credit. Then I store the total credit in `totalCredit` using `setTotalCredit`, then I pass the `totalCredit` as a prop to `Cart` component to displaying it on the user interface.
- `const [remainingCredit, setRemainingCredit] = useState(20);` is used to managed remaining credit calculation. Initially I set the state value is 20 because an user can take at most 20 credit. When a course will be selected, the selected course credit will be subtracted from `remainingCredit`. Then I store the remaining credit in `remainingCredit` using `setTotalCredit`, then I pass the `remainingCredit` as a prop to `Cart` component to displaying it on the user interface.

This structured state management ensures the project functions smoothly and provides a seamless user experience.
