import React, {useCallback} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {NAVIGATION} from '../../../constants';
import {HomeIcon, ProfileIcon} from '../../../assets/svg';
import {heightScale} from '../../../constants/responsive';

export default ({state, navigation}) => {
  const onPress = useCallback(
    (route, index) => {
      const isFocused = state.index === index;
      const event = navigation.emit({
        type: 'tabPress',
        target: route.key,
      });

      if (!isFocused && !event.defaultPrevented) {
        navigation.navigate(route.name);
      }
    },
    [state.index, navigation],
  );

  return (
    <View style={styles.rootContainer}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;

        return (
          <TouchableOpacity
            style={styles.button}
            key={route?.name}
            onPress={() => onPress(route, index)}>
            {route.name === NAVIGATION.TABS.HOME ? (
              <View style={styles.barIconContainer}>
                <HomeIcon
                  size={heightScale(24)}
                  color={isFocused ? 'red' : 'white'}
                />
                <Text>{route.name}</Text>
              </View>
            ) : (
              <View style={styles.barIconContainer}>
                <ProfileIcon
                  size={heightScale(24)}
                  color={isFocused ? 'red' : 'white'}
                />
                <Text>{route.name}</Text>
              </View>
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
