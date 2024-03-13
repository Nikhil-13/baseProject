import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import config from '../../config';
import {NAVIGATION} from '../../constants';

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator screenOptions={config}>
      {/* <Stack.Screen
        name={NAVIGATION.SCREENS}
        component={}
      /> */}
    </Stack.Navigator>
  );
};
