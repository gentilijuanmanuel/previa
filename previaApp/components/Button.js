import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet
} from 'react-native';

import colors from '../styles/colors';
import fontSizes from '../styles/fontSizes';
import fontFamilies from '../styles/fontFamilies';

const Button = ({ onPress, title }) => (
  <TouchableOpacity
    style={styles.button}
    onPress={onPress}
  >
    <Text style={styles.description}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 370,
    maxWidth: '85%',
    height: 50,
    backgroundColor: colors.primary,
    padding: 10,
    margin: 20,
    borderRadius: 20
  },
  description: {
    color: colors.white,
    fontSize: fontSizes.buttonTitle,
    fontFamily: fontFamilies.bold
  }
});

export default Button;
