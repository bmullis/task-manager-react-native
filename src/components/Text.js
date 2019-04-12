import React from 'react';
import { StyleSheet, Text as RText } from 'react-native';
import { colors } from '../theme';

const Text = ({ text, textStyles }) => {
  return (
    <RText style={[ styles.root, textStyles ]}>{ text }</RText>
  );
};

const styles = StyleSheet.create({
  root: {
    color: colors.gray800,
    fontSize: 16,
    lineHeight: 24
  }
});

export default Text;