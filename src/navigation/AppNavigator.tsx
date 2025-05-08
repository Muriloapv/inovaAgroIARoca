import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ProductRegistration } from '../screens/ProductRegistration';

const Stack = createNativeStackNavigator();

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="ProductRegistration"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#27ae60',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen
          name="ProductRegistration"
          component={ProductRegistration}
          options={{
            title: 'Cadastro de Produtos',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}; 