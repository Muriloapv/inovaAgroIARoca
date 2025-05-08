import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';

export default function QuadrantDetail() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Estufa</Text>
      <View style={styles.card}>
        <View style={styles.cardRow}>
          <MaterialIcons name="wb-sunny" size={32} color="#fbc02d" />
          <Text style={styles.cardTitle}>Área de plantio</Text>
        </View>
        <Text style={styles.cardSubtitle}>Estufa</Text>
      </View>
      <Text style={styles.sectionTitle}>Objetivos</Text>
      <View style={styles.objectiveList}>
        <View style={styles.objectiveItem}>
          <FontAwesome5 name="check-circle" size={20} color="#388e3c" />
          <Text style={styles.objectiveText}>Preparo do solo</Text>
        </View>
        <View style={styles.objectiveItem}>
          <FontAwesome5 name="spinner" size={20} color="#fbc02d" />
          <Text style={styles.objectiveText}>Plantio <Text style={{color:'#888'}}>(Em progresso)</Text></Text>
        </View>
        <View style={styles.objectiveItem}>
          <FontAwesome5 name="tint" size={20} color="#388e3c" />
          <Text style={styles.objectiveText}>Irrigação</Text>
        </View>
        <View style={styles.objectiveItem}>
          <FontAwesome5 name="leaf" size={20} color="#388e3c" />
          <Text style={styles.objectiveText}>Adubação</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.diaryBtn}>
        <Text style={styles.diaryBtnText}>Diário</Text>
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
  cardRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#234d20',
    marginLeft: 10,
  },
  cardSubtitle: {
    fontSize: 16,
    color: '#444',
    marginTop: 4,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#234d20',
    marginLeft: 20,
    marginBottom: 10,
  },
  objectiveList: {
    marginHorizontal: 16,
    marginBottom: 20,
  },
  objectiveItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  objectiveText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#357a38',
  },
  diaryBtn: {
    backgroundColor: '#388e3c',
    borderRadius: 12,
    marginHorizontal: 40,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 30,
  },
  diaryBtnText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
}); 