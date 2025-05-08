import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Animated, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
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
};

type NavigationProp = StackNavigationProp<RootStackParamList>;

export const ScreenMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigation = useNavigation<NavigationProp>();
  const [animation] = useState(new Animated.Value(0));

  const toggleMenu = () => {
    const toValue = isOpen ? 0 : 1;
    Animated.spring(animation, {
      toValue,
      friction: 5,
      useNativeDriver: true,
    }).start();
    setIsOpen(!isOpen);
  };

  const navigateTo = (screen: keyof RootStackParamList) => {
    navigation.navigate(screen);
    toggleMenu();
  };

  const menuItems = [
    { name: 'Início', icon: 'home' as const, screen: 'Home' as const },
    { name: 'Produtos', icon: 'leaf' as const, screen: 'ProductList' as const },
    { name: 'Perfil', icon: 'person' as const, screen: 'Profile' as const },
    { name: 'Sugestão de Plantio', icon: 'leaf' as const, screen: 'PlantingSuggestion' as const },
    { name: 'Previsão de Demanda', icon: 'trending-up' as const, screen: 'DemandForecast' as const },
    { name: 'Caderno de Campo', icon: 'book' as const, screen: 'FarmNotebook' as const },
    { name: 'Emissão de Nota', icon: 'document-text' as const, screen: 'InvoiceEmission' as const },
    { name: 'AgroZap Chat', icon: 'chatbubbles' as const, screen: 'AgroZapChat' as const },
    { name: 'Custo de Gestão', icon: 'calculator' as const, screen: 'ManagementCost' as const },
    { name: 'Movimento de Produtos', icon: 'swap-horizontal' as const, screen: 'ProductMovement' as const },
    { name: 'Detalhe do Quadrante', icon: 'grid' as const, screen: 'QuadrantDetail' as const },
    { name: 'Planos de Gestão', icon: 'clipboard' as const, screen: 'ManagementPlans' as const },
    { name: 'Resumo Diário', icon: 'calendar' as const, screen: 'DailySummary' as const },
    { name: 'Cadastro de Produtos', icon: 'add-circle' as const, screen: 'ProductRegistration' as const },
  ];

  return (
    <View style={styles.container}>
      {isOpen && (
        <View style={styles.menuContainer}>
          <ScrollView style={styles.scrollView}>
            {menuItems.map((item, index) => (
              <TouchableOpacity
                key={item.name}
                style={[
                  styles.menuItem,
                  {
                    transform: [
                      {
                        translateY: animation.interpolate({
                          inputRange: [0, 1],
                          outputRange: [0, -60 * (index + 1)],
                        }),
                      },
                    ],
                  },
                ]}
                onPress={() => navigateTo(item.screen)}
              >
                <Ionicons name={item.icon} size={24} color="#fff" />
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      )}
      <TouchableOpacity style={styles.fab} onPress={toggleMenu}>
        <Ionicons
          name={isOpen ? 'close' : 'menu'}
          size={24}
          color="#fff"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    zIndex: 1000,
  },
  fab: {
    backgroundColor: '#27ae60',
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  menuContainer: {
    position: 'absolute',
    bottom: 70,
    right: 0,
    maxHeight: 400,
  },
  scrollView: {
    maxHeight: 400,
  },
  menuItem: {
    backgroundColor: '#27ae60',
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
}); 