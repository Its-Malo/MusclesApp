import React from 'react';
import {useState} from 'react';
import {View, StyleSheet, TextInput, FlatList} from 'react-native';
import filter from 'lodash.filter';

type Props = {
    id: React.Key;
      name: string;
      muscleGroup: string;
      maloPR?: number | null;
      orionPR?: number | null;
  };

type SearchBarProps = {
    data: Props[];
    onFiltered: (filtered: Props[]) => void;
};  

export default function SearchBar({ data, onFiltered }: SearchBarProps) {
	const [searchQuery, setSearchQuery] = useState('');

	const handleSearch = (query: string) => {
		setSearchQuery(query);
		const formattedQuery = query.toLowerCase();
		const filtered = filter(data, (exercise) => contains(exercise, formattedQuery));
		onFiltered(filtered);
	};

	const contains = ({name, muscleGroup}: Props, query: string) => {
        return (
            name.toLowerCase().includes(query) || muscleGroup.toLowerCase().includes(query)
        );
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
				onChangeText={handleSearch}
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