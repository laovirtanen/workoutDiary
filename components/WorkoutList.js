import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { styles } from '../styles/WorkoutListStyles';
import { useRoute } from '@react-navigation/native';


const WorkoutList = ({ workouts }) => {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Workout List</Text>
  
        {workouts.length > 0 ? (
          <FlatList
            data={workouts}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={styles.item}>
                <Text style={styles.itemText}>Workout: {item.workout}</Text>
                <Text style={styles.itemText}>Distance: {item.distance} km</Text>
                <Text style={styles.itemText}>Duration: {item.duration} min</Text>
                <Text style={styles.itemText}>Date: {item.date}</Text>
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