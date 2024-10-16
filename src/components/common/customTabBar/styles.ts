import {Platform, StyleSheet} from 'react-native';
import {heightScale, SCREEN_WIDTH} from '../../../constants/responsive';

export const styles = StyleSheet.create({
  rootContainer: {
    flexDirection: 'row',
    height: heightScale(83),
    width: SCREEN_WIDTH,
    backgroundColor: 'green',
    shadowColor: 'black',
    shadowOpacity: Platform.select({android: 0.6, ios: 0.3}),
    shadowOffset: {height: Platform.select({android: -5, ios: 0})},
    elevation: heightScale(20),
    shadowRadius: heightScale(12),
  },
  button: {
    flex: 1,
    alignItems: 'center',
    borderColor: 'red',
  },
  barIconContainer: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: heightScale(5),
  },
});
