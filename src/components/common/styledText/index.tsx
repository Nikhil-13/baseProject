import React from 'react';
import {View, Text, StyleProp, TextStyle, ViewStyle} from 'react-native';
import {FONT_SIZE, FONTS} from '../../../constants/theme';

interface StyleTextProps {
  children: React.ReactNode;
  variant?: keyof typeof FONTS;
  size?: number;
  color?: string;
  textAlign?: 'left' | 'right' | 'center';
  textStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  onLayout?: () => void;
  lineHeight?: number;
  onPress?: () => void;
}

export default (): React.FC<StyleTextProps> =>
  ({
    children,
    onLayout,
    variant = 'REGULAR',
    size = FONT_SIZE.MD,
    color = 'black',
    lineHeight,
    textStyle,
    textAlign = 'left',
    onPress = undefined,
    containerStyle,
    ...props
  }) => {
    const style = {
      fontFamily: FONTS[variant],
      color: color,
      fontSize: size,
      lineHeight,
      textAlign,
    };

    return (
      <View onLayout={onLayout} style={containerStyle}>
        <Text onPress={onPress} style={[style, textStyle]} {...props}>
          {children}
        </Text>
      </View>
    );
  };
