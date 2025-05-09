import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

interface HeaderProps {
  title?: string;
  type?: 'full' | 'simple';
}

export const Header = ({ title, type = 'full' }: HeaderProps) => {
  const navigation = useNavigation();

  return (
    <>
      {/* Barra superior só se type for 'full' */}
      {type === 'full' && (
        <View style={styles.topBar}>
          {/* Botão/Menu à esquerda */}
          <TouchableOpacity style={styles.menuButton} onPress={() => {}}>
            <Ionicons name="menu" size={36} color="#27ae60" />
          </TouchableOpacity>

          {/* Logo centralizada */}
          <View style={styles.centerContainer}>
            <Image 
              source={require('../assets/images/logo.png')} 
              style={styles.logo}
              resizeMode="contain"
            />
          </View>

          {/* Ícone de perfil à direita */}
          <TouchableOpacity
            style={styles.profileButton}
            onPress={() => navigation.navigate('Profile' as never)}
          >
            <Ionicons name="person-circle" size={36} color="#27ae60" />
          </TouchableOpacity>
        </View>
      )}

      {/* Barra inferior: seta de voltar e nome da página */}
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={28} color="#27ae60" />
        </TouchableOpacity>
        <Text style={styles.pageTitle}>{title || ''}</Text>
        <View style={{ width: 36 }} /> {/* Espaço para alinhar o título centralizado */}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: '#fff',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  menuButton: {
    width: 40,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  centerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  logo: {
    width: 56,
    height: 56,
  },
  profileButton: {
    width: 40,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  bottomBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#ededed',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  backButton: {
    width: 36,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  pageTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    color: '#222',
  },
}); 