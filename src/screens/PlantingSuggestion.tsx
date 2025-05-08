import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default function PlantingSuggestion() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Sugestão de Plantio</Text>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Substituir Alface por Cenoura</Text>
        <View style={styles.emojiRow}>
          <Text style={styles.emoji}>😞</Text>
          <FontAwesome5 name="arrow-right" size={24} color="#bfa100" style={{ marginHorizontal: 8 }} />
          <FontAwesome5 name="carrot" size={28} color="#ffb300" />
        </View>
      </View>
      <TouchableOpacity style={styles.reduceBtn}>
        <Text style={styles.reduceBtnText}>Reduzir Perdas</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f7f2',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#357a38',
    marginTop: 40,
    marginBottom: 20,
    marginLeft: 20,
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
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#234d20',
    marginBottom: 12,
    textAlign: 'center',
  },
  emojiRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  emoji: {
    fontSize: 28,
  },
  reduceBtn: {
    backgroundColor: '#fffde7',
    borderRadius: 12,
    marginHorizontal: 40,
    paddingVertical: 16,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ffe082',
    marginBottom: 30,
  },
  reduceBtnText: {
    color: '#bfa100',
    fontSize: 18,
    fontWeight: 'bold',
  },
}); 