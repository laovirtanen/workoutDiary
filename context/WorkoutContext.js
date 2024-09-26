import React, { createContext, useContext, useState } from "react";

const WorkoutContext = createContext();

export const useWorkout = () => useContext(WorkoutContext);

export const WorkoutProvider = ({ children }) => {
  const [workouts, setWorkouts] = useState([]); // workout list
  const [unit, setUnit] = useState("km"); // Default to kilometers

  const addWorkout = (workout) => {
    setWorkouts([...workouts, workout]);
  };

  const changeUnit = (newUnit) => {
    setUnit(newUnit);
  };

  return (
    <WorkoutContext.Provider value={{ workouts, addWorkout, unit, changeUnit }}>
      {children}
    </WorkoutContext.Provider>
  );
};
