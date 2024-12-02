/* eslint-disable react-native/no-inline-styles */
import React, {ReactNode} from 'react';
import {View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {heightScale} from '../../../constants/responsive';
import {styles} from './styles';

interface props {
  children?: ReactNode;
  backgroundColor?: string;
  paddingHorizontal?: string;
  noPaddingTop?: boolean;
  noPaddingBottom?: boolean;
}

export default ({
  children,
  backgroundColor = '',
  paddingHorizontal = '',
  noPaddingTop = false,
  noPaddingBottom = false,
}: props) => {
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
