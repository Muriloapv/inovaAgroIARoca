import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

export const ManagementProgress = () => {
  const actions = [
    {
      id: '1',
      date: '15/03/2024',
      action: 'Aplicação de fertilizante NPK',
      status: 'Concluído',
      area: 'Quadrante A',
    },
    {
      id: '2',
      date: '10/03/2024',
      action: 'Irrigação',
      status: 'Concluído',
      area: 'Área total',
    },
    {
      id: '3',
      date: '05/03/2024',
      action: 'Monitoramento de pragas',
      status: 'Concluído',
      area: 'Quadrantes A e B',
    },
    {
      id: '4',
      date: '01/03/2024',
      action: 'Plantio',
      status: 'Concluído',
      area: 'Área total',
    },
    {
      id: '5',
      date: '20/03/2024',
      action: 'Aplicação de defensivo',
      status: 'Pendente',
      area: 'Quadrante C',
    },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.date}>{item.date}</Text>
        <Text style={[
          styles.status,
          { color: item.status === 'Concluído' ? '#27ae60' : '#f39c12' }
        ]}>
          {item.status}
        </Text>
      </View>
      <Text style={styles.action}>{item.action}</Text>
      <Text style={styles.area}>Área: {item.area}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Andamento do Manejo</Text>
      <FlatList
        data={actions}
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
  },
  action: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  area: {
    fontSize: 14,
    color: '#666',
  },
}); 