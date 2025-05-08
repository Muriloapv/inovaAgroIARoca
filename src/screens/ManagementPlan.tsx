import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export const ManagementPlan = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Plano de Manejo</Text>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Informações Essenciais</Text>
        
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Cultura Principal</Text>
          <Text style={styles.cardContent}>Soja</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Área Total</Text>
          <Text style={styles.cardContent}>500 hectares</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Período de Plantio</Text>
          <Text style={styles.cardContent}>Outubro 2024 - Março 2025</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Método de Irrigação</Text>
          <Text style={styles.cardContent}>Gotejamento</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Fertilizantes Utilizados</Text>
          <Text style={styles.cardContent}>NPK 10-20-20, Fósforo, Potássio</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Controle de Pragas</Text>
          <Text style={styles.cardContent}>Monitoramento semanal, Controle biológico</Text>
        </View>
      </View>
    </ScrollView>
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
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
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
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2196F3',
    marginBottom: 8,
  },
  cardContent: {
    fontSize: 14,
    color: '#666',
  },
}); 