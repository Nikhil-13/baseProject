import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';
import {ScreenContainer} from '../../components';

const ProfileScreen = () => {
  return (
    <ScreenContainer noPaddingBottom>
      <View style={styles.root}>
        <Text>Profile</Text>
      </View>
    </ScreenContainer>
  );
};

export default ProfileScreen;
