import React from 'react';
import {
  StyleSheet,
  TextInput
} from 'react-native';

import colors from '../styles/colors';
import fontSizes from '../styles/fontSizes';
import fontFamilies from '../styles/fontFamilies';

const Input = (props) => {
  const { style } = props;

  return <TextInput {...props} style={{ ...styles.input, ...style }} />;
};

const styles = StyleSheet.create({
  input: {
    width: 250,
    borderBottomColor: colors.primary,
    borderBottomWidth: 1,
    marginVertical: 10,
    fontSize: fontSizes.input,
    textAlign: 'center',
    fontFamily: fontFamilies.bold,
    color: colors.black
  }
});

export default Input;
