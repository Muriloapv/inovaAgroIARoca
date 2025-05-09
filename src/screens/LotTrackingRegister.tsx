import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import QRCode from 'react-native-qrcode-svg';

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

const QUADRANTES = [
  'Quadrante A',
  'Quadrante B',
  'Quadrante C',
  'Quadrante D',
];

function generateRandomCode() {
  return Math.random().toString(36).substring(2, 10).toUpperCase();
}

export default function LotTrackingRegister() {
  const [data, setData] = useState({
    plantio: '',
    insumos: '',
    local: '',
    custo: '',
    produtividade: '',
    quadrante: QUADRANTES[0],
  });
  const [showQR, setShowQR] = useState(false);
  const [randomCode, setRandomCode] = useState('');

  const handleChange = (field: string, value: string) => {
    setData({ ...data, [field]: value });
  };

  const handleGenerate = () => {
    const code = generateRandomCode();
    setRandomCode(code);
    setShowQR(true);
  };

  const qrValue = JSON.stringify({ ...data, code: randomCode });

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 32 }}>
      <Text style={styles.header}>Emissão de Código de Rastreio</Text>
      <View style={styles.formCard}>
        <Text style={styles.label}>Quadrante</Text>
        <View style={styles.pickerWrapper}>
          <Picker
            selectedValue={data.quadrante}
            style={styles.picker}
            onValueChange={v => handleChange('quadrante', v)}
          >
            {QUADRANTES.map(q => (
              <Picker.Item key={q} label={q} value={q} />
            ))}
          </Picker>
        </View>
        <Text style={styles.label}>Data de Plantio</Text>
        <TextInput style={styles.input} value={data.plantio} onChangeText={v => handleChange('plantio', v)} placeholder="DD/MM/AAAA" />
        <Text style={styles.label}>Insumos Utilizados</Text>
        <TextInput style={styles.input} value={data.insumos} onChangeText={v => handleChange('insumos', v)} placeholder="Ex: Fertilizante X, Semente Y" />
        <Text style={styles.label}>Local</Text>
        <TextInput style={styles.input} value={data.local} onChangeText={v => handleChange('local', v)} placeholder="Ex: Fazenda Boa Vista" />
        <Text style={styles.label}>Custo</Text>
        <TextInput style={styles.input} value={data.custo} onChangeText={v => handleChange('custo', v)} placeholder="Ex: R$ 500,00" />
        <Text style={styles.label}>Produtividade</Text>
        <TextInput style={styles.input} value={data.produtividade} onChangeText={v => handleChange('produtividade', v)} placeholder="Ex: 1000kg" />
        <TouchableOpacity style={styles.button} onPress={handleGenerate}>
          <Text style={styles.buttonText}>Criar Código e Gerar QRCode</Text>
        </TouchableOpacity>
      </View>
      {showQR && (
        <View style={styles.qrContainer}>
          <Text style={styles.qrLabel}>QRCode do Lote</Text>
          <QRCode value={qrValue} size={180} backgroundColor={COLORS.beigeGray} color={COLORS.greenDark} />
          <Text style={styles.codeLabel}>Código: {randomCode}</Text>
        </View>
      )}
    </ScrollView>
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
  formCard: {
    backgroundColor: COLORS.beigeGray,
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
  },
  label: {
    color: COLORS.greenDark,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 4,
    fontFamily: 'Poppins',
  },
  input: {
    backgroundColor: COLORS.gray,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.brown,
    paddingHorizontal: 12,
    paddingVertical: 8,
    fontSize: 16,
    marginBottom: 6,
    fontFamily: 'Poppins',
  },
  pickerWrapper: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.brown,
    backgroundColor: COLORS.gray,
    marginBottom: 8,
    overflow: 'hidden',
  },
  picker: {
    height: 44,
    width: '100%',
  },
  button: {
    backgroundColor: COLORS.green,
    borderRadius: 12,
    marginTop: 18,
    paddingVertical: 14,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Poppins',
  },
  qrContainer: {
    alignItems: 'center',
    marginTop: 24,
  },
  qrLabel: {
    fontSize: 16,
    color: COLORS.greenDark,
    marginBottom: 12,
    fontFamily: 'Poppins',
  },
  codeLabel: {
    fontSize: 16,
    color: COLORS.greenDark,
    marginTop: 12,
    fontFamily: 'Poppins',
  },
}); 