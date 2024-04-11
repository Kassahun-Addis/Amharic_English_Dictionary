
import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

const LoadingSpinner = () => {
  return (
    <View style={styles.loadingSpinnerContainer}>
      <ActivityIndicator size="large" color="#007bff" />
    </View>
  );
};

export default LoadingSpinner;


const styles = StyleSheet.create({
  loadingSpinnerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
