// src/components/DictionaryContainer.js

import React, { useState } from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import SearchBox from './SearchBox';
import NoResults from './NoResults';
import LoadingSpinner from './LoadingSpinner';
import { getDefinitions } from '../api/tools';

const DictionaryContainer = () => {
    const [definitions, setDefinitions] = useState([]);
    const [loading, setLoading] = useState(false);
    const [hasSearched, setHasSearched] = useState(false);

    const searchDefinitions = async (word) => {
        setLoading(true);
        setHasSearched(true);
        const data = await getDefinitions(word) || [];
        setDefinitions(data);
        setLoading(false);
    };

    return (
        <View style={styles.container}>
            <SearchBox onSearch={searchDefinitions} />
            {loading && (
                <LoadingSpinner />
            )}
            {!loading && hasSearched && (
                <ScrollView style={styles.definitionsScrollContainer}>
                    {definitions.length > 0 ? (
                        definitions.map((definition, index) => (
                            <View key={index} style={styles.definitionCard}>
                                <Text style={styles.meaning}>{definition.meaning}</Text>
                                <ScrollView style={styles.examplesContainer} nestedScrollEnabled={true}>
                                    {definition.examples.map((example, index) => (
                                        <Text key={index} style={styles.example}>{example}</Text>
                                    ))}
                                </ScrollView>
                            </View>
                        ))
                    ) : (
                        <NoResults />
                    )}
                </ScrollView>
            )}
            {!loading && !hasSearched && (
    
                <View style={styles.welcomeMessage}>
                {/* <Text style={styles.welcomeTitle}>Azeb's Dictionary!</Text> */}
                <Text style={[styles.welcomeTitle, { fontSize: 20, fontWeight: 'bold' }]}>Kasus's Dictionary!</Text>
                <Text>Type a word in the search box above to get started.</Text>
                </View>
            )}
        </View>
    );
};

export default DictionaryContainer;

// src/styles/DictionaryContainerStyles.js

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    definitionsScrollContainer: {
        width: '100%',
    },
    definitionCard: {
        marginBottom: 20,
        padding: 15,
        backgroundColor: '#fff',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    meaning: {
        color: '#495057',
        backgroundColor: '#e9ecef',
        borderRadius: 5,
        padding: 10,
        marginTop: 20,
    },
    examplesContainer: {
        maxHeight: 200,
    },
    example: {
        backgroundColor: '#fff',
        marginBottom: 5,
        padding: 10,
        borderLeftWidth: 3,
        borderLeftColor: '#007bff',
        borderRadius: 5,
    },
    welcomeMessage: {
        textAlign: 'center',
        padding: 20,
        marginTop: 20,
        backgroundColor: '#f8f9fa',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    welcomeTitle: {
        color: '#007bff',
        marginBottom: 15,
    },
});
