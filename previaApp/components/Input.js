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

  return <TextInput {...props} style={{ ...style, ...styles.input }} />;
};

const styles = StyleSheet.create({
  input: {
    borderBottomColor: colors.primary,
    borderBottomWidth: 1,
    fontFamily: fontFamilies.bold,
    color: colors.black
  }
});

export default Input;
