import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const products = [
  { name: 'Alface', price: 'R$ 2.00', icon: 'leaf', color: '#7cb342' },
  { name: 'Tomate', price: 'R$ 5.00', icon: 'apple-alt', color: '#e57373' },
  { name: 'Cenoura', price: 'R$ 3.50', icon: 'carrot', color: '#ffb300' },
];

export default function ProductMovement() {
  const [tab, setTab] = useState<'catalog' | 'history'>('catalog');

  return (
    <ScrollView style={styles.container}>
      <View style={styles.tabRow}>
        <TouchableOpacity
          style={[styles.tabBtn, tab === 'catalog' && styles.tabBtnActive]}
          onPress={() => setTab('catalog')}
        >
          <Text style={[styles.tabText, tab === 'catalog' && styles.tabTextActive]}>Catálogo</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabBtn, tab === 'history' && styles.tabBtnActive]}
          onPress={() => setTab('history')}
        >
          <Text style={[styles.tabText, tab === 'history' && styles.tabTextActive]}>Histórico</Text>
        </TouchableOpacity>
      </View>

      {tab === 'catalog' && (
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Produtos</Text>
          {products.map((p) => (
            <View style={styles.productRow} key={p.name}>
              <FontAwesome5 name={p.icon as any} size={28} color={p.color} style={{ marginRight: 12 }} />
              <Text style={styles.productName}>{p.name}</Text>
              <Text style={styles.productPrice}>{p.price}</Text>
            </View>
          ))}
        </View>
      )}

      {tab === 'catalog' && (
        <View style={styles.suggestionCard}>
          <Text style={styles.suggestionTitle}>Reduzir o plantio de alface</Text>
          <Text style={styles.suggestionText}>A produção de alface está excedendo a demanda</Text>
        </View>
      )}

      {tab === 'history' && (
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Histórico de Vendas</Text>
          <View style={styles.historyRow}>
            <Text style={styles.historyLabel}>Hoje</Text>
            <Text style={styles.historyValue}>10</Text>
          </View>
          <View style={styles.historyRow}>
            <Text style={styles.historyLabel}>Semana</Text>
            <Text style={styles.historyValue}>25</Text>
          </View>
          <View style={styles.historyRow}>
            <Text style={styles.historyLabel}>Mês</Text>
            <Text style={styles.historyValue}>40</Text>
          </View>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f7f2',
  },
  tabRow: {
    flexDirection: 'row',
    marginTop: 40,
    marginBottom: 10,
    marginHorizontal: 16,
    borderRadius: 12,
    backgroundColor: '#e0e0e0',
    overflow: 'hidden',
  },
  tabBtn: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
  },
  tabBtnActive: {
    backgroundColor: '#fff',
  },
  tabText: {
    fontSize: 16,
    color: '#357a38',
    fontWeight: 'bold',
  },
  tabTextActive: {
    color: '#234d20',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 18,
    marginHorizontal: 16,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#234d20',
    marginBottom: 10,
  },
  productRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  productName: {
    fontSize: 16,
    color: '#357a38',
    fontWeight: 'bold',
    flex: 1,
  },
  productPrice: {
    fontSize: 16,
    color: '#234d20',
    fontWeight: 'bold',
  },
  suggestionCard: {
    backgroundColor: '#fffde7',
    borderRadius: 16,
    padding: 18,
    marginHorizontal: 16,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ffe082',
  },
  suggestionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#bfa100',
    marginBottom: 6,
  },
  suggestionText: {
    fontSize: 15,
    color: '#444',
  },
  historyRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  historyLabel: {
    fontSize: 16,
    color: '#357a38',
  },
  historyValue: {
    fontSize: 16,
    color: '#234d20',
    fontWeight: 'bold',
  },
}); 