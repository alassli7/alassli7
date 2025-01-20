import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import AddLoanScreen from './screens/AddLoanScreen';
import BorrowerScreen from './screens/BorrowerScreen';
import LenderScreen from './screens/LenderScreen';
import StartScreen from './screens/StartScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="StartScreen">
        <Stack.Screen name="StartScreen" component={StartScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="AddLoanScreen" component={AddLoanScreen} />
        <Stack.Screen name="BorrowerScreen" component={BorrowerScreen} />
        <Stack.Screen name="LenderScreen" component={LenderScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
