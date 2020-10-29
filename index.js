/**
 * @format
 */

import {AppRegistry} from 'react-native';
import TaskList from './src/screens/TaskList';
import {name as appName} from './app.json';
//componente padrão
AppRegistry.registerComponent(appName, () => TaskList);
