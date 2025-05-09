import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialIcons, FontAwesome5, Feather } from '@expo/vector-icons';

const COLORS = {
  green: '#4CAF50',
  greenLight: '#DDEDDC',
  greenDark: '#2E7D32',
  beige: '#FDF6EC',
  brown: '#A1887F',
  beigeGray: '#E0D9CC',
  yellow: '#FFEB3B',
  yellowPastel: '#FFF8DC',
  gray: '#F5F5F5',
  grayText: '#757575',
};

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
    backgroundColor: COLORS.beige,
    padding: 16,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    color: COLORS.greenDark,
    alignSelf: 'center',
    marginTop: 8,
    marginBottom: 8,
    fontFamily: 'Poppins',
  },
  bellBtn: {
    position: 'absolute',
    right: 24,
    top: 16,
    zIndex: 10,
  },
  card: {
    backgroundColor: COLORS.beigeGray,
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
    color: COLORS.greenDark,
    fontFamily: 'Poppins',
  },
  cardSubtitle: {
    color: COLORS.grayText,
    fontSize: 14,
    fontFamily: 'Poppins',
  },
  percent: {
    color: COLORS.greenDark,
    fontWeight: 'bold',
  },
  progressBarBg: {
    height: 8,
    backgroundColor: COLORS.gray,
    borderRadius: 4,
    marginTop: 8,
    marginBottom: 4,
    width: '100%',
  },
  progressBarFill: {
    height: 8,
    backgroundColor: COLORS.green,
    borderRadius: 4,
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 15,
    color: COLORS.greenDark,
    marginTop: 8,
    marginBottom: 4,
    fontFamily: 'Poppins',
  },
  quadrantsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  quadrantCard: {
    backgroundColor: COLORS.beigeGray,
    borderRadius: 10,
    padding: 12,
    width: '48%',
    elevation: 1,
  },
  quadrantTitle: {
    fontWeight: 'bold',
    color: COLORS.greenDark,
    fontSize: 14,
    fontFamily: 'Poppins',
  },
  quadrantSubtitle: {
    color: COLORS.grayText,
    fontSize: 13,
    marginBottom: 4,
    fontFamily: 'Poppins',
  },
  progressBarBgSmall: {
    height: 6,
    backgroundColor: COLORS.gray,
    borderRadius: 3,
    width: '100%',
  },
  progressBarFillSmall: {
    height: 6,
    backgroundColor: COLORS.green,
    borderRadius: 3,
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  actionCard: {
    backgroundColor: COLORS.beigeGray,
    borderRadius: 8,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    elevation: 1,
  },
  actionText: {
    color: COLORS.greenDark,
    fontSize: 14,
    fontFamily: 'Poppins',
  },
  reminderCard: {
    backgroundColor: COLORS.beigeGray,
    borderRadius: 10,
    padding: 14,
    marginTop: 12,
    elevation: 1,
  },
  reminderText: {
    color: COLORS.greenDark,
    fontSize: 13,
    marginTop: 2,
    fontFamily: 'Poppins',
  },
}); 