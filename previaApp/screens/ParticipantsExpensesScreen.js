// TODO: refactor this screen!!!
import React, { useState, useEffect } from 'react';
import {
  Alert,
  ImageBackground,
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Animated,
  FlatList
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { uniqueId } from 'lodash';

import Button from '../components/Button';
import Card from '../components/Card';
import Input from '../components/Input';

import sharedStyles from '../styles/sharedStyles';
import fontSizes from '../styles/fontSizes';

const formErrorMessage = '1. No debe haber nombres incompletos. \n2. Todos los gastos individuales deben ser menores que el gasto total. \n3. La suma de los gastos individuales tiene que ser igual al gasto total.';

const createInitialParitcipantsArray = (numberOfParticipants) => {
  let participants = [];

  for (let i = 0; i < numberOfParticipants; i++) {
    participants[i] = {
      id: uniqueId(),
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
    let entriesHaveErrors = false;
    let totalExpenseParticipants = 0;

    participants.forEach(participant => {
      totalExpenseParticipants += parseFloat(participant.amount);
      if (!participant.name || 0 === participant.name.length || isNaN(parseFloat(participant.amount)) || participant.amount <= 0 || participant.amount > expense) {
        entriesHaveErrors = true;
        return;
      }
    });

    if (entriesHaveErrors || totalExpenseParticipants !== expense) {
      Alert.alert('Las pilas!', formErrorMessage, [{ text: 'Ok', style: 'destructive', onPress: () => {} }]);
      return;
    }

    navigation.navigate('ResultScreen', {
      expense,
      numberOfParticipants,
      participants
    });
  };

  const ParticipantItem = (participant) => (
    <View>
      <View style={styles.nameAmountItem}>
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
      <View style={styles.nameAmountItem}>
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
    </View>
  );

  return (
      <ImageBackground
        source={{uri: 'friends-3'}}
        style={styles.screenContainer}
      >
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss(); }}>
          <KeyboardAwareScrollView contentContainerStyle={styles.firstViewContainer}>
            <Animated.View style={{ ...sharedStyles.secondViewContainer, opacity: fadeAnim }}>
              <Card style={styles.cardContainer}>
                <View style={styles.summaryContainer}>
                  <Text style={styles.text}>Participantes: {numberOfParticipants}</Text>
                  <Text style={styles.text}>Gasto total: ${expense}</Text>
                </View>
                <FlatList
                  style={styles.participantsContainer}
                  data={participants}
                  renderItem={({ participant }) => <ParticipantItem participant={participant} />}
                  keyExtractor={participant => participant.id}
                />
              </Card>
            </Animated.View>
            <Button title="Listo" onPress={nextButtonPressedHandler} />
          </KeyboardAwareScrollView>
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
  nameAmountItem: sharedStyles.nameAmountItem,
  summaryContainer: {
    alignItems: 'center'
  },
  detailInput: {
    fontSize: fontSizes.smallInput,
    marginLeft: 10,
    width: 110,
    textAlign: 'right'
  },
  participantsContainer: {
    margin: 20,
    width: '100%'
  }
});

export default ParticipantsExpensesScreen;
