import * as React from 'react';
import Svg, {Path, Defs, LinearGradient, Stop} from 'react-native-svg';
const SVGComponent = ({size, color}) => (
  <Svg
    width={size || 24}
    height={size || 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M6 19H9V13H15V19H18V10L12 5.5L6 10V19ZM4 21V9L12 3L20 9V21H13V15H11V21H4Z"
      fill="url(#paint0_linear_549_125)"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_549_125"
        x1={4}
        y1={3}
        x2={20.5347}
        y2={4.08407}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor={color || '#FF4F4F'} />
        {/* <Stop offset={1} stopColor="#0b0707" /> */}
      </LinearGradient>
    </Defs>
  </Svg>
);
export default SVGComponent;
