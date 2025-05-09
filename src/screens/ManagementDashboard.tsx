import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialIcons, FontAwesome5, Feather } from '@expo/vector-icons';

export const ManagementDashboard = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Plano de Manejo</Text>
      <TouchableOpacity style={styles.bellBtn}>
        <Feather name="bell" size={22} color="#888" />
      </TouchableOpacity>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Objetivos e Metas</Text>
        <View style={styles.rowBetween}>
          <Text style={styles.cardSubtitle}>Crescimento em 30 dias</Text>
          <Text style={styles.percent}>80%</Text>
        </View>
        <View style={styles.progressBarBg}>
          <View style={[styles.progressBarFill, { width: '80%' }]} />
        </View>
      </View>

      <Text style={styles.sectionTitle}>Área de Plantio</Text>
      <View style={styles.quadrantsRow}>
        <View style={styles.quadrantCard}>
          <Text style={styles.quadrantTitle}>Quadrante A</Text>
          <Text style={styles.quadrantSubtitle}>Tomates</Text>
          <View style={styles.progressBarBgSmall}>
            <View style={[styles.progressBarFillSmall, { width: '40%' }]} />
          </View>
        </View>
        <View style={styles.quadrantCard}>
          <Text style={styles.quadrantTitle}>Quadrante B</Text>
          <Text style={styles.quadrantSubtitle}>Alface</Text>
          <View style={styles.progressBarBgSmall}>
            <View style={[styles.progressBarFillSmall, { width: '70%' }]} />
          </View>
        </View>
      </View>

      <View style={styles.rowBetween}>
        <Text style={styles.sectionTitle}>Ações Pendentes</Text>
        <TouchableOpacity>
          <Feather name="plus" size={20} color="#888" />
        </TouchableOpacity>
      </View>
      <View style={styles.actionCard}>
        <FontAwesome5 name="flask" size={18} color="#888" style={{ marginRight: 8 }} />
        <Text style={styles.actionText}>Aplicar Fertilizante</Text>
      </View>
      <View style={styles.actionCard}>
        <FontAwesome5 name="tint" size={18} color="#888" style={{ marginRight: 8 }} />
        <Text style={styles.actionText}>Irrigar Quadrante A</Text>
      </View>

      <View style={styles.reminderCard}>
        <View style={styles.rowBetween}>
          <Text style={styles.sectionTitle}>Lembretes</Text>
          <Feather name="calendar" size={18} color="#888" />
        </View>
        <Text style={styles.reminderText}>O que fez hoje?</Text>
        <Text style={styles.reminderText}>Estamos chegando perto da data de colheita</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f3e7',
    padding: 16,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#6d5c2c',
    alignSelf: 'center',
    marginTop: 8,
    marginBottom: 8,
  },
  bellBtn: {
    position: 'absolute',
    right: 24,
    top: 16,
    zIndex: 10,
  },
  card: {
    backgroundColor: '#fdf6e3',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
    color: '#6d5c2c',
  },
  cardSubtitle: {
    color: '#888',
    fontSize: 14,
  },
  percent: {
    color: '#6d5c2c',
    fontWeight: 'bold',
  },
  progressBarBg: {
    height: 8,
    backgroundColor: '#eee',
    borderRadius: 4,
    marginTop: 8,
    marginBottom: 4,
    width: '100%',
  },
  progressBarFill: {
    height: 8,
    backgroundColor: '#6d5c2c',
    borderRadius: 4,
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#6d5c2c',
    marginTop: 8,
    marginBottom: 4,
  },
  quadrantsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  quadrantCard: {
    backgroundColor: '#fdf6e3',
    borderRadius: 10,
    padding: 12,
    width: '48%',
    elevation: 1,
  },
  quadrantTitle: {
    fontWeight: 'bold',
    color: '#6d5c2c',
    fontSize: 14,
  },
  quadrantSubtitle: {
    color: '#888',
    fontSize: 13,
    marginBottom: 4,
  },
  progressBarBgSmall: {
    height: 6,
    backgroundColor: '#eee',
    borderRadius: 3,
    width: '100%',
  },
  progressBarFillSmall: {
    height: 6,
    backgroundColor: '#6d5c2c',
    borderRadius: 3,
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  actionCard: {
    backgroundColor: '#fdf6e3',
    borderRadius: 8,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    elevation: 1,
  },
  actionText: {
    color: '#6d5c2c',
    fontSize: 14,
  },
  reminderCard: {
    backgroundColor: '#fdf6e3',
    borderRadius: 10,
    padding: 14,
    marginTop: 12,
    elevation: 1,
  },
  reminderText: {
    color: '#6d5c2c',
    fontSize: 13,
    marginTop: 2,
  },
}); 