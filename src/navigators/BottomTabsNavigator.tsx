import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomTabsParamList} from './types';
import {HomeStackNavigator} from './HomeStackNavigator';

const BottomTabs = createBottomTabNavigator<BottomTabsParamList>();

export const BottomTabsNavigator = () => {
  return (
    <BottomTabs.Navigator>
      <BottomTabs.Screen
        name="HomeTab"
        component={HomeStackNavigator}
        options={{headerShown: false}}
      />
    </BottomTabs.Navigator>
  );
};
