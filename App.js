import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StyleSheet, Text, View } from 'react-native';
import FormUpdate from './component/FormUpdate';
import Screen1 from './Screen/Screen1';

const Stack = createNativeStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='Screen1' component={Screen1} />
        <Stack.Screen name='UpdateForm' component={FormUpdate} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
