import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import navigationConfig from '../navigationConfig';
import {getBottomTabs} from './config';
import CustomTabBar from '../../components/common/customTabBar';

const BottomTabs = createBottomTabNavigator();

export default () => {
  return (
    <BottomTabs.Navigator
      screenOptions={{...navigationConfig}}
      tabBar={props => <CustomTabBar {...props} />}>
      {getBottomTabs()?.map((item, index) => {
        return (
          <BottomTabs.Screen
            key={`${item.name}${index}`}
            name={item.name}
            component={item.component}
          />
        );
      })}
    </BottomTabs.Navigator>
  );
};
