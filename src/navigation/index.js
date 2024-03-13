import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthenticationStack from './stacks/authentication';
import {NavigationService} from '../services';
import {createStackNavigator} from '@react-navigation/stack';
import config from './config';
import {NAVIGATION} from '../constants';
import {connect} from 'react-redux';

const Stack = createStackNavigator();

class AppNavigator extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <NavigationContainer ref={ref => NavigationService.setNavigatorRef(ref)}>
        <Stack.Navigator screenOptions={config}>
          {this.props.isAuthenticated ? (
            <Stack.Screen name={NAVIGATION.STACKS.TABS} component={TabStack} />
          ) : (
            <Stack.Screen
              name={NAVIGATION.STACKS.AUTH}
              component={AuthenticationStack}
            />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isLoggedIn,
});

const mapActionsToProps = {};

export default connect(mapStateToProps, mapActionsToProps)(AppNavigator);
