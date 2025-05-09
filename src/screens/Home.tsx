import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { StackNavigationProp } from '@react-navigation/stack';

// Itens do menu de hambúrguer
const menuItems = [
  { name: 'Início', icon: 'home', screen: 'Home', color: '#27ae60' },
  { name: 'Produtos', icon: 'leaf', screen: 'ProductList', color: '#2196F3' },
  { name: 'Plano de Manejo', icon: 'clipboard', screen: 'ManagementDashboard', color: '#4CAF50' },
  { name: 'Perfil', icon: 'person', screen: 'Profile', color: '#9C27B0' },
  { name: 'Sugestão de Plantio', icon: 'leaf', screen: 'PlantingSuggestion', color: '#8D6E63' },
  { name: 'Previsão de Demanda', icon: 'trending-up', screen: 'DemandForecast', color: '#FF9800' },
  { name: 'Caderno de Campo', icon: 'book', screen: 'FarmNotebook', color: '#795548' },
  { name: 'Emissão de Nota', icon: 'document-text', screen: 'InvoiceEmission', color: '#607D8B' },
  { name: 'AgroZap Chat', icon: 'chatbubbles', screen: 'AgroZapChat', color: '#00BCD4' },
  { name: 'Custo de Gestão', icon: 'calculator', screen: 'ManagementCost', color: '#388E3C' },
  { name: 'Movimento de Produtos', icon: 'swap-horizontal', screen: 'ProductMovement', color: '#FFA726' },
  { name: 'Detalhe do Quadrante', icon: 'grid', screen: 'QuadrantDetail', color: '#F44336' },
  { name: 'Planos de Gestão', icon: 'clipboard', screen: 'ManagementPlans', color: '#607D8B' },
  { name: 'Resumo Diário', icon: 'calendar', screen: 'DailySummary', color: '#009688' },
  { name: 'Cadastro de Produtos', icon: 'add-circle', screen: 'ProductRegistration', color: '#AB47BC' },
];

type RootStackParamList = { [key: string]: undefined };
type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList>;

export const Home = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const route = useRoute();

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 32 }}>
        <TouchableOpacity style={styles.iaContainer} onPress={() => navigation.navigate('Home')}>
          <Ionicons name="rocket" size={36} color="#27ae60" style={{ marginRight: 8 }} />
          <Text style={styles.iaText}>IA da Roça</Text>
        </TouchableOpacity>
        <View style={styles.gridWrapper}>
          <View style={styles.grid}>
            {menuItems.map((item, index) => {
              const isSelected = route.name === item.screen;
              return (
                <TouchableOpacity
                  key={item.name}
                  style={[styles.square, { backgroundColor: item.color }]}
                  onPress={() => navigation.navigate(item.screen as any)}
                >
                  <Ionicons
                    name={item.icon as any}
                    size={32}
                    color={isSelected ? '#fff' : 'rgba(255,255,255,0.7)'}
                  />
                  <Text style={styles.squareTitle}>{item.name}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  iaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 24,
    marginBottom: 16,
  },
  iaText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#27ae60',
    letterSpacing: 1,
  },
  gridWrapper: {
    flex: 1,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: 8,
  },
  square: {
    width: '42%',
    aspectRatio: 1,
    margin: '4%',
    borderRadius: 12,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  squareTitle: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 8,
  },
}); 