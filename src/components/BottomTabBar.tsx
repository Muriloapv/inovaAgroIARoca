import React from 'react';
import { View, TouchableOpacity, StyleSheet, ActionSheetIOS, Platform } from 'react-native';
import { Ionicons, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import { useNavigation, useRoute, DrawerActions } from '@react-navigation/native';

export const BottomTabBar = () => {
  const navigation = useNavigation();
  const route = useRoute();

  // Função para abrir o menu hambúrguer (drawer)
  const openCategoryMenu = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  // Função para abrir o menu de emissão
  const openEmissionMenu = () => {
    alert('Opções: Emitir NFe ou QRCode');
  };

  // Função para cadastrar novo item
  const openAddMenu = () => {
    if (Platform.OS === 'ios') {
      ActionSheetIOS.showActionSheetWithOptions({
        options: ['Cancelar', 'Cadastrar Produto', 'Cadastrar Categoria'],
        cancelButtonIndex: 0,
      }, (buttonIndex) => {
        if (buttonIndex === 1) navigation.navigate('ProductRegistration' as never);
        if (buttonIndex === 2) alert('Cadastrar Categoria');
      });
    } else {
      // Para Android, pode usar um modal ou alert simples
      alert('Cadastrar novo item: Produto ou Categoria');
    }
  };

  // Função para navegação
  const goTo = (screen: string) => {
    navigation.navigate(screen as never);
  };

  // Definir qual aba está ativa
  const current = route.name;

  return (
    <View style={styles.container}>
      {/* Home */}
      <TouchableOpacity style={styles.tabButton} onPress={() => goTo('Home')}>
        <Ionicons name="home" size={28} color={current === 'Home' ? '#27ae60' : '#888'} />
      </TouchableOpacity>

      {/* Emissão */}
      <TouchableOpacity style={styles.tabButton} onPress={openEmissionMenu}>
        <MaterialCommunityIcons name="file-document-outline" size={28} color={current === 'Emission' ? '#27ae60' : '#888'} />
      </TouchableOpacity>

      {/* Botão central destacado (menu hambúrguer) */}
      <TouchableOpacity style={styles.fabButton} onPress={openCategoryMenu}>
        <Ionicons name="menu" size={36} color="#bada55" />
      </TouchableOpacity>

      {/* Novo botão + */}
      <TouchableOpacity style={styles.tabButton} onPress={openAddMenu}>
        <AntDesign name="pluscircleo" size={28} color={current === 'Add' ? '#27ae60' : '#888'} />
      </TouchableOpacity>

      {/* Perfil */}
      <TouchableOpacity style={styles.tabButton} onPress={() => goTo('Profile')}>
        <Ionicons name="person" size={28} color={current === 'Profile' ? '#27ae60' : '#888'} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    paddingVertical: 8,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 64,
    zIndex: 100,
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 56,
  },
  fabButton: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#222',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -32,
    elevation: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
}); 