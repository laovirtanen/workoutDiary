import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import { styles } from '../styles/AddWorkoutStyles';

const AddWorkout = () => {
  const [workout, setWorkout] = useState('');

  const handleInputChange = (value) => {
    setWorkout(value);
  };

  const handleSubmit = () => {
    console.log(`Workout added: ${workout}`);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter workout"
        value={workout}
        onChangeText={handleInputChange}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddWorkout;
