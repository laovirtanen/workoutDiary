import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { styles } from '../styles/AddWorkoutStyles';
import { ButtonGroup } from 'react-native-elements';

const AddWorkout = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [workout, setWorkout] = useState('');

  const updateIndex = (index) => {
    setSelectedIndex(index);
  };

  const buttons = ['Run', 'Ski', 'Swim'];

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
        value={workout}
        onChangeText={setWorkout}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Add Workout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddWorkout;
