import React, { useState, useEffect } from 'react';
import {
  ImageBackground,
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  Animated
} from 'react-native';
import lodash from 'lodash';

import Button from '../components/Button';
import Card from '../components/Card';
import Input from '../components/Input';


import sharedStyles from '../styles/sharedStyles';
import fontSizes from '../styles/fontSizes';

const createInitialParitcipantsArray = (numberOfParticipants) => {
  let participants = [];

  for (let i = 0; i < numberOfParticipants; i++) {
    participants[i] = {
      id: lodash.uniqueId(),
      name: '',
      amount: ''
    };
  }

  return participants;
};

const ParticipantsExpensesScreen = ({ navigation, route }) => {
  const { numberOfParticipants, expense } = route.params;
  const [participants, setParticipants] = useState(createInitialParitcipantsArray(numberOfParticipants));
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

  const updateParticipantName = (id, name) => {
    return participants.map((participant) => {
      if (participant.id !== id) {
        return participant
      };
  
      return {
        ...participant,
        name
      };
    })
  }

  const updateParticipantAmount = (id, amount) => {
    return participants.map((participant) => {
      if (participant.id !== id) {
        return participant
      };
  
      return {
        ...participant,
        amount
      };
    })
  }

  const changeNameHandler = id => enteredName => setParticipants(updateParticipantName(id, enteredName));

  const changeAmountHandler = id => enteredAmount => setParticipants(updateParticipantAmount(id, enteredAmount));

  const nextButtonPressedHandler = () => {
    navigation.navigate('ResultScreen', {
      expense,
      numberOfParticipants,
      participants
    });
  };

  const participantsList = participants.map((participant) =>
  <View key={participant.id}>
    <View style={styles.nameAmonutItem}>
      <Text style={styles.description}>Nombre:</Text>
      <Input
        style={styles.detailInput}
        blurOnSubmit
        autoCorrect={false}
        maxLength={15}
        onChangeText={changeNameHandler(participant.id)}
        value={participant.name}
      />
    </View>
    <View style={styles.nameAmonutItem}>
      <Text style={styles.description}>Pagó:</Text>
      <Input
        style={styles.detailInput}
        keyboardType="decimal-pad"
        blurOnSubmit
        autoCorrect={false}
        maxLength={7}
        onChangeText={changeAmountHandler(participant.id)}
        value={participant.amount}
      />
    </View>
  </View>);

  return (
    <ImageBackground
      source={require('../resources/friends-4.jpg')}
      style={styles.screenContainer}
    >
      <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss(); }}>
        <View style={styles.firstViewContainer}>
          <Animated.View style={{ ...sharedStyles.secondViewContainer, opacity: fadeAnim }}>
            <Card style={styles.cardContainer}>
              <View style={styles.summaryContainer}>
                <Text style={styles.text}>Participantes: {numberOfParticipants}</Text>
                <Text style={styles.text}>Gasto total: ${expense}</Text>
              </View>
              <ScrollView style={styles.participantsContainer}>
                {participantsList}
              </ScrollView>
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
  cardContainer: sharedStyles.cardContainer,
  text: sharedStyles.title,
  description: sharedStyles.description,
  summaryContainer: {
    alignItems: 'center'
  },
  detailInput: {
    fontSize: fontSizes.smallInput,
    marginLeft: 10,
    width: 110,
    textAlign: 'right'
  },
  nameAmonutItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10
  },
  participantsContainer: {
    margin: 20,
    width: '100%'
  }
});

export default ParticipantsExpensesScreen;
