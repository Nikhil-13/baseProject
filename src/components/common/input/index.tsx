import React, {useCallback, forwardRef} from 'react';
import {View, Text, Pressable, TextInput} from 'react-native';
import {styles} from './styles';

export default forwardRef(
  (
    {
      error,
      isPassword = false,
      editable = true,
      onPress,
      label = '',
      value = '',
      onChangeText = undefined,
      rightIcon = null,
      placeholder = '',
      placeholderTextColor = 'black',
      containerStyles = {},
      showErrorPadding = true,
      ...props
    },
    ref,
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
          />
        </View>
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{!!error && error}</Text>
        </View>
      </Pressable>
    );
  },
);
