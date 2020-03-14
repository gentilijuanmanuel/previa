import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet
} from 'react-native';

const ParticipantsExpensesScreen = ({ navigation }) => (
  <View style={styles.screenContainer}>
    <Text>Participant expenses screen!</Text>
    <Button title="Next" onPress={() => navigation.navigate('ResultScreen')} />
  </View>
);

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default ParticipantsExpensesScreen;
