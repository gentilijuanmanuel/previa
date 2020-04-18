import React, { useState, useEffect } from 'react';
import {
  ImageBackground,
  View,
  Text,
  StyleSheet,
  Animated
} from 'react-native';

import Button from '../components/Button';
import Card from '../components/Card';

import sharedStyles from '../styles/sharedStyles';

const createFinalResult = (numberOfParticipants, expense, participants) => {
  let amountPerParticipant = expense / numberOfParticipants;

  return participants.map(participant => {
    let participantAmount = parseFloat(participant.amount);
    let hasToPay = participantAmount < amountPerParticipant;
    let amount = 0;
    if (hasToPay) {
      amount = amountPerParticipant - participantAmount;
    } else {
      amount = participantAmount - amountPerParticipant;
    }

    return {
      id: participant.id,
      name: participant.name,
      amount: amount.toFixed(2),
      hasToPay: hasToPay
    }
  });
};

const ResultScreen = ({ navigation, route }) => {  
  const { numberOfParticipants, expense, participants } = route.params;
  const [fadeAnim] = useState(new Animated.Value(0));
  const [finalResult, setFinalResult] = useState(createFinalResult(numberOfParticipants, expense, participants));

  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 1000,
      }
    ).start();
  }, []);

  const participantsList = finalResult.map((participant) =>
    <Card key={participant.id} style={styles.cardContainer}>
      <Text style={styles.description}>{participant.name} tiene que {participant.hasToPay ? 'poner' : 'cobrar'} ${participant.amount}.</Text>
    </Card>);

  const againButtonPressedHandler = () => {
    navigation.navigate('NumberOfParticipantsScreen');
  };

  return (
    <ImageBackground
      source={{uri: 'friends4'}}
      style={styles.screenContainer}
    >
      <View style={styles.firstViewContainer}>
        <Animated.View style={{ ...sharedStyles.secondViewContainer, opacity: fadeAnim }}>
          {participantsList}
        </Animated.View>
        <Button title="De nuevo" onPress={againButtonPressedHandler} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  screenContainer: sharedStyles.screenContainer,
  firstViewContainer: sharedStyles.firstViewContainer,
  cardContainer: sharedStyles.cardContainer,
  description: sharedStyles.description
});

export default ResultScreen;
