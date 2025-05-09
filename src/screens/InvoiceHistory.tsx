import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

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

const mockData = [
  { id: '1', numero: 'NF-001', data: '10/05/2024', valor: 'R$ 1.200,00', destinatario: 'Mercado Rural' },
  { id: '2', numero: 'NF-002', data: '12/05/2024', valor: 'R$ 800,00', destinatario: 'Feira Local' },
];

export default function InvoiceHistory() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Histórico de Notas Fiscais</Text>
      <FlatList
        data={mockData}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.title}>{item.numero}</Text>
            <Text style={styles.detail}>Data: {item.data}</Text>
            <Text style={styles.detail}>Valor: {item.valor}</Text>
            <Text style={styles.detail}>Destinatário: {item.destinatario}</Text>
          </View>
        )}
      />
    </View>
  );
}

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
    marginBottom: 16,
    fontFamily: 'Poppins',
  },
  card: {
    backgroundColor: COLORS.beigeGray,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.greenDark,
    fontFamily: 'Poppins',
  },
  detail: {
    fontSize: 15,
    color: COLORS.grayText,
    fontFamily: 'Poppins',
  },
}); 