import {View, Button} from 'react-native';
import React, {useEffect} from 'react';
import styles from './styles';
import {ScreenContainer, StyledText} from '../../components';
import {useTranslation} from 'react-i18next';
import {useDispatch} from 'react-redux';
import {testReducer} from '../../redux/slices/auth.slice';
import {usePermissions} from '../../hooks';
import {ENV} from '../../constants';

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
        <StyledText>Welcome {t('NAME')}</StyledText>
        <StyledText>{ENV.API_URL}</StyledText>
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
