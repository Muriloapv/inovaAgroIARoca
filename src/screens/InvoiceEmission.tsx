import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default function InvoiceEmission() {
  const [name, setName] = useState('Murilo Gomes');
  const [recipient, setRecipient] = useState('');
  const [product, setProduct] = useState('');
  const [notes, setNotes] = useState('');

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <FontAwesome5 name="file-invoice" size={22} color="#357a38" style={{ marginRight: 8 }} />
        <Text style={styles.headerTitle}>Emissão de Nota Fiscal</Text>
      </View>
      <View style={styles.formCard}>
        <Text style={styles.label}>Emitir Nota</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
        />
        <Text style={styles.label}>Destinatário</Text>
        <TextInput
          style={styles.input}
          value={recipient}
          onChangeText={setRecipient}
          placeholder="Selecionar"
        />
        <Text style={styles.label}>Produtos</Text>
        <TextInput
          style={styles.input}
          value={product}
          onChangeText={setProduct}
          placeholder="Selecionar"
        />
        <Text style={styles.label}>Observações</Text>
        <TextInput
          style={[styles.input, { height: 60 }]}
          value={notes}
          onChangeText={setNotes}
          placeholder=""
          multiline
        />
        <TouchableOpacity style={styles.emitBtn}>
          <Text style={styles.emitBtnText}>Emitir</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.pdfBtn}>
        <Text style={styles.pdfBtnText}>Exportar PDF</Text>
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
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 20,
    marginLeft: 20,
  },
  headerTitle: {
    color: '#357a38',
    fontSize: 22,
    fontWeight: 'bold',
  },
  formCard: {
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
  label: {
    color: '#234d20',
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 4,
  },
  input: {
    backgroundColor: '#f9f7f2',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    paddingHorizontal: 12,
    paddingVertical: 8,
    fontSize: 16,
    marginBottom: 6,
  },
  emitBtn: {
    backgroundColor: '#357a38',
    borderRadius: 12,
    marginTop: 18,
    paddingVertical: 14,
    alignItems: 'center',
  },
  emitBtnText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  pdfBtn: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginHorizontal: 40,
    paddingVertical: 14,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#357a38',
    marginBottom: 30,
  },
  pdfBtnText: {
    color: '#357a38',
    fontSize: 16,
    fontWeight: 'bold',
  },
}); 