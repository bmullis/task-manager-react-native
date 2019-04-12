import React, { useState, useEffect, Fragment } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-navigation';

import useGetResource from '../hooks/useGetResource';

import CardFlatList from '../components/CardFlatList';
import FloatingActionButton from '../components/FloatingActionButton';
import Header from '../components/Header';
import TaskCard from '../components/TaskCard';

const TasksScreen = (props) => {
  const [user, setUser] = useState('');
  const [tasks, setTasks] = useState([]);
  const getUser = useGetResource('user');
  const getTasks = useGetResource('tasks');

  useEffect(() => {
    if (getUser.firstName) {
      setUser(getUser)
    }
    if (getTasks.length > 0) {
      setTasks(getTasks)
    } 
  }, [getUser, getTasks])

  return (
    <Fragment>
      <Header 
        title={ `Tasks for ${user.firstName}` }
      />
      <SafeAreaView style={ styles.root }> 
        <ScrollView contentContainerStyle={{ paddingBottom: 32 }}>
          <CardFlatList
            data={ tasks }
            renderItem={ TaskCard }
          />
        </ScrollView>
        <FloatingActionButton
          onPress={() => props.navigation.navigate('NewTask')}
          text={'+'}
        />
      </SafeAreaView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    paddingHorizontal: 0,
    overflow: 'hidden'
  }
});

export default TasksScreen;