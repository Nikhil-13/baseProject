import {View, Text, Button} from 'react-native';
import React, {useEffect} from 'react';
import styles from './styles';
import {ScreenContainer, StyledText} from '../../components';
import {usePermissions} from '../../hooks/usePermissions';
import {useTranslation} from 'react-i18next';
import {useDispatch} from 'react-redux';
import {testReducer} from '../../redux/slices/auth.slice';
import {FONTS} from '../../constants';

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
        {/* <StyledText>Welcome {t('NAME')}</StyledText> */}
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
