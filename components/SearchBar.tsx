import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import filter from 'lodash.filter';



export default function SearchBar() {
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = (query) => {
    setSearchQuery(query);
    const formattedQuery = query.toLowerCase();
    const filteredData = filter(fullData)
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
      marginHorizontal:20,
    },
    searchBar: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 8,
    },
});