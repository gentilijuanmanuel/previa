import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet
} from 'react-native';

const TotalAmountScreen = ({ navigation }) => (
  <View style={styles.screenContainer}>
    <Text>Total amount screen!</Text>
    <Button title="Next" onPress={() => navigation.navigate('ParticipantsExpensesScreen')} />
  </View>
);

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default TotalAmountScreen;
