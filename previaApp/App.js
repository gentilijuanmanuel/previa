import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import NumberOfParticipantsScreen from './screens/NumberOfParticipantsScreen';
import TotalAmountScreen from './screens/TotalAmountScreen';
import ParticipantsExpensesScreen from './screens/ParticipantsExpensesScreen';
import ResultScreen from './screens/ResultScreen';

const RootStack = createStackNavigator();

const App = () => (
  <NavigationContainer>
    <RootStack.Navigator headerMode="none">
      <RootStack.Screen
        name="NumberOfParticipantsScreen"
        component={NumberOfParticipantsScreen}
      />
      <RootStack.Screen
        name="TotalAmountScreen"
        component={TotalAmountScreen}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="ParticipantsExpensesScreen"
        component={ParticipantsExpensesScreen}
      />
      <RootStack.Screen
        name="ResultScreen"
        component={ResultScreen}
      />
    </RootStack.Navigator>
  </NavigationContainer>
);

export default App;
