import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const ExerciseCreation = () => {
	//const navigation = useNavigation();

	return (
		<View style={styles.container}>
			<Text>Exercise Creation</Text>
		</View>
	);
};

export default ExerciseCreation;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		paddingTop: 50,
	}
});