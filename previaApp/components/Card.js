import React from 'react';
import { View, StyleSheet } from 'react-native';

import colors from '../styles/colors';

const Card = ({ children, style }) => (
  <View style={{ ...styles.card, ...style }}>
    {children}
  </View>
);

const styles = StyleSheet.create({
  card: {
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.6,
    backgroundColor: 'rgba(255,255,255,0.8)',
    elevation: 8,
    padding: 20,
    borderRadius: 30
  }
});

export default Card;
