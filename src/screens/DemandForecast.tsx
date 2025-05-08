import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default function DemandForecast() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Previsão de Demanda</Text>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Plantar mais Alface?</Text>
        <Text style={styles.cardText}>
          De acordo com o histórico de vendas, é recomendável aumentar o plantio de Alface para atender a demanda futura.
        </Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Gráfico de Vendas</Text>
        <View style={styles.graphPlaceholder}>
          <FontAwesome5 name="chart-bar" size={48} color="#388e3c" />
        </View>
        <Text style={styles.cardText}>Importância do Custo</Text>
        <Text style={styles.costValue}>R$140,00</Text>
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
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#234d20',
    marginBottom: 8,
  },
  cardText: {
    fontSize: 15,
    color: '#444',
    marginBottom: 8,
  },
  graphPlaceholder: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    marginBottom: 8,
  },
  costValue: {
    fontSize: 18,
    color: '#357a38',
    fontWeight: 'bold',
    marginTop: 4,
  },
}); 