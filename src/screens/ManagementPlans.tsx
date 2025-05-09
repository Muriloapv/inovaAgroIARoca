import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';

export default function ManagementPlans() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Planos de manejo</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Plano de manejo</Text>
        <View style={styles.progressBarBg}>
          <View style={styles.progressBarFill} />
        </View>
        <View style={styles.objectiveRow}>
          <MaterialIcons name="flag" size={20} color="#388e3c" />
          <Text style={styles.objectiveText}>Objetivo 1</Text>
          <Text style={styles.objectivePercent}>40%</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Quadrantes</Text>
      <View style={styles.quadrantsRow}>
        <TouchableOpacity style={styles.quadrantBtn}>
          <FontAwesome5 name="carrot" size={28} color="#388e3c" />
          <Text style={styles.quadrantLabel}>Horta</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.quadrantBtn}>
          <MaterialIcons name="wb-sunny" size={28} color="#388e3c" />
          <Text style={styles.quadrantLabel}>Estufa</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.quadrantBtn}>
          <FontAwesome5 name="apple-alt" size={28} color="#388e3c" />
          <Text style={styles.quadrantLabel}>Pomar</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.newPlanBtn}>
        <Text style={styles.newPlanBtnText}>+ Novo plano</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f7f2',
    paddingHorizontal: 0,
    paddingBottom: 80,
  },
  header: {
    fontSize: 28,
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
    fontSize: 20,
    fontWeight: 'bold',
    color: '#234d20',
    marginBottom: 10,
  },
  progressBarBg: {
    height: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    marginBottom: 10,
    overflow: 'hidden',
  },
  progressBarFill: {
    width: '40%',
    height: 10,
    backgroundColor: '#388e3c',
    borderRadius: 5,
  },
  objectiveRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },
  objectiveText: {
    marginLeft: 6,
    fontSize: 16,
    color: '#357a38',
    fontWeight: 'bold',
  },
  objectivePercent: {
    marginLeft: 'auto',
    fontSize: 16,
    color: '#357a38',
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#234d20',
    marginLeft: 20,
    marginBottom: 10,
  },
  quadrantsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 30,
  },
  quadrantBtn: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 14,
    width: 90,
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 1,
  },
  quadrantLabel: {
    marginTop: 6,
    color: '#357a38',
    fontWeight: 'bold',
  },
  newPlanBtn: {
    backgroundColor: '#388e3c',
    borderRadius: 12,
    marginHorizontal: 40,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 30,
  },
  newPlanBtnText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
}); 