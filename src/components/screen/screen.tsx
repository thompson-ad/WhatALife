import React from 'react';
import {KeyboardAvoidingView, StatusBar} from 'react-native';

const ScreenWithScrolling = () => {
  return (
    <KeyboardAvoidingView>
      <StatusBar />
    </KeyboardAvoidingView>
  );
};
