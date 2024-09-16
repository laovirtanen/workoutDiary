import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { styles } from '../styles/SettingsStyles';
import { useWorkout } from '../context/WorkoutContext';  // You can extend context to include unit preferences

const Settings = () => {
  const [unit, setUnit] = useState('km');  // Default unit

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Settings</Text>
      <Text style={styles.label}>Select Unit:</Text>
      <RadioButton.Group onValueChange={setUnit} value={unit}>
        <RadioButton.Item label="Kilometers" value="km" />
        <RadioButton.Item label="Miles" value="miles" />
      </RadioButton.Group>
    </View>
  );
};

export default Settings;
