import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';

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

export default function LotTrackingRegister() {
  const [data, setData] = useState({
    quadrante: QUADRANTES[0],
    insumos: '',
    plantio: '',
    colheita: '',
  });
  const [showQR, setShowQR] = useState(false);

  const handleChange = (field: string, value: string) => {
    setData({ ...data, [field]: value });
  };

  const handleGenerate = () => {
    setShowQR(true);
  };

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
        <Text style={styles.label}>Insumos Utilizados</Text>
        <TextInput style={styles.input} value={data.insumos} onChangeText={v => handleChange('insumos', v)} placeholder="Ex: Fertilizante X, Semente Y" />
        <Text style={styles.label}>Data de Plantio</Text>
        <TextInput style={styles.input} value={data.plantio} onChangeText={v => handleChange('plantio', v)} placeholder="DD/MM/AAAA" />
        <Text style={styles.label}>Data de Colheita</Text>
        <TextInput style={styles.input} value={data.colheita} onChangeText={v => handleChange('colheita', v)} placeholder="DD/MM/AAAA" />
        <TouchableOpacity style={styles.button} onPress={handleGenerate}>
          <Text style={styles.buttonText}>Gerar</Text>
        </TouchableOpacity>
      </View>
      {showQR && (
        <View style={styles.qrContainer}>
          <Text style={styles.qrLabel}>QRCode do Lote</Text>
          <Image source={require('../assets/images/qrcode.png')} style={styles.qrImage} resizeMode="contain" />
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
  qrImage: {
    width: 180,
    height: 180,
  },
}); 