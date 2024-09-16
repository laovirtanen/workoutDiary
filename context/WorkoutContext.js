import React, { createContext, useState, useContext } from 'react';

// Create the context
const WorkoutContext = createContext();

// Custom hook to use the WorkoutContext
export const useWorkout = () => useContext(WorkoutContext);

// Provider component to wrap around the app
export const WorkoutProvider = ({ children }) => {
  const [workouts, setWorkouts] = useState([]);

  // Function to add new workout
  const addWorkout = (newWorkout) => {
    setWorkouts([...workouts, newWorkout]);
  };

  return (
    <WorkoutContext.Provider value={{ workouts, addWorkout }}>
      {children}
    </WorkoutContext.Provider>
  );
};
