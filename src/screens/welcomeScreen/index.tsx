import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import styles from './styles';
import {ScreenContainer} from '../../components';
import {usePermissions} from '../../hooks/usePermissions';

const WelcomeScreen = () => {
  const {getAllPermission} = usePermissions();

  useEffect(() => {
    getAllPermission();
  }, []);

  return (
    <ScreenContainer>
      <View style={styles.root}>
        <Text>Welcome</Text>
      </View>
    </ScreenContainer>
  );
};

export default WelcomeScreen;
