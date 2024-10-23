import {StyleSheet} from 'react-native';
import {fontScale, heightScale, widthScale} from '../../../constants';

export const styles = StyleSheet.create({
  main: {
    width: '100%',
    marginBottom: heightScale(8),
  },
  container: {
    overflow: 'hidden',
    flexDirection: 'row',
    borderBottomWidth: widthScale(1),
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    fontSize: fontScale(16),
    lineHeight: heightScale(18),
  },
  errorContainer: {
    marginTop: heightScale(4),
    flexDirection: 'row',
    alignItems: 'center',
  },
  errorText: {
    fontSize: fontScale(14),
    marginLeft: widthScale(7),
    maxWidth: '95%',
    lineHeight: heightScale(18),
    color: 'red',
  },
  placeHolderText: {},
  leftIconStyle: {
    marginRight: widthScale(16),
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: heightScale(8),
  },
  inputWrapper: {
    justifyContent: 'center',
    borderWidth: widthScale(1),
    padding: widthScale(10),
  },
});
