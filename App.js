import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AddWorkout from './components/AddWorkout';
import WorkoutList from './components/WorkoutList';
import Settings from './components/Settings';
import { WorkoutProvider } from './context/WorkoutContext';
import { FontAwesome5 } from '@expo/vector-icons';

// Create Tab Navigator
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <WorkoutProvider>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = 'home';
              } else if (route.name === 'Workouts') {
                iconName = 'dumbbell';
              } else if (route.name === 'Settings') {
                iconName = 'cog';
              }

              return <FontAwesome5 name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#6200ea',
            tabBarInactiveTintColor: 'gray',
          })}
        >
          <Tab.Screen name="Home" component={AddWorkout} />
          <Tab.Screen name="Workouts" component={WorkoutList} />
          <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
      </NavigationContainer>
    </WorkoutProvider>
  );
}
