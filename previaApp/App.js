import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text
} from 'react-native';

const App = () => (
  <SafeAreaView style={styles.container}>
    <Text>Hello, this is previa app!</Text>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default App;
