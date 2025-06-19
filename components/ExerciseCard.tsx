import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Props = {
  name: string;
  muscleGroup: string;
};

const ExerciseCard = ({ name, muscleGroup }: Props) => {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.group}>{muscleGroup}</Text>
    </View>
  );
};

export default ExerciseCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f44',
    padding: 16,
    borderRadius: 10,
    marginBottom: 12,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  group: {
    fontSize: 14,
    color: '#fff',
  },
});
