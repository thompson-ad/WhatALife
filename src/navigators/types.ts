import {NavigatorScreenParams} from '@react-navigation/native';

export type RootStackParamList = {
  BottomTabs: NavigatorScreenParams<BottomTabsParamList>;
};

export type BottomTabsParamList = {
  HomeTab: NavigatorScreenParams<HomeStackParamList>;
};

export type AuthenticationStackParamList = {
  Welcome: undefined;
};

export type HomeStackParamList = {
  Home: undefined;
};
