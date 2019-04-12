import React, { useState, useEffect, Fragment } from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from "react-navigation";

import useGetResource from '../hooks/useGetResource';

import Button from '../components/Button';
import Header from '../components/Header';
import Text from '../components/Text';

const HomeScreen = (props) => {
  const [user, setUser] = useState('');
  const getUser = useGetResource('user');

  useEffect(() => {
    if (getUser.firstName) {
      setUser(getUser)
    }
  }, [getUser])

  return (
    <Fragment>
      <Header 
        title={ `Welcome, ${user.firstName}!` }
      />
      <SafeAreaView style={ styles.root }> 
        <View>
          <Text text={'This is the Home Screen!'} />
          <Button
            onPress={() => props.navigation.navigate('Tasks')}
            text="View Tasks"
          />
        </View>
      </SafeAreaView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    paddingHorizontal: 16,
    overflow: 'hidden'
  }
});

export default HomeScreen;