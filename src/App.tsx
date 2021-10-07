import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {RootStackNavigator} from './navigators/RootNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <RootStackNavigator />
    </NavigationContainer>
  );
};

export default App;
