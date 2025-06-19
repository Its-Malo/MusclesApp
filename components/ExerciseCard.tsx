import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Props = {
	name: string;
	muscleGroup: string;
	maloPR?: number | null;
	orionPR?: number | null;
};

const ExerciseCard = ({ name, muscleGroup, maloPR, orionPR }: Props) => {
	return (
		<View style={styles.card}>
			<Text style={styles.name}>{name}</Text>
			<Text style={styles.group}>{muscleGroup}</Text>
			<View style={styles.prContainer}>
				{maloPR != null && (
					<View style={styles.prBoxMalo}>
						<Text style={styles.prText}>{maloPR}</Text>
					</View>
				)}
				{orionPR != null && (
					<View style={styles.prBoxOrion}>
						<Text style={styles.prText}>{orionPR}</Text>
					</View>
				)}
			</View>
		</View>
	);
};

export default ExerciseCard;

const styles = StyleSheet.create({
	card: {
		backgroundColor: '#1f2540',
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
	pr: {
		fontSize: 14,
		color: '#fff',
		marginTop: 4,
	},
	prContainer: {
		flexDirection: 'row',
		marginTop: 8,
		gap: 8,
	},
	prBoxMalo: {
		backgroundColor: '#FFA500', // orange
		paddingVertical: 4,
		paddingHorizontal: 8,
		borderRadius: 6,
	},
	prBoxOrion: {
		backgroundColor: '#1E90FF', // dodger blue
		paddingVertical: 4,
		paddingHorizontal: 8,
		borderRadius: 6,
	},
	prText: {
		color: '#fff',
		fontSize: 14,
	},
});
