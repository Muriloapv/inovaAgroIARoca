import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const costs = [
  { name: 'Sementes', value: 'R$ 50.00', date: 'Laached' },
  { name: 'Insumos', value: 'R$ 50.00', date: 'Laached' },
  { name: 'Fertilizantes', value: 'R$ 120.00', date: '24 Apr 2074' },
];

export default function ManagementCost() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Custo de Manejo</Text>
      <View style={styles.table}>
        <View style={styles.tableHeader}>
          <Text style={styles.tableHeaderText}>Nome</Text>
          <Text style={styles.tableHeaderText}>Valor</Text>
          <Text style={styles.tableHeaderText}>Data</Text>
        </View>
        {costs.map((item, idx) => (
          <View style={styles.tableRow} key={idx}>
            <Text style={styles.tableCell}>{item.name}</Text>
            <Text style={styles.tableCell}>{item.value}</Text>
            <Text style={styles.tableCell}>{item.date}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f7f2',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#357a38',
    marginTop: 40,
    marginBottom: 20,
    marginLeft: 20,
  },
  table: {
    backgroundColor: '#fff',
    borderRadius: 16,
    marginHorizontal: 16,
    padding: 18,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },
  tableHeader: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    paddingBottom: 8,
    marginBottom: 8,
  },
  tableHeaderText: {
    flex: 1,
    fontWeight: 'bold',
    color: '#234d20',
    fontSize: 16,
  },
  tableRow: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  tableCell: {
    flex: 1,
    color: '#357a38',
    fontSize: 15,
  },
}); 