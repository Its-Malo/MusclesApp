import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import ExerciseCard from '../components/ExerciseCard';

const exercises = [
  { id: '1', name: 'Bench', muscleGroup: 'Chest' },
  { id: '2', name: 'Squat', muscleGroup: 'Legs' },
  { id: '3', name: 'Pulldown', muscleGroup: 'Back' },
  { id: '4', name: 'Super Incline', muscleGroup: 'Chest' },
];

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {exercises.map((exercise) => (
          <ExerciseCard
            key={exercise.id}
            name={exercise.name}
            muscleGroup={exercise.muscleGroup}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
  },
  scrollContainer: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
});