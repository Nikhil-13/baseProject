import React, {useCallback, forwardRef, ReactElement, Ref} from 'react';
import {View, Text, Pressable, TextInput, ViewStyle} from 'react-native';
import {styles} from './styles';

interface props {
  value: string;
  error: string;
  label: string;
  placeholderTextColor: string;
  placeholder: string;
  isPassword: boolean;
  editable: boolean;
  containerStyles: ViewStyle;
  showErrorPadding: boolean;
  rightIcon: ReactElement | null;
  onChangeText?: () => {};
  onPress?: () => {};
  onFocus?: () => {};
  onBlur?: () => {};
}

export default forwardRef(
  (
    {
      error = '',
      isPassword = false,
      editable = true,
      onPress,
      value = '',
      onChangeText = undefined,
      rightIcon = null,
      placeholder = '',
      placeholderTextColor = 'black',
      containerStyles = {},
      ...props
    }: props,
    ref: Ref<TextInput>,
  ) => {
    const onFocusHandler = useCallback(() => {
      props?.onFocus?.();
    }, [props?.onFocus]);

    const onBlurHandler = useCallback(
      e => {
        props?.onBlur?.(e);
      },
      [props?.onBlur],
    );
    return (
      <Pressable style={[styles.main, containerStyles]} onPress={onPress}>
        <View style={styles.inputWrapper}>
          <TextInput
            ref={ref}
            {...props}
            autoCapitalize="none"
            onPressIn={onPress}
            value={value}
            onChangeText={onChangeText}
            editable={editable}
            placeholder={placeholder}
            placeholderTextColor={placeholderTextColor}
            onBlur={onBlurHandler}
            onFocus={onFocusHandler}
            style={{color: 'red'}}
            secureTextEntry={isPassword}
          />
          {rightIcon && rightIcon}
        </View>
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{!!error && error}</Text>
        </View>
      </Pressable>
    );
  },
);
