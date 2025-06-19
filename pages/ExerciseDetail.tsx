import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, ActivityIndicator } from 'react-native';

type Exercise = {
  id: string;
  name: string;
  muscleGroup: string;
  maloPR: number | null;
  orionPR: number | null;
};

const ExerciseDetails = () => {
  const [exercise, setExercise] = useState<Exercise | null>(null);
  const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch('https://muscleapp-green.vercel.app/api/getExercises')
			.then(async (res) => {
				const text = await res.text();
				console.log("Raw response:", text);

				try {
					const data = JSON.parse(text);

					if (Array.isArray(data)) {
						const found = data.find((e: any) => e.id === '1');
						setExercise(found);
					} else {
						console.error("Unexpected response format:", data);
					}
				} catch (parseErr) {
					console.error("Failed to parse JSON:", parseErr);
				}
			})
			.catch((err) => {
				console.error("Network error:", err);
			})
			.finally(() => setLoading(false));
	}, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (!exercise) {
    return (
      <View style={styles.container}>
        <Text>Exercise not found.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{exercise.name}</Text>
      <Text>Muscle Group: {exercise.muscleGroup}</Text>
      <Text>Malo PR: {exercise.maloPR ?? 'N/A'}</Text>
      <Text>Orion PR: {exercise.orionPR ?? 'N/A'}</Text>
    </View>
  );
};

export default ExerciseDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});