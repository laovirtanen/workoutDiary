import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../styles/AddWorkoutStyles';
import { ButtonGroup } from 'react-native-elements';
import { FontAwesome5 } from '@expo/vector-icons';
import { TextInput as PaperTextInput } from 'react-native-paper';
import { Calendar } from 'react-native-calendars';
import Modal from 'react-native-modal';
import { useWorkout } from '../context/WorkoutContext';  // Import the context hook

const AddWorkout = ({ navigation }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);

  const { addWorkout, unit } = useWorkout();  // Access addWorkout and unit from context

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

    addWorkout(newWorkout);  // Add the workout using context
    navigation.navigate('Workouts');  // Navigate to Workout List
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleDayPress = (day) => {
    setSelectedDate(day.dateString);
    setModalVisible(false);
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

      {/* Update the label based on the selected unit */}
      <PaperTextInput
        label={`Distance (${unit})`}  // Dynamically change between km and miles
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

      <TouchableOpacity onPress={toggleModal} style={styles.datePickerButton}>
        <Text style={styles.datePickerText}>
          {selectedDate ? `Date: ${selectedDate}` : 'Select Date'}
        </Text>
      </TouchableOpacity>

      <Modal isVisible={isModalVisible} onBackdropPress={toggleModal}>
        <View style={styles.modalContainer}>
          <Calendar
            onDayPress={handleDayPress}
            markedDates={{
              [selectedDate]: { selected: true, marked: true, selectedColor: '#6200ea' },
            }}
          />
        </View>
      </Modal>

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Add Workout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddWorkout;
