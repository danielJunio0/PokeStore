import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Lista } from '../screens/Lista/Lista';
import { Detalhes } from '../screens/Detalhes/Detalhes';
import { NavigationContainer } from '@react-navigation/native';
const App = createStackNavigator();

export default function AppNavigation() {
    return (
        <NavigationContainer>
            <App.Navigator
            initialRouteName={"Lista"}
            screenOptions={{
                headerTransparent: true,
                headerShown: false,
            }}
        >
            <App.Screen name="Lista" component={Lista} />
            <App.Screen name="Detalhes" component={Detalhes} />
        </App.Navigator>
        </NavigationContainer>
    );
}
