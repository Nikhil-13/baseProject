import {View, Text, Button} from 'react-native';
import React, {useEffect} from 'react';
import styles from './styles';
import {ScreenContainer} from '../../components';
import {usePermissions} from '../../hooks/usePermissions';
import {useTranslation} from 'react-i18next';
import {useDispatch} from 'react-redux';
import {testReducer} from '../../slices/auth.slice';

const WelcomeScreen = () => {
  const {getAllPermission} = usePermissions();
  const {t} = useTranslation();
  const dispatch = useDispatch();

  useEffect(() => {
    getAllPermission();
  }, []);

  return (
    <ScreenContainer>
      <View style={styles.root}>
        <Text>Welcome {t('NAME')}</Text>
        <Button
          title={t('BUTTONS.LOGIN')}
          onPress={() => {
            dispatch(testReducer('test'));
          }}
        />
      </View>
    </ScreenContainer>
  );
};

export default WelcomeScreen;
