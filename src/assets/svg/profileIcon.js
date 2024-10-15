import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SVGComponent = ({color, size}) => (
  <Svg
    width={size || 25}
    height={size || 25}
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M4.5 18C4.5 16.9391 4.92143 15.9217 5.67157 15.1716C6.42172 14.4214 7.43913 14 8.5 14H16.5C17.5609 14 18.5783 14.4214 19.3284 15.1716C20.0786 15.9217 20.5 16.9391 20.5 18C20.5 18.5304 20.2893 19.0391 19.9142 19.4142C19.5391 19.7893 19.0304 20 18.5 20H6.5C5.96957 20 5.46086 19.7893 5.08579 19.4142C4.71071 19.0391 4.5 18.5304 4.5 18Z"
      stroke={color || '#454545'}
      strokeWidth={1.5}
      strokeLinejoin="round"
    />
    <Path
      d="M12.5 10C14.1569 10 15.5 8.65685 15.5 7C15.5 5.34315 14.1569 4 12.5 4C10.8431 4 9.5 5.34315 9.5 7C9.5 8.65685 10.8431 10 12.5 10Z"
      stroke={color || '#454545'}
      strokeWidth={1.5}
    />
  </Svg>
);
export default SVGComponent;
