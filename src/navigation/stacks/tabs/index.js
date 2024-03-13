import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import config from '../config';
import {NAVIGATION} from '../../constants';

const BottomTabs = createBottomTabNavigator();

export default () => {
  if (userType === undefined || userType === null) return null;
  return (
    <BottomTabs.Navigator
      screenOptions={config}
      //   tabBar={props => <CustomTabBar {...props} />}
    >
      {[1, 2, 3, 4]?.BOTTOM_TABS.map((item, index) => {
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
