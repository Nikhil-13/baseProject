import {View, Text, Button} from 'react-native';
import React from 'react';
import styles from './styles';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {ScreenContainer} from '../../components';

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <ScreenContainer noPaddingBottom>
      <View style={styles.root}>
        <Text>Home</Text>
        <Button
          title={'Open Drawer'}
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        />
      </View>
    </ScreenContainer>
  );
};

export default HomeScreen;
