import React from 'react';
import { StyleSheet, TouchableHighlight, Text } from 'react-native';
import { colors } from '../theme';

const Button = ({ text, onPress, buttonStyles }) => {
  return (
    <TouchableHighlight
      activeOpacity={ 0.8 }
      onPress={ onPress }
      style={[
        styles.root,
        styles.shadow,
        buttonStyles
      ]}
      underlayColor={ colors.secondaryLight }
      >
        <Text style={ styles.buttonText }>{ text }</Text>
      </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: colors.secondary,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    borderRadius: 32,
    width: '100%'
  },
  shadow: {
    elevation: 6,
    shadowColor: colors.gray300,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8
  },
  buttonText: {
    color: colors.white,
    fontFamily: 'Heebo-Medium',
    fontSize: 18,
    textTransform: 'uppercase'
  }
});

export default Button;
