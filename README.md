# Live Link

Click here to see the live project: [shams-course-registration.surge.sh](http://shams-course-registration.surge.sh/)

# Project Features

This project offers several key features that enhance its functionality:

## 1. Unique Selections with Notification

- Ensures that courses can only be selected once, eliminating duplicates.
- Provides a user-friendly toast notification when attempting to select the same course again.

## 2. Cost Calculation

- Automatically calculates the total cost incurred by selecting specific courses.

## 3. Credit Management with Notifications

- Keeps track of the total credit hours taken.
- Notifies the user if the total credit hours exceed the limit of 20.

# How State is Managed in the Project

In this React project, state management is vital for dynamic user interactions. The `useState` function is employed extensively to manage various states effectively:

- `const [courses, setCourses] = useState([]);`: Stores course data in the `courses` state, which is then passed as a prop to `Course` components for rendering on the user interface.
- `const [cart, setCart] = useState([]);`: Manages the selected courses by users. Initially, it's an empty array, and when a unique course is chosen, it's added to the `cart` state using `setCart`. The `cart` state is then passed as a prop to the `Cart` component to display the selected courses.
- `const [totalCost, setTotalCost] = useState(0);`: Manages the total cost calculation. It's initially set to 0 and gets updated as users select courses. The total cost is stored in the `totalCost` state using `setTotalCost`, and it's passed as a prop to the `Cart` component for display.
- `const [totalCredit, setTotalCredit] = useState(0);`: Manages the total credit calculation. It starts at 0 and increments as users select courses. The total credit is stored in the `totalCredit` state using `setTotalCredit`, and it's passed as a prop to the `Cart` component for display.
- `const [remainingCredit, setRemainingCredit] = useState(20);`: Manages the remaining credit calculation. Initially set to 20, it decreases as users select courses. The remaining credit is stored in the `remainingCredit` state using `setRemainingCredit`, and it's passed as a prop to the `Cart` component for display.

This structured state management ensures the project functions smoothly and provides a seamless user experience.
