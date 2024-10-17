import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import DrawerNavigator from './src/navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {I18nextProvider} from 'react-i18next';
import i18n from './src/locales';
import {getPersistor, getStore} from './src/slices/store';

const App = () => {
  const store = getStore();
  const persistor = getPersistor();

  return (
    <SafeAreaProvider>
      <I18nextProvider i18n={i18n} defaultNS={'translation'}>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <NavigationContainer>
              <DrawerNavigator />
            </NavigationContainer>
          </PersistGate>
        </Provider>
      </I18nextProvider>
    </SafeAreaProvider>
  );
};

export default App;
