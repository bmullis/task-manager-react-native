import React, { Fragment } from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { colors } from '../theme';

const Header = ({ title }) => (
  <Fragment>
    <StatusBar barStyle="light-content" />
    <View style={ styles.root }>
      <View style={ styles.titleWrapper }>
        <Text style={ styles.title }>{ title }</Text>
      </View>
    </View>
  </Fragment>
);

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    backgroundColor: colors.primary,
    flexDirection: 'row',
    height: 88,
    justifyContent: 'space-between',
    paddingTop: 36,
    width: '100%'
  },
  titleWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  title: {
    fontSize: 21,
    lineHeight: 28,
    color: colors.white,
    fontFamily: 'Heebo-Bold',
    textAlign: 'center'
  },
  titleSuper: {
    fontSize: 13,
    lineHeight: 16,
    color: colors.gray500,
    fontFamily: 'Heebo-Bold',
  },
  actionContainer: {
    width: 48,
    height: 48,
  },
});

export default Header;