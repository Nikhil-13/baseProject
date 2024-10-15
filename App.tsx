import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import {persister, store} from './src/slices/store';
import DrawerNavigator from './src/navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  const onBeforeLift = () => {};
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <PersistGate persistor={persister} onBeforeLift={onBeforeLift}>
          <NavigationContainer>
            <DrawerNavigator />
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
