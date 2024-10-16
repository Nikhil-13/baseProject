/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styles from './styles';
import {heightScale} from '../../../constants/responsive';

export default ({
  children,
  backgroundColor = '',
  paddingHorizontal = '',
  noPaddingTop = false,
  noPaddingBottom = false,
}) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.root,
        {
          paddingTop: noPaddingTop ? 0 : heightScale(insets.top),
          paddingBottom: noPaddingBottom ? 0 : heightScale(insets.bottom),
          backgroundColor: backgroundColor ? backgroundColor : 'blue',
          paddingHorizontal: paddingHorizontal ? 0 : 0,
        },
      ]}>
      {children}
    </View>
  );
};
