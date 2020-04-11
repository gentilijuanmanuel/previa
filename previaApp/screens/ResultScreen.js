import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

const ResultScreen = ({ navigation, route }) => {
  const { numberOfParticipants, expense, participants } = route.params;
  
  console.log(numberOfParticipants);
  console.log(expense);
  console.log(participants);

  return (
    <View style={styles.screenContainer}>
      <Text>Final result screen!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default ResultScreen;
