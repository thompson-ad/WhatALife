import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {Home} from '../screens/Home';
import {AuthenticationStackParamList} from './types';

const AuthenticationStack =
  createStackNavigator<AuthenticationStackParamList>();

export const AuthenticationStackNavigator = () => {
  return (
    <AuthenticationStack.Navigator initialRouteName="Welcome">
      <AuthenticationStack.Screen name="Welcome" component={Home} />
    </AuthenticationStack.Navigator>
  );
};
