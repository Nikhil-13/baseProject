import React, {Component} from 'react';
import {ScreenContainer} from '../../../components/common';
import StyledText from '../../../components/common/styledText';
import Config from 'react-native-config';

export class WelcomeScreen extends Component {
  render() {
    return (
      <ScreenContainer center>
        <StyledText>{Config.NAME}</StyledText>
      </ScreenContainer>
    );
  }
}

export default WelcomeScreen;
