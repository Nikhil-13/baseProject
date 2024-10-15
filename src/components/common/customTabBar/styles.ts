import {Dimensions, Platform, StyleSheet} from 'react-native';
const {height: SCREEN_HEIGHT, width: SCREEN_WIDTH} = Dimensions.get('window');

export const styles = StyleSheet.create({
  rootContainer: {
    flexDirection: 'row',
    height: 83,
    width: SCREEN_WIDTH,
    backgroundColor: 'green',
    shadowColor: 'black',
    shadowOpacity: Platform.select({android: 0.6, ios: 0.3}),
    shadowOffset: {height: Platform.select({android: -5, ios: 0})},
    elevation: 20,
    shadowRadius: 12,
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
    gap: 5,
  },
});
