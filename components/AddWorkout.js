import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../styles/AddWorkoutStyles';
import { ButtonGroup } from 'react-native-elements';
import { FontAwesome5 } from '@expo/vector-icons';
import { TextInput as PaperTextInput } from 'react-native-paper';

const AddWorkout = ({ navigation, addWorkout }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');
  const [selectedDate, setSelectedDate] = useState('');


  // Define workout options with icons and labels
  const buttons = [
    {
      text: 'Run',
      icon: <FontAwesome5 name="running" size={24} color="black" />,
    },
    {
      text: 'Ski',
      icon: <FontAwesome5 name="skiing-nordic" size={24} color="black" />,
    },
    {
      text: 'Swim',
      icon: <FontAwesome5 name="swimmer" size={24} color="black" />,
    },
  ];

  const handleSubmit = () => {
    const newWorkout = {
      workout: buttons[selectedIndex].text, 
      distance,
      duration,
      date: selectedDate,
    };

    addWorkout(newWorkout); 

    navigation.navigate('Workout List'); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Add Workout</Text>

      <ButtonGroup
        onPress={(index) => setSelectedIndex(index)}
        selectedIndex={selectedIndex}
        buttons={buttons.map((button) => (
          <View style={styles.iconButton}>
            {button.icon}
            <Text style={styles.iconText}>{button.text}</Text>
          </View>
        ))}
        containerStyle={styles.buttonGroupContainer}
        buttonStyle={styles.buttonGroupButton}
        selectedButtonStyle={styles.selectedButtonGroupButton}
        innerBorderStyle={{ width: 0 }}
      />

      <PaperTextInput
        label="Distance (km)"
        value={distance}
        onChangeText={setDistance}
        mode="outlined"
        style={styles.textInput}
        keyboardType="numeric"
      />

      <PaperTextInput
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
