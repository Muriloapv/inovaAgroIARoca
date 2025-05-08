import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { MaterialIcons, FontAwesome5, Feather } from '@expo/vector-icons';

export default function DailySummary() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <MaterialIcons name="wb-sunny" size={28} color="#fff" style={{ marginRight: 8 }} />
        <Text style={styles.headerTitle}>Meu Resumo Diário</Text>
      </View>

      <View style={styles.card}>
        <View style={styles.cardRow}>
          <Text style={styles.cardTitle}>Planos de Manejo</Text>
          <Feather name="check-circle" size={28} color="#388e3c" />
        </View>
        <Text style={styles.cardSubtitle}>Hoje: 1 plano concluído</Text>
        <View style={styles.iconRow}>
          <FontAwesome5 name="seedling" size={32} color="#388e3c" style={styles.icon} />
          <FontAwesome5 name="seedling" size={32} color="#388e3c" style={styles.icon} />
          <FontAwesome5 name="seedling" size={32} color="#388e3c" style={styles.icon} />
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.cardRow}>
          <Text style={styles.cardTitle}>Venda de Produtos</Text>
          <FontAwesome5 name="leaf" size={28} color="#388e3c" />
        </View>
        <Text style={styles.cardSubtitle}>Alface: 30 unidades vendidas</Text>
      </View>

      <View style={styles.card}>
        <View style={styles.cardRow}>
          <FontAwesome5 name="calendar-check" size={28} color="#388e3c" />
          <Text style={[styles.cardTitle, { marginLeft: 8 }]}>Previsão de Colheita</Text>
        </View>
        <Text style={styles.cardSubtitle}>Data próxima: 28 abr</Text>
      </View>

      <View style={styles.card}>
        <View style={styles.cardRow}>
          <Text style={styles.cardTitle}>Quad. 1: Aplicar Insumo</Text>
          <Feather name="activity" size={28} color="#388e3c" />
        </View>
        <Text style={styles.cardSubtitle}>Hoje: 4 bombas no total</Text>
      </View>

      <View style={styles.card}>
        <View style={styles.cardRow}>
          <Text style={styles.cardTitle}>Perdas de Produção</Text>
          <MaterialIcons name="sentiment-dissatisfied" size={28} color="#fbc02d" />
        </View>
        <Text style={styles.cardSubtitle}>Houveram 70 alfaces perdidas</Text>
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
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#357a38',
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginBottom: 20,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 26,
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 18,
    marginHorizontal: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },
  cardRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#234d20',
  },
  cardSubtitle: {
    fontSize: 16,
    color: '#444',
    marginBottom: 8,
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 8,
  },
  icon: {
    marginHorizontal: 8,
  },
}); 