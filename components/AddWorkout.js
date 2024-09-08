import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../styles/AddWorkoutStyles';
import { ButtonGroup } from 'react-native-elements';
import { FontAwesome5 } from '@expo/vector-icons';
import { TextInput } from 'react-native-paper'; 

const AddWorkout = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');
  const [workout, setWorkout] = useState('');

  const updateIndex = (index) => {
    setSelectedIndex(index);
  };

  const buttons = [
    { element: () => (
      <View style={styles.iconButton}>
        <FontAwesome5 name="running" size={24} color="black" />
        <Text style={styles.iconText}>Run</Text>
      </View>
    ) },
    { element: () => (
      <View style={styles.iconButton}>
        <FontAwesome5 name="skiing-nordic" size={24} color="black" />
        <Text style={styles.iconText}>Ski</Text>
      </View>
    ) },
    { element: () => (
      <View style={styles.iconButton}>
        <FontAwesome5 name="swimmer" size={24} color="black" />
        <Text style={styles.iconText}>Swim</Text>
      </View>
    ) }
  ];

  const handleSubmit = () => {
    console.log(`Workout: ${workout}, Distance: ${distance}, Duration: ${duration}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Add Workout</Text>

      <ButtonGroup
        onPress={updateIndex}
        selectedIndex={selectedIndex}
        buttons={buttons}
        containerStyle={styles.buttonGroupContainer}
        buttonStyle={styles.buttonGroupButton}
        selectedButtonStyle={styles.selectedButtonGroupButton}
        innerBorderStyle={{ width: 0 }}
      />

   
      <TextInput
        label="Distance (km)"
        value={distance}
        onChangeText={setDistance}
        mode="outlined" 
        style={styles.textInput} 
        keyboardType="numeric"
      />

      <TextInput
        label="Duration (min)"
        value={duration}
        onChangeText={setDuration}
        mode="outlined"
        style={styles.textInput} 
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Add Workout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddWorkout;
