import {Text, View} from 'react-native';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import {persister, store} from './src/slices/store';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persister}>
        <SafeAreaProvider>
          <View>
            <Text>App</Text>
          </View>
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
