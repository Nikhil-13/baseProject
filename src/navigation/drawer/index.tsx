import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import AppNavigator from '../AppNavigator';
import {NAVIGATION} from '../../constants';
const Drawer = createDrawerNavigator();

export default () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: {},
        swipeEnabled: false,
      }}>
      <Drawer.Screen name={NAVIGATION.DRAWER} component={AppNavigator} />
    </Drawer.Navigator>
  );
};
