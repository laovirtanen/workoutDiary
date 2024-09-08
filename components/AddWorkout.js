import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { styles } from '../styles/AddWorkoutStyles';
import { ButtonGroup } from 'react-native-elements';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';



const AddWorkout = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [workout, setWorkout] = useState('');
  const [distance, setDistance] = useState(0);
  const [duration, setDuration] = useState(0);


  const updateIndex = (index) => {
    setSelectedIndex(index);
  };

  const buttons = [
    { element: () => (
      <View style={styles.iconButton}>
        <FontAwesome5 name="swimmer" size={24} color="black" />
        <Text style={styles.iconText}>Swim</Text>
      </View>
    ) },
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
    ) }
  ];

  const handleSubmit = () => {
    console.log(`Workout: ${workout}, Type: ${buttons[selectedIndex]}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Select workout</Text>

      <ButtonGroup
        onPress={updateIndex}
        selectedIndex={selectedIndex}
        buttons={buttons}
        containerStyle={styles.buttonGroupContainer}
        selectedButtonStyle={styles.selectedButtonGroupButton}
      />



      <TextInput
        style={styles.input}
        placeholder="0"
        value={distance}
        onChangeText={setDistance}
      />


      <TextInput
        style={styles.input}
        placeholder="0"
        value={duration}
        onChangeText={setDuration}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Add Workout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddWorkout;
