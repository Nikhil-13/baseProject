import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NAVIGATION} from '../../../constants';
import config from '../../config';
import {WelcomeScreen} from '../../../screens';

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator screenOptions={config}>
      <Stack.Screen
        name={NAVIGATION.AUTH.WELCOME_SCREEN}
        component={WelcomeScreen}
      />
    </Stack.Navigator>
  );
};
