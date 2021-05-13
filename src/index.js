
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { LogBox, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import { store, persistor } from './store';
import { RootSiblingParent } from 'react-native-root-siblings';


export default function Index() {

    return (

        <Provider store={store}>
            <App />
        </Provider>

    );
}
