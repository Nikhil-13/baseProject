import {Dimensions, Platform} from 'react-native';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');
const guidelineBaseWidth = 375; // Base width of the design (e.g., iPhone 11 Pro)
const guidelineBaseHeight = 812; // Base height of the design

// Calculate the scale ratios
const widthScaleRatio = SCREEN_WIDTH / guidelineBaseWidth;
const heightScaleRatio = SCREEN_HEIGHT / guidelineBaseHeight;

// Platform-specific scaling factor
const getPlatformFactor = () => {
  if (Platform.OS === 'web') {
    return 1; // Typically, scaling for web is more straightforward
  } else if (Platform.OS === 'android') {
    return 1; // Keep Android scaling neutral
  } else if (Platform.OS === 'ios') {
    return 1; // Scaling for iOS similar to Android for consistency
  } else {
    return 1; // Default factor for unknown platforms or tablets
  }
};

// Scale size based on width or height, with platform factor
const scaleSize = (size: number, scaleRatio: number) =>
  size * scaleRatio * getPlatformFactor();

// Scale the provided font size based on width scaling
const fontScale = (size: number) => scaleSize(size, widthScaleRatio);

// Scale the provided width and height
const widthScale = (width: number) => scaleSize(width, widthScaleRatio);
const heightScale = (height: number) => scaleSize(height, heightScaleRatio);

export {widthScale, heightScale, fontScale};
