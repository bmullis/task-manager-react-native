import('./ReactotronConfig').then(() => console.log('Reactotron Configured'))
import { AppRegistry } from 'react-native';

import App from './src/App';


AppRegistry.registerComponent('taskapp', () => App);
