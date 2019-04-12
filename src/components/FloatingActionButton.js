import React from 'react';
import { StyleSheet, TouchableHighlight, Text } from 'react-native';
import { colors } from '../theme';

const FloatingActionButton = ({ text, onPress }) => {
  return (
    <TouchableHighlight
      activeOpacity={ 0.8 }
      onPress={ onPress }
      style={[
        styles.root,
        styles.shadow
      ]}
      underlayColor={ colors.secondaryLight }
      >
        <Text style={ styles.buttonText }>{ text }</Text>
      </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    backgroundColor: colors.secondary,
    borderRadius: 54,
    bottom: 24,
    justifyContent: 'center',
    height: 64,
    position: 'absolute',
    right: 16,
    width: 64
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
    fontSize: 32,
    padding: 0,
    margin: 0,
    marginTop: -5,
    marginRight: -2
  }
});

export default FloatingActionButton;