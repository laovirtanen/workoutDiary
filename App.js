import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AddWorkout from './components/AddWorkout';
import WorkoutList from './components/WorkoutList';

const Stack = createStackNavigator();

export default function App() {
  const [workouts, setWorkouts] = useState([]);

  // Function to add new workout
  const addWorkout = (newWorkout) => {
    setWorkouts([...workouts, newWorkout]);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Add Workout">
        <Stack.Screen name="Add Workout">
          {(props) => <AddWorkout {...props} addWorkout={addWorkout} />} 
        </Stack.Screen>
        <Stack.Screen name="Workout List">
          {(props) => <WorkoutList {...props} workouts={workouts} />} 
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
