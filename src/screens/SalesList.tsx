import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

export const SalesList = () => {
  const sales = [
    {
      id: '1',
      date: '15/03/2024',
      product: 'Soja',
      quantity: '1000 sacas',
      price: 'R$ 180,00/saca',
      total: 'R$ 180.000,00',
      status: 'Concluída',
    },
    {
      id: '2',
      date: '10/03/2024',
      product: 'Milho',
      quantity: '500 sacas',
      price: 'R$ 85,00/saca',
      total: 'R$ 42.500,00',
      status: 'Concluída',
    },
    {
      id: '3',
      date: '05/03/2024',
      product: 'Trigo',
      quantity: '300 sacas',
      price: 'R$ 95,00/saca',
      total: 'R$ 28.500,00',
      status: 'Concluída',
    },
    {
      id: '4',
      date: '01/03/2024',
      product: 'Arroz',
      quantity: '200 sacas',
      price: 'R$ 120,00/saca',
      total: 'R$ 24.000,00',
      status: 'Concluída',
    },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.date}>{item.date}</Text>
        <Text style={styles.status}>{item.status}</Text>
      </View>
      <Text style={styles.product}>{item.product}</Text>
      <View style={styles.details}>
        <Text style={styles.detail}>Quantidade: {item.quantity}</Text>
        <Text style={styles.detail}>Preço: {item.price}</Text>
      </View>
      <Text style={styles.total}>Total: {item.total}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Vendas</Text>
      <FlatList
        data={sales}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
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
  list: {
    padding: 16,
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  date: {
    fontSize: 14,
    color: '#666',
  },
  status: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#27ae60',
  },
  product: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  details: {
    marginBottom: 8,
  },
  detail: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  total: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2196F3',
  },
}); 