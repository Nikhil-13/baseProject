import {Dimensions, Platform} from 'react-native';
import {fontScale} from './responsive';

export const FONTS = {
  DancingScript: {
    bold: 'DancingScript-Bold',
    medium: 'DancingScript-Medium',
    regular: 'DancingScript-Regular',
  },
  PlayWrite: {
    regular: 'PlaywriteGBS-Regular',
    light: 'PlaywriteGBS-Light',
  },
};

const {height, width} = Dimensions.get('window');

export const COLORS = {};

export const FONT_SIZE = {
  SM: fontScale(12),
  MD: fontScale(16),
  LG: fontScale(20),
};

export const SCREEN_PADDING = 20;

export const SCREEN = {
  HEIGHT: height,
  WIDTH: width,
};
