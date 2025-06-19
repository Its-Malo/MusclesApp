import React from 'react';
import {useState, useEffect} from 'react';
import {View, StyleSheet, TextInput, FlatList} from 'react-native';
import filter from 'lodash.filter';
import data from '../exercices.json'

type Props = {
	name: string;
	muscleGroup: string;
};

export default function SearchBar() {
	const [searchQuery, setSearchQuery] = useState('');
	const [fullData, setFullData] = useState(data);
	const [filteredData, setFilteredData] = useState(data);

	const handleSearch = (query: string) => {
		setSearchQuery(query);
		const formattedQuery = query.toLowerCase();
		const filtered = filter(fullData, (exercise) => contains(exercise, formattedQuery));
		setFilteredData(filtered);
	};

	const contains = ({name, muscleGroup}: Props, query: string) => {
		if (name.toLowerCase().includes(query) || muscleGroup.toLowerCase().includes(query)) {
			return true;
		}
		return false;
	}

	return (
		<View style={styles.container}>
			<TextInput
				placeholder='Rechercher'
				clearButtonMode='always'
				style={styles.searchBar}
				autoCapitalize='none'
				autoCorrect={false}
				value={searchQuery}
				onChangeText={(query) => handleSearch(query)}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		paddingBottom: 16,
		marginHorizontal: 20,
	},
	searchBar: {
		paddingHorizontal: 20,
		paddingVertical: 10,
		borderColor: "#ccc",
		borderWidth: 1,
		borderRadius: 8,
	},
});