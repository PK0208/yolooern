import React from 'react';
import {createStore, combineReducers} from 'redux';
import loginReducer from './store/reducers/loginReducer';
//import { MainStackNavigator } from "./navigation/StackNavigator";
import Toast from 'react-native-toast-message';
import StartScreen from './StartScreen';
import {Provider} from 'react-redux';

const rootReducer = combineReducers({
  login: loginReducer,
});
const store = createStore(rootReducer);
const App = () => {
  return (
    <Provider store={store}>
      <Toast ref={(ref) => Toast.setRef(ref)} />
      <StartScreen />
    </Provider>
  );
};
export default App;
