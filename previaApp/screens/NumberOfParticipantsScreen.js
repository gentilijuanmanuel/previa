import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button
} from 'react-native';

const NumberOfParticipantsScreen = ({ navigation }) => (
  <View style={styles.screenContainer}>
    <Text>Number of participants screen!</Text>
    <Button title="Next" onPress={() => navigation.navigate('TotalAmountScreen')} />
  </View>
);

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default NumberOfParticipantsScreen;
