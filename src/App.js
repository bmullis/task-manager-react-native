import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from './screens/HomeScreen';
import TasksScreen from './screens/TasksScreen';
import NewTaskScreen from './screens/NewTaskScreen';

const MainNavigator = createStackNavigator({
  Home: { 
    screen: HomeScreen,
    title: 'Home!'
  },
  Tasks: { 
    screen: TasksScreen,
    title: 'Tasks!'
  },
  NewTask: {
    screen: NewTaskScreen,
    title: 'New Task!'
  }
}, {
  headerMode: 'none'
});

const AppContainer = createAppContainer(MainNavigator);

const App = () => (
  <AppContainer />
);

export default App;
