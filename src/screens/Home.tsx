import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  ProductList: undefined;
  ManagementPlan: undefined;
  ManagementProgress: undefined;
  SalesList: undefined;
};

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList>;

export const Home = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const squares = [
    {
      title: 'Produtos',
      icon: 'inventory' as const,
      screen: 'ProductList' as const,
      color: '#2196F3',
    },
    {
      title: 'Plano de manejo cadastrado',
      icon: 'assignment' as const,
      screen: 'ManagementPlan' as const,
      color: '#4CAF50',
    },
    {
      title: 'Andamento do manejo',
      icon: 'trending-up' as const,
      screen: 'ManagementProgress' as const,
      color: '#FF9800',
    },
    {
      title: 'Vendas',
      icon: 'shopping-cart' as const,
      screen: 'SalesList' as const,
      color: '#9C27B0',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao AgroGo</Text>
      <View style={styles.grid}>
        {squares.map((square, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.square, { backgroundColor: square.color }]}
            onPress={() => navigation.navigate(square.screen)}
          >
            <MaterialIcons name={square.icon} size={32} color="#fff" />
            <Text style={styles.squareTitle}>{square.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#27ae60',
    margin: 16,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 8,
  },
  square: {
    width: '45%',
    aspectRatio: 1,
    margin: '2.5%',
    borderRadius: 10,
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
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 8,
  },
}); 