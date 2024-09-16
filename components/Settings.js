import React from 'react';
import { View, Text } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { useWorkout } from '../context/WorkoutContext';  // Import context
import { styles } from '../styles/SettingsStyles';

const Settings = () => {
  const { unit, changeUnit } = useWorkout();  // Access unit and changeUnit

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Settings</Text>
      <Text>Select Unit:</Text>
      <RadioButton.Group onValueChange={changeUnit} value={unit}>
        <RadioButton.Item label="Kilometers" value="km" />
        <RadioButton.Item label="Miles" value="miles" />
      </RadioButton.Group>
    </View>
  );
};

export default Settings;
