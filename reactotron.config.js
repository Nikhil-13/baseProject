import Reactotron from 'reactotron-react-native';
import {reactotronRedux} from 'reactotron-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Enhance logging with display, monitor state, and performance tracking
const reactotron = Reactotron.setAsyncStorageHandler(AsyncStorage)
  .configure()
  .use(reactotronRedux()) // Redux plugin for tracking actions and state
  .useReactNative({
    asyncStorage: {ignore: ['secret_key']}, // Ignore sensitive keys in
    networking: {
      ignoreUrls: /symbolicate|127\.0\.0\.1/, // Ignore specific URLs like symbolication and local calls
    },
    editor: false, // No need for editor integration
    errors: {veto: stackFrame => false}, // Show all errors
    overlay: {visible: true, color: '#e74c3c'}, // Enable overlay for
  })
  .connect();

// Clearing logs when app refreshes for better debugging
if (__DEV__) {
  Reactotron.clear();
}

export default reactotron;
