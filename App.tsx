import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import DrawerNavigator from './src/navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {I18nextProvider} from 'react-i18next';
import {persistor, store} from './src/redux/store';
import {useLocalization} from './src/hooks';

const App = () => {
  const {i18n} = useLocalization();

  const onBeforeLift = () => {
    // Do something before store gets emtpy
  };

  return (
    <Provider store={store}>
      <PersistGate
        loading={null}
        persistor={persistor}
        onBeforeLift={onBeforeLift}>
        <NavigationContainer>
          <SafeAreaProvider>
            <I18nextProvider i18n={i18n} defaultNS={'translation'}>
              <DrawerNavigator />
            </I18nextProvider>
          </SafeAreaProvider>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
