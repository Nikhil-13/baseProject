import React from 'react';
import {View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styles from './styles';
import {SharedStyles} from '../../../shared';
import {COLORS, SCREEN_PADDING} from '../../../constants';

export default ({
  children,
  center = false,
  backgroundColor = '',
  paddingHorizontal = '',
  paddingal = '',
  noPaddingTop = false,
  noPaddingBottom = false,
}) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        SharedStyles.fullFlex,
        !!center && SharedStyles.center,
        styles.background,
        {
          paddingTop: !!noPaddingTop ? 0 : insets.top,
          paddingBottom: !!noPaddingBottom ? 0 : insets.bottom,
          backgroundColor: !!backgroundColor
            ? backgroundColor
            : COLORS.SOLID.WHITE,
          paddingHorizontal: !!paddingHorizontal ? 0 : SCREEN_PADDING,
        },
      ]}>
      {children}
    </View>
  );
};
