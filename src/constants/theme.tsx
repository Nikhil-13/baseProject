import {Dimensions} from 'react-native';

export enum FONTS {
  REGULAR = 'Whisper Regular',
  MEDIUM = 'Whisper Regular',
  BOLD = 'Whisper Regular',
}

const {height, width} = Dimensions.get('window');

export const COLORS = {
  SOLID: {
    WHITE: '#ffffff',
    BLACK: '#000000',
  },
  ALPHA: {},
};

export const FONT_SIZE = {
  SM: 12,
  MD: 16,
  LG: 20,
};

export const SCREEN_PADDING = 20;

export const SCREEN = {
  HEIGHT: height,
  WIDTH: width,
};
