import {useEffect, useRef} from 'react';
import {AppState} from 'react-native';

export default () => {
  const onCloseCallbackRef = useRef(null);
  const onActiveCallbackRef = useRef(null);

  // Set a callback to run when the app goes to the background
  const setOnCloseCallback = (callback: () => {}) => {
    onCloseCallbackRef.current = callback;
  };
  // Set a callback to run when the app comes into foreground
  const setOnActiveCallback = (callback: () => {}) => {
    onActiveCallbackRef.current = callback;
  };

  const handleAppStateChange = (nextAppState: string) => {
    if (nextAppState === 'background') {
      if (onCloseCallbackRef.current) {
        onCloseCallbackRef.current();
      }
    } else if (nextAppState === 'active') {
      if (onActiveCallbackRef.current) {
        onActiveCallbackRef.current();
      }
    }
  };

  useEffect(() => {
    const appStateListener = AppState.addEventListener(
      'change',
      handleAppStateChange,
    );

    return () => {
      appStateListener.remove();
    };
  }, []);

  return {setOnCloseCallback, setOnActiveCallback};
};
