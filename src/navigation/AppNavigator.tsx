import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AuthStack from './stacks/authStack';
import CommonStack from './stacks/commonStack';
import stackConfig from './navigationConfig';
import bottomTabStack from './tabs/bottomTabStack';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{...stackConfig}}>
      {true ? (
        <Stack.Screen name="AUTH" component={AuthStack} />
      ) : (
        <Stack.Screen name="Tabs" component={bottomTabStack} />
      )}
      <Stack.Screen name="COMMON" component={CommonStack} />
    </Stack.Navigator>
  );
};
export default AppNavigator;
