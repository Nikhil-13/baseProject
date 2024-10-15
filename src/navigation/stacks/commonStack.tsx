import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {WelcomeScreen} from '../../screens';
import stackConfig from '../navigationConfig';
import {NAVIGATION} from '../../constants';

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator screenOptions={{...stackConfig}}>
      <Stack.Screen
        name={NAVIGATION.SCREENS.WELCOME_SCREEN}
        component={WelcomeScreen}
      />
    </Stack.Navigator>
  );
};
