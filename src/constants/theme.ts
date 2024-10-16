import {Dimensions} from 'react-native';
import {fontScale} from './responsive';

export enum FONTS {
  REGULAR = 'Inter Regular',
  MEDIUM = 'Inter Medium',
  SEMI_BOLD = 'Inter SemiBold',
}

const {height, width} = Dimensions.get('window');

export const COLORS = {
  PRIMARY_10: '#FFE3E3',
  PRIMARY_50: '#FF5959',
  PRIMARY_100: '#FF6A60',
  PRIMARY_150: '#FF5A4E',
  LIGHT_PINK_50: '#FFEEEE',
  PRIMARY: '#f90002',
  WHITE: '#FFFFFF',
  GREY: '#454545',
  BLACK: 'black',
  GREY_LIGHT: '#CECECE',
  GREY_LIGHTER: '#909090',

  GREEN: '#00C614',
  GREY_100: '#ADADAD',
  GREY_150: '#FBFBFB',
  GREY_50: '#6C6C6C',
  SKELETON_HIGHLIGHT: '#dddddd',
  BACKGROUND: '#F5F5F5',
  LIGHT_PINK: '#fef9f9',
  TRANSPARENT: 'transparent',
  BORDER_COLOR: '#e8e8e8ff',
  ALPHA: {
    PRIMARY_2: '#f9000049',
    PRIMARY_3: '#f9000032',
    SHADOW_COLOR: '#6f6f6ff3',
  },
};

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
