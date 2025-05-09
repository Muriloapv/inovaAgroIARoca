import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { ProductRegistration } from '../screens/ProductRegistration';
import { Home } from '../screens/Home';
import { Profile } from '../screens/Profile';
import PlantingSuggestion from '../screens/PlantingSuggestion';
import DemandForecast from '../screens/DemandForecast';
import FarmNotebook from '../screens/FarmNotebook';
import InvoiceEmission from '../screens/InvoiceEmission';
import AgroZapChat from '../screens/AgroZapChat';
import ManagementCost from '../screens/ManagementCost';
import ProductMovement from '../screens/ProductMovement';
import QuadrantDetail from '../screens/QuadrantDetail';
import ManagementPlans from '../screens/ManagementPlans';
import DailySummary from '../screens/DailySummary';
import { ProductList } from '../screens/ProductList';
import { ManagementPlan } from '../screens/ManagementPlan';
import { ManagementProgress } from '../screens/ManagementProgress';
import { SalesList } from '../screens/SalesList';
import { ScreenWithMenu } from '../components/ScreenWithMenu';
import { ManagementDashboard } from '../screens/ManagementDashboard';

export type RootStackParamList = {
  Home: undefined;
  ProductList: undefined;
  ManagementPlan: undefined;
  ManagementProgress: undefined;
  SalesList: undefined;
  ProductRegistration: undefined;
  Profile: undefined;
  PlantingSuggestion: undefined;
  DemandForecast: undefined;
  FarmNotebook: undefined;
  InvoiceEmission: undefined;
  AgroZapChat: undefined;
  ManagementCost: undefined;
  ProductMovement: undefined;
  QuadrantDetail: undefined;
  ManagementPlans: undefined;
  DailySummary: undefined;
  ManagementDashboard: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
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
          name="Home" 
          component={ScreenWithMenu(Home)}
          options={{ title: 'Início' }}
        />
        <Stack.Screen 
          name="ProductList" 
          component={ScreenWithMenu(ProductList)}
          options={{ title: 'Produtos' }}
        />
        <Stack.Screen 
          name="ManagementPlan" 
          component={ScreenWithMenu(ManagementPlan)}
          options={{ title: 'Plano de Manejo' }}
        />
        <Stack.Screen 
          name="ManagementProgress" 
          component={ScreenWithMenu(ManagementProgress)}
          options={{ title: 'Andamento do Manejo' }}
        />
        <Stack.Screen 
          name="SalesList" 
          component={ScreenWithMenu(SalesList)}
          options={{ title: 'Vendas' }}
        />
        <Stack.Screen 
          name="ProductRegistration" 
          component={ScreenWithMenu(ProductRegistration)}
          options={{ title: 'Cadastro de Produtos' }}
        />
        <Stack.Screen 
          name="Profile" 
          component={ScreenWithMenu(Profile)}
          options={{ title: 'Perfil' }}
        />
        <Stack.Screen 
          name="PlantingSuggestion" 
          component={ScreenWithMenu(PlantingSuggestion)}
          options={{ title: 'Sugestão de Plantio' }}
        />
        <Stack.Screen 
          name="DemandForecast" 
          component={ScreenWithMenu(DemandForecast)}
          options={{ title: 'Previsão de Demanda' }}
        />
        <Stack.Screen 
          name="FarmNotebook" 
          component={ScreenWithMenu(FarmNotebook)}
          options={{ title: 'Caderno de Campo' }}
        />
        <Stack.Screen 
          name="InvoiceEmission" 
          component={ScreenWithMenu(InvoiceEmission)}
          options={{ title: 'Emissão de Nota' }}
        />
        <Stack.Screen 
          name="AgroZapChat" 
          component={ScreenWithMenu(AgroZapChat)}
          options={{ title: 'AgroZap Chat' }}
        />
        <Stack.Screen 
          name="ManagementCost" 
          component={ScreenWithMenu(ManagementCost)}
          options={{ title: 'Custo de Gestão' }}
        />
        <Stack.Screen 
          name="ProductMovement" 
          component={ScreenWithMenu(ProductMovement)}
          options={{ title: 'Movimento de Produtos' }}
        />
        <Stack.Screen 
          name="QuadrantDetail" 
          component={ScreenWithMenu(QuadrantDetail)}
          options={{ title: 'Detalhe do Quadrante' }}
        />
        <Stack.Screen 
          name="ManagementPlans" 
          component={ScreenWithMenu(ManagementPlans)}
          options={{ title: 'Planos de Gestão' }}
        />
        <Stack.Screen 
          name="DailySummary" 
          component={ScreenWithMenu(DailySummary)}
          options={{ title: 'Resumo Diário' }}
        />
        <Stack.Screen 
          name="ManagementDashboard" 
          component={ScreenWithMenu(ManagementDashboard)}
          options={{ title: 'Plano de Manejo' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}; 