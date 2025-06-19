import React from 'react';
import {View, ScrollView, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import ExerciseCard from '../components/ExerciseCard';
import SearchBar from '../components/SearchBar';

type Props = {
  id: React.Key;
	name: string;
	muscleGroup: string;
	maloPR?: number | null;
	orionPR?: number | null;
};

const exercises = require('../exercices.json');

const HomeScreen = () => {
	const navigation = useNavigation();

	return (
		<View style={styles.container}>
      <SearchBar />
			<ScrollView contentContainerStyle={styles.scrollContainer}>
				{exercises.map(({id, name, muscleGroup, maloPR, orionPR} : Props) => (
					<TouchableOpacity
						key={id}
						onPress={() =>
							navigation.navigate('Details')
						}
					>
						<ExerciseCard
							name={name}
							muscleGroup={muscleGroup}
							maloPR={maloPR}
							orionPR={orionPR}
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