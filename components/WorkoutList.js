import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import { styles } from '../styles/WorkoutListStyles';
import { ButtonGroup } from 'react-native-elements';
import { FontAwesome5 } from '@expo/vector-icons'; 

const WorkoutList = ({ workouts }) => {
  const [totals, setTotals] = useState({ run: 0, ski: 0, swim: 0 });

  useEffect(() => {
    const runTotal = workouts
      .filter(workout => workout.workout === 'Run')
      .reduce((sum, workout) => sum + parseFloat(workout.distance || 0), 0);
    const skiTotal = workouts
      .filter(workout => workout.workout === 'Ski')
      .reduce((sum, workout) => sum + parseFloat(workout.distance || 0), 0);
    const swimTotal = workouts
      .filter(workout => workout.workout === 'Swim')
      .reduce((sum, workout) => sum + parseFloat(workout.distance || 0), 0);

    setTotals({ run: runTotal, ski: skiTotal, swim: swimTotal });
  }, [workouts]);

  const buttons = [
    {
      icon: <FontAwesome5 name="running" size={24} color="black" />,
      text: `Run: ${totals.run} km`,
    },
    {
      icon: <FontAwesome5 name="skiing-nordic" size={24} color="black" />,
      text: `Ski: ${totals.ski} km`,
    },
    {
      icon: <FontAwesome5 name="swimmer" size={24} color="black" />,
      text: `Swim: ${totals.swim} km`,
    },
  ];

  const renderButtonGroup = () =>
    buttons.map((button, index) => (
      <View key={index} style={styles.iconButton}>
        {button.icon}
        <Text style={styles.iconText}>{button.text}</Text>
      </View>
    ));

  return (
    <View style={styles.container}>

      <View style={styles.buttonGroupWrapper}>
        <ButtonGroup
          buttons={renderButtonGroup()}
          containerStyle={styles.buttonGroupContainer}
          buttonStyle={styles.buttonGroupButton}
          selectedButtonStyle={styles.selectedButtonGroupButton}
          innerBorderStyle={{ width: 0 }}
        />
      </View>

      <Text style={styles.header}>Workout List</Text>

      {workouts.length > 0 ? (
        <FlatList
  data={workouts}
  keyExtractor={(item, index) => index.toString()}
  renderItem={({ item }) => (
    <View style={styles.item}>
      <View style={styles.rowContainer}>
        {/* Display the workout icon */}
        <View style={styles.iconContainer}>
          {item.workout === 'Run' && (
            <FontAwesome5 name="running" size={24} color="black" />
          )}
          {item.workout === 'Ski' && (
            <FontAwesome5 name="skiing-nordic" size={24} color="black" />
          )}
          {item.workout === 'Swim' && (
            <FontAwesome5 name="swimmer" size={24} color="black" />
          )}
        </View>

        <Text style={styles.dateText}>{item.date}</Text>
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.itemText}>Workout: {item.workout}</Text>
        <Text style={styles.itemText}>Distance: {item.distance} km</Text>
        <Text style={styles.itemText}>Duration: {item.duration} min</Text>
      </View>
    </View>
  )}
/>

      ) : (
        <Text>No workouts added yet</Text>
      )}
    </View>
  );
};

export default WorkoutList;
