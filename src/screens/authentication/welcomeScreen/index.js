import {Text, View} from 'react-native';
import React, {Component} from 'react';
import {ScreenContainer} from '../../../components/common';
import StyledText from '../../../components/common/styledText';
import {thunk} from 'redux-thunk';

export class WelcomeScreen extends Component {
  render() {
    return (
      <ScreenContainer>
        <StyledText>hello world</StyledText>
      </ScreenContainer>
    );
  }
}

export default WelcomeScreen;
