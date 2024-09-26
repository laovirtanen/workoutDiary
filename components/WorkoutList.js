import React, { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import { styles } from "../styles/WorkoutListStyles";
import { ButtonGroup } from "react-native-elements";
import { FontAwesome5 } from "@expo/vector-icons";
import { useWorkout } from "../context/WorkoutContext"; // Import the context hook

const WorkoutList = () => {
  const { workouts, unit } = useWorkout(); // Access workouts and unit from context
  const [totals, setTotals] = useState({ run: 0, ski: 0, swim: 0 });

  // Function to convert distance based on the selected unit
  const convertDistance = (distance) => {
    const numericDistance = Number(distance);
    if (unit === "miles") {
      return (numericDistance * 0.621371).toFixed(2); // Convert to miles
    }
    return numericDistance.toFixed(2); // in kilometers
  };

  // Calculate totals for each workout type (Run, Ski, Swim) and convert distance if needed, useeffect for rerender
  useEffect(() => {
    const totals = { run: 0, ski: 0, swim: 0 };

    workouts.forEach((workout) => {
      const distance = Number(convertDistance(workout.distance || 0));
      if (workout.workout === "Run") {
        totals.run += distance;
      } else if (workout.workout === "Ski") {
        totals.ski += distance;
      } else if (workout.workout === "Swim") {
        totals.swim += distance;
      }
    });

    setTotals(totals);
  }, [workouts, unit]);

  //Buttons and fontawsome icons
  const buttons = [
    {
      icon: <FontAwesome5 name="running" size={24} color="black" />,
      text: `Run: ${totals.run} ${unit}`,
    },
    {
      icon: <FontAwesome5 name="skiing-nordic" size={24} color="black" />,
      text: `Ski: ${totals.ski} ${unit}`,
    },
    {
      icon: <FontAwesome5 name="swimmer" size={24} color="black" />,
      text: `Swim: ${totals.swim} ${unit}`,
    },
  ];

  // rendering the button group
  const renderButtonGroup = () =>
    buttons.map((button, index) => (
      <View key={index} style={styles.iconButton}>
        {button.icon}
        <Text style={styles.iconText}>{button.text}</Text>
      </View>
    ));

  return (
    <View style={styles.container}>
      <View style={styles.buttonGroupWrapper}>
        <ButtonGroup
          buttons={renderButtonGroup()}
          containerStyle={styles.buttonGroupContainer}
          buttonStyle={styles.buttonGroupButton}
          selectedButtonStyle={styles.selectedButtonGroupButton}
          innerBorderStyle={{ width: 0 }}
        />
      </View>

      <Text style={styles.header}>Workout List</Text>

      {workouts.length > 0 ? (
        <FlatList
          data={workouts}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <View style={styles.rowContainer}>
                <View
                  style={[
                    styles.iconContainer,
                    {
                      backgroundColor:
                        item.workout === "Run"
                          ? "grey" // running bg color
                          : item.workout === "Ski"
                          ? "lightblue" // skiing bg color
                          : "#00CED1", // swimming bg color
                    },
                  ]}
                >
                  {item.workout === "Run" && (
                    <FontAwesome5 name="running" size={24} color="black" />
                  )}
                  {item.workout === "Ski" && (
                    <FontAwesome5
                      name="skiing-nordic"
                      size={24}
                      color="black"
                    />
                  )}
                  {item.workout === "Swim" && (
                    <FontAwesome5 name="swimmer" size={24} color="black" />
                  )}
                </View>

                <Text style={styles.dateText}>{item.date}</Text>
              </View>

              <View style={styles.textContainer}>
                <Text style={styles.itemText}>Workout: {item.workout}</Text>
                <Text style={styles.itemText}>
                  Distance: {convertDistance(item.distance)} {unit}
                </Text>
                <Text style={styles.itemText}>
                  Duration: {item.duration} min
                </Text>
              </View>
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
