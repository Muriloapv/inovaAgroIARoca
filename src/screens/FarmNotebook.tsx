import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';

export default function FarmNotebook() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Caderno da Roça</Text>
      </View>
      <View style={styles.card}>
        <FontAwesome5 name="file-pdf" size={28} color="#357a38" style={{ marginRight: 10 }} />
        <View>
          <Text style={styles.cardTitle}>Resumo de Vendas</Text>
          <Text style={styles.cardSubtitle}>Março 2024</Text>
        </View>
      </View>
      <View style={styles.card}>
        <FontAwesome5 name="file-pdf" size={28} color="#357a38" style={{ marginRight: 10 }} />
        <View>
          <Text style={styles.cardTitle}>Plano de Manejo Atualizado</Text>
        </View>
      </View>
      <View style={styles.gamificationCard}>
        <MaterialIcons name="emoji-nature" size={36} color="#fbc02d" style={{ marginBottom: 6 }} />
        <Text style={styles.gamificationTitle}>Mantenha o ritmo!</Text>
        <Text style={styles.gamificationText}>Documente suas atividades <Text style={{ fontWeight: 'bold' }}>todos</Text> os dias.</Text>
        <Text style={styles.offensiveText}>1 ofensiva!</Text>
        <View style={styles.progressRow}>
          {[...Array(6)].map((_, i) => (
            <View key={i} style={[styles.progressDot, i === 0 ? styles.progressDotActive : null]} />
          ))}
        </View>
      </View>
      <TouchableOpacity style={styles.registerBtn}>
        <Text style={styles.registerBtnText}>Registrar atividades</Text>
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
    marginTop: 40,
    marginBottom: 20,
    marginLeft: 20,
  },
  headerTitle: {
    color: '#357a38',
    fontSize: 24,
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 18,
    marginHorizontal: 16,
    marginBottom: 14,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#234d20',
  },
  cardSubtitle: {
    fontSize: 15,
    color: '#444',
  },
  gamificationCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    alignItems: 'center',
    padding: 18,
    marginHorizontal: 16,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },
  gamificationTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#357a38',
    marginBottom: 4,
  },
  gamificationText: {
    fontSize: 15,
    color: '#444',
    marginBottom: 8,
    textAlign: 'center',
  },
  offensiveText: {
    color: '#bfa100',
    fontWeight: 'bold',
    marginBottom: 6,
  },
  progressRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 8,
  },
  progressDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#e0e0e0',
    marginHorizontal: 3,
  },
  progressDotActive: {
    backgroundColor: '#388e3c',
  },
  registerBtn: {
    backgroundColor: '#388e3c',
    borderRadius: 12,
    marginHorizontal: 40,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 30,
  },
  registerBtnText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
}); 