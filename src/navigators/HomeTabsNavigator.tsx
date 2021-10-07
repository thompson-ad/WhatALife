import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {Home} from '../screens/Home';
import {HomeStackParamList} from './types';

const HomeStack = createStackNavigator<HomeStackParamList>();

export const HomeTabNavigator = () => {
  return (
    <HomeStack.Navigator initialRouteName="Home">
      <HomeStack.Screen name="Home" component={Home} />
    </HomeStack.Navigator>
  );
};
