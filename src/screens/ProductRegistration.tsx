import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Input, Button, Text } from '@rneui/themed';

interface Product {
  name: string;
  unitValue: string;
}

export const ProductRegistration = () => {
  const [product, setProduct] = useState<Product>({
    name: '',
    unitValue: '',
  });

  const handleSave = () => {
    // Aqui será implementada a lógica de salvamento
    console.log('Produto:', product);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text h4 style={styles.title}>
          Cadastro de Produto
        </Text>

        <Input
          label="Nome do Produto"
          placeholder="Digite o nome do produto"
          value={product.name}
          onChangeText={(text) => setProduct({ ...product, name: text })}
          containerStyle={styles.input}
        />

        <Input
          label="Valor Unitário"
          placeholder="R$ 0,00"
          value={product.unitValue}
          onChangeText={(text) => setProduct({ ...product, unitValue: text })}
          keyboardType="numeric"
          containerStyle={styles.input}
        />

        <Button
          title="Salvar"
          onPress={handleSave}
          containerStyle={styles.buttonContainer}
          buttonStyle={styles.button}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    padding: 20,
  },
  title: {
    textAlign: 'center',
    marginBottom: 30,
    color: '#2c3e50',
  },
  input: {
    marginBottom: 15,
  },
  buttonContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: '#27ae60',
    borderRadius: 8,
    paddingVertical: 12,
  },
}); 