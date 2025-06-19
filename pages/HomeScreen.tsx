import React from 'react';
import {View, ScrollView, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import ExerciseCard from '../components/ExerciseCard';

const exercises = [
	{id: '1', name: 'Bench', muscleGroup: 'Chest', maloPR: 100, orionPR: 120},
	{id: '2', name: 'Squat', muscleGroup: 'Legs', maloPR: 150, orionPR: 180},
	{id: '3', name: 'Pulldown', muscleGroup: 'Back', maloPR: 45, orionPR: 60},
	{id: '4', name: 'Super Incline', muscleGroup: 'Chest', maloPR: null, orionPR: 100},
	{id: '5', name: 'Deadlift', muscleGroup: 'Legs', maloPR: 200, orionPR: null},
	{id: '6', name: 'Overhead Press', muscleGroup: 'Shoulders', maloPR: 80, orionPR: 90},
	{id: '7', name: 'Bicep Curl', muscleGroup: 'Arms', maloPR: null, orionPR: 40},
	{id: '8', name: 'Tricep Extension', muscleGroup: 'Arms', maloPR: 50, orionPR: null},
	{id: '9', name: 'Leg Press', muscleGroup: 'Legs', maloPR: 220, orionPR: 250},
	{id: '10', name: 'Lateral Raise', muscleGroup: 'Shoulders', maloPR: null, orionPR: 30},
];

const HomeScreen = () => {
	const navigation = useNavigation();

	return (
		<View style={styles.container}>
			<ScrollView contentContainerStyle={styles.scrollContainer}>
				{exercises.map((exercise) => (
					<TouchableOpacity
						key={exercise.id}
						onPress={() =>
							navigation.navigate('Details')
						}
					>
						<ExerciseCard
							name={exercise.name}
							muscleGroup={exercise.muscleGroup}
							maloPR={exercise.maloPR}
							orionPR={exercise.orionPR}
						/>
					</TouchableOpacity>
				))}
			</ScrollView>
			<TouchableOpacity style={styles.floatingButton} onPress={() => navigation.navigate('Creation')}>
				<Text style={styles.text}>+</Text>
			</TouchableOpacity>
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
	floatingButton: {
		position: 'absolute',
		bottom: 20,
		right: 20,
		width: 80,
		height: 80,
		backgroundColor: '#025cc1',
		borderRadius: 45,
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		position: 'absolute',
		bottom: 14,
		right: 23,
		color: '#fff',
		fontSize: 48,
		justifyContent: 'center',
		alignItems: 'center',
		fontWeight: 'bold',
		textAlign: 'center',
		textAlignVertical: 'center',
	},
});