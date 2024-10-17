import {View, Text, Button} from 'react-native';
import React from 'react';
import styles from './styles';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {ScreenContainer} from '../../components';
import {useDispatch} from 'react-redux';
import {testReducer} from '../../slices/auth.slice';

const HomeScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  return (
    <ScreenContainer noPaddingBottom>
      <View style={styles.root}>
        <Text>Home</Text>
        <Button
          title={'Open Drawer'}
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        />
        <Button
          title={'Logout'}
          onPress={() => {
            dispatch(testReducer(''));
          }}
        />
      </View>
    </ScreenContainer>
  );
};

export default HomeScreen;
