import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

const ResultScreen = (props) => (
  <View style={styles.screenContainer}>
    <Text>Final result screen!</Text>
  </View>
);

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default ResultScreen;
