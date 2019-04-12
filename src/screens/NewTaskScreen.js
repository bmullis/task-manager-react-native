import React, { useState, useEffect, Fragment } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import axios from 'axios';

import { TOKEN } from '../../config/config';
import { colors } from '../theme';

import Button from '../components/Button';
import Header from '../components/Header';
import Text from '../components/Text';

const NewTaskScreen = (props) => {
  const [newTask, setNewTask] = useState('');
  const [error, setError] = useState('');

  const handleFormSubmit = async () => {
    if (newTask === '') {
      return setError('Enter a task that you need to complete, first!')
    };

    try {
      await axios.post('http://localhost:8080/tasks', { description: newTask }, {
        headers: {
          Authorization: `Bearer ${TOKEN}`
        }
      })

      props.navigation.navigate('Tasks');
    } catch (err) {
      alert(`err: ${err}, task: ${newTask}`);
    }
  };

  return (
    <Fragment>
      <Header 
        title={ 'Create New Task' }
      />
      <SafeAreaView style={ styles.root }> 
        <View style={ styles.form }>
          <Text 
            text={ 'What do you need to get done?' }
            textStyles={ styles.header }
          />
          <TextInput
            keyboardType={ 'default' }
            style={ [styles.textInput, styles.shadow] }
            placeholder="Enter a new task..."
            onChangeText={(text) => setNewTask(text)}
          />
          <Button
            onPress={() => handleFormSubmit()}
            text="Create New Task"
            buttonStyles={ styles.button }
          />
        </View>  
      </SafeAreaView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 10
  },
  form: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 120,
  },
  header: {
    fontSize: 24,
  },
  root: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    paddingHorizontal: 16,
    overflow: 'hidden'
  },
  textInput: {
    borderRadius: 3,
    borderBottomWidth: 1,
    borderColor: colors.gray100,
    elevation: 6,
    fontSize: 20,
    marginTop: 30,
    padding: 15,
    shadowColor: colors.gray300,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    textAlign: 'center',
    width: '100%'
  }
});

export default NewTaskScreen;