import React from 'react';
import { StyleSheet } from 'react-native';
import { colors } from '../theme';

import Text from './Text';

const SectionHeader = ({ text }) => {
  return (
    <Text 
      text={ text }
    />
  );
};

const styles = StyleSheet.create({
  root: {
    fontSize: 24,
    lineHeight: 36,
    fontFamily: 'Heebo-Medium',
    color: colors.gray800,
    paddingTop: 24,
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
});

export default SectionHeader;