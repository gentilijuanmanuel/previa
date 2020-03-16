import React, { useState, useEffect } from 'react';
import {
  ImageBackground,
  Text,
  TouchableWithoutFeedback,
  StyleSheet,
  View,
  Keyboard,
  Alert,
  Animated
} from 'react-native';

import Card from '../components/Card';
import Input from '../components/Input';
import Button from '../components/Button';
import sharedStyles from '../styles/sharedStyles';

const NumberOfParticipantsScreen = ({ navigation }) => {
  const [numberOfParticipants, setNumberOfParticipants] = useState('');
  const [fadeAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 1000,
      }
    ).start();
  }, []);

  const resetNumberHandler = () => setNumberOfParticipants('');

  const changedTextHandler = (inputText) => setNumberOfParticipants(inputText.replace(/[^0-9]/, ''));

  const nextButtonPressedHandler = () => {
    const chosenNumber = parseInt(numberOfParticipants);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert('Las pilas!', 'Pueden ser de 1 a 99 participantes.', [{ text: 'Ok', style: 'destructive', onPress: resetNumberHandler }]);
      return;
    }

    navigation.navigate('TotalAmountScreen', { numberOfParticipants });
  };

  return (
    <ImageBackground
      source={require('../resources/friends-2.jpg')}
      style={styles.screenContainer}
    >
      <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss(); }}>
        <View style={styles.firstViewContainer}>
          <Animated.View style={{ ...sharedStyles.secondViewContainer, opacity: fadeAnim }}>
            <Card style={styles.cardContainer}>
              <Text style={styles.title}>Cuántos son?</Text>
              <Input
                keyboardType="number-pad"
                blurOnSubmit
                autoCorrect={false}
                maxLength={2}
                onChangeText={changedTextHandler}
                value={numberOfParticipants}
              />
            </Card>
          </Animated.View>
          <Button title="Listo" onPress={nextButtonPressedHandler} />
        </View>
      </TouchableWithoutFeedback>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  screenContainer: sharedStyles.screenContainer,
  firstViewContainer: sharedStyles.firstViewContainer,
  secondViewContainer: sharedStyles.secondViewContainer,
  cardContainer: sharedStyles.cardContainer,
  title: sharedStyles.title
});

export default NumberOfParticipantsScreen;
