import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import noResultsImage from '../assets/images/noresult.jpg'; 

const NoResults = () => {
    return (
        <View style={styles.noResultsContainer}>
            <Image 
                source={noResultsImage} 
                style={styles.image} 
                resizeMode="contain"
            />
            <Text style={styles.text}>No definitions found.</Text>
        </View>
    );
};

export default NoResults;


const styles = StyleSheet.create({
    noResultsContainer: {
        alignItems: 'center',
        padding: 20,
    },
    image: {
        width: '100%', 
        height: undefined,
        aspectRatio: 1, 
        marginBottom: 20,
    },
    text: {
        fontSize: 20, 
        color: '#666',
    },
});
