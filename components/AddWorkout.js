import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal } from 'react-native';
import { styles } from '../styles/AddWorkoutStyles';
import { ButtonGroup } from 'react-native-elements';
import { FontAwesome5 } from '@expo/vector-icons';
import { TextInput as PaperTextInput } from 'react-native-paper'; // Use TextInput from React Native Paper
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import ModalComponent from 'react-native-modal'; // Modal from react-native-modal

const AddWorkout = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');
  const [workout, setWorkout] = useState('');
  const [isModalVisible, setModalVisible] = useState(false); // Modal visibility
  const [selectedDate, setSelectedDate] = useState(''); // Selected date

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
    console.log(`Workout: ${workout}, Distance: ${distance}, Duration: ${duration}, Date: ${selectedDate}`);
  };

  // Modal handlers
  const showModal = () => {
    setModalVisible(true);
  };

  const hideModal = () => {
    setModalVisible(false);
  };

  const onDayPress = (day) => {
    setSelectedDate(day.dateString); // Set the selected date
    hideModal(); // Hide the modal after selecting a date
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

      {/* TextInput for entering distance */}
      <PaperTextInput
        label="Distance (km)"
        value={distance}
        onChangeText={setDistance}
        mode="outlined"
        style={styles.textInput} 
        keyboardType="numeric"
      />

      {/* TextInput for entering duration */}
      <PaperTextInput
        label="Duration (min)"
        value={duration}
        onChangeText={setDuration}
        mode="outlined"
        style={styles.textInput} 
        keyboardType="numeric"
      />

      {/* Calendar Modal Trigger */}
      <TouchableOpacity onPress={showModal} style={styles.datePickerButton}>
        <Text style={styles.datePickerText}>
          {selectedDate ? selectedDate : 'Select Date'}
        </Text>
      </TouchableOpacity>

      {/* Modal for the Calendar */}
      <ModalComponent isVisible={isModalVisible} onBackdropPress={hideModal}>
        <View style={styles.modalContainer}>
          <Calendar
            onDayPress={onDayPress}
            markedDates={{
              [selectedDate]: { selected: true, marked: true, selectedColor: '#6200ea' },
            }}
          />
        </View>
      </ModalComponent>

      {/* Submit Button */}
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Add Workout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddWorkout;
