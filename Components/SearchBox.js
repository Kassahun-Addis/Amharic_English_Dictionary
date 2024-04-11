
import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Text } from 'react-native';

const SearchBox = ({ onSearch }) => {
    const [word, setWord] = useState('');

    const handleInputChange = (text) => {
        setWord(text);
    };

    const handleSubmit = () => {
        if (word) {
            onSearch(word);
        }
    };

    return (
        <View style={styles.searchBoxContainer}>
            <TextInput
                style={styles.searchInput}
                placeholder="Enter a word..."
                value={word}
                onChangeText={handleInputChange}
            />
            <TouchableOpacity
                style={styles.searchButton}
                onPress={handleSubmit}
                disabled={!word}
            >
                <Text>Search</Text>
            </TouchableOpacity>
        </View>
    );
};

export default SearchBox;

const styles = StyleSheet.create({
    searchBoxContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    searchInput: {
        flex: 1,
        padding: 10,
        fontSize: 16,
        borderWidth: 1,
        borderColor: '#ddd',
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        backgroundColor: '#fff',
    },
    searchButton: {
        padding: 10,
        backgroundColor: '#007bff',
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

// Add the following to handle responsiveness
// You can use the useWindowDimensions hook from React Native to get the window width and adjust the styles accordingly.
