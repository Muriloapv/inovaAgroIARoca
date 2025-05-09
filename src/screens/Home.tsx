import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { StackNavigationProp } from '@react-navigation/stack';

// Itens do menu de hambúrguer
const menuItems = [
  { name: 'Produtos', icon: 'leaf', screen: 'ProductList', color: '#2196F3' },
  { name: 'Plano de Manejo', icon: 'clipboard', screen: 'ManagementDashboard', color: '#4CAF50' },
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
    <View style={styles.mainContainer}>
      <View style={styles.scrollContainer}>
        <ScrollView 
          bounces={false}
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={true}
          overScrollMode="never"
          progressViewOffset={-20}
        >
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
                      color={isSelected ? '#fff' : 'rgba(255,255,255,0.9)'}
                      style={styles.squareIcon}
                    />
                    <Text style={styles.squareTitle}>{item.name}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContainer: {
    flex: 1,
    paddingLeft: 4,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingVertical: 16,
    paddingBottom: 32,
    paddingRight: 16,
  },
  gridWrapper: {
    paddingHorizontal: 12,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  square: {
    width: '47%',
    aspectRatio: 1,
    marginBottom: 16,
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
  squareIcon: {
    marginBottom: 12,
  },
  squareTitle: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 22,
    paddingHorizontal: 4,
  },
}); 