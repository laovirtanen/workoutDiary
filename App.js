import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AddWorkout from './components/AddWorkout'; 

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Add Workout">
        <Stack.Screen name="Add Workout" component={AddWorkout} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
