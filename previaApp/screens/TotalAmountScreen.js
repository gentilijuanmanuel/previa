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

const TotalAmountScreen = ({ navigation, route }) => {
  const { numberOfParticipants } = route.params;

  const [spentMoney, setSpentMoney] = useState('');
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

  const resetNumberHandler = () => setSpentMoney('');

  const changedTextHandler = (inputText) => setSpentMoney(inputText);

  const nextButtonPressedHandler = () => {
    const chosenNumber = parseFloat(spentMoney);
    if (isNaN(chosenNumber) || chosenNumber <= 0) {
      Alert.alert('Las pilas!', 'Ingresá un monto válido.', [{ text: 'Ok', style: 'destructive', onPress: resetNumberHandler }]);
      return;
    }

    navigation.navigate('ParticipantsExpensesScreen', {
      chosenNumber,
      numberOfParticipants
    });
  };

  return (
    <ImageBackground
      source={require('../resources/friends-3.jpg')}
      style={styles.screenContainer}
    >
      <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss(); }}>
        <View style={styles.firstViewContainer}>
          <Animated.View style={{ ...sharedStyles.secondViewContainer, opacity: fadeAnim }}>
            <Card style={styles.cardContainer}>
              <Text style={styles.title}>Cuánto gastaron?</Text>
              <Input
                keyboardType="decimal-pad"
                blurOnSubmit
                autoCorrect={false}
                maxLength={7}
                onChangeText={changedTextHandler}
                value={spentMoney}
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

export default TotalAmountScreen;
