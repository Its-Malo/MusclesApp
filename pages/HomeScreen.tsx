import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import ExerciseCard from '../components/ExerciseCard';
import SearchBar from '../components/SearchBar';

const exercises = require('../exercices.json');

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <SearchBar />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {exercises.map((exercise) => (
          <ExerciseCard
            key={exercise.id}
            name={exercise.name}
            muscleGroup={exercise.muscleGroup}
            maloPR={exercise.maloPR}
            orionPR={exercise.orionPR}
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