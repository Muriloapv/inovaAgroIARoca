import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const mockProducts = [
  { id: '1', name: 'Soja', quantity: '1000kg', price: 'R$ 180,00/kg' },
  { id: '2', name: 'Milho', quantity: '2000kg', price: 'R$ 90,00/kg' },
  { id: '3', name: 'Trigo', quantity: '1500kg', price: 'R$ 120,00/kg' },
  { id: '4', name: 'Arroz', quantity: '3000kg', price: 'R$ 95,00/kg' },
];

export const ProductList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Produtos Cadastrados</Text>
      <FlatList
        data={mockProducts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.productName}>{item.name}</Text>
            <View style={styles.detailsContainer}>
              <Text style={styles.detail}>Quantidade: {item.quantity}</Text>
              <Text style={styles.detail}>Preço: {item.price}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#27ae60',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    marginBottom: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detail: {
    fontSize: 14,
    color: '#666',
  },
}); 