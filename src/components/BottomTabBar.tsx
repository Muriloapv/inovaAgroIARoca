import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Animated, Text, Platform, ScrollView } from 'react-native';
import { Ionicons, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';

// Paleta de cores do projeto
const COLORS = {
  green: '#4CAF50', // Verde Folha
  greenLight: '#DDEDDC', // Verde Claro Pastel
  greenDark: '#2E7D32', // Verde Escuro Acinzentado
  beige: '#FDF6EC', // Bege Areia
  brown: '#A1887F', // Marrom Claro
  beigeGray: '#E0D9CC', // Bege Cinzento
  yellow: '#FFEB3B', // Amarelo Agrícola
  yellowPastel: '#FFF8DC', // Amarelo Pastel
  gray: '#F5F5F5', // Cinza Claro UI
  grayText: '#757575', // Cinza Texto Neutro
};

const MENU_ITEMS = [
  { name: 'Início', icon: 'home', screen: 'Home' },
  { name: 'Produtos', icon: 'leaf', screen: 'ProductList' },
  { name: 'Plano de Manejo', icon: 'clipboard', screen: 'ManagementDashboard' },
  { name: 'Perfil', icon: 'person', screen: 'Profile' },
  { name: 'Sugestão de Plantio', icon: 'leaf', screen: 'PlantingSuggestion' },
  { name: 'Previsão de Demanda', icon: 'trending-up', screen: 'DemandForecast' },
  { name: 'Caderno de Campo', icon: 'book', screen: 'FarmNotebook' },
  { name: 'Emissão de Nota', icon: 'document-text', screen: 'InvoiceEmission' },
  { name: 'AgroZap Chat', icon: 'chatbubbles', screen: 'AgroZapChat' },
  { name: 'Custo de Gestão', icon: 'calculator', screen: 'ManagementCost' },
  { name: 'Movimento de Produtos', icon: 'swap-horizontal', screen: 'ProductMovement' },
  { name: 'Detalhe do Quadrante', icon: 'grid', screen: 'QuadrantDetail' },
  { name: 'Planos de Gestão', icon: 'clipboard', screen: 'ManagementPlans' },
  { name: 'Resumo Diário', icon: 'calendar', screen: 'DailySummary' },
  { name: 'Cadastro de Produtos', icon: 'add-circle', screen: 'ProductRegistration' },
];

export const BottomTabBar = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [animation] = useState(new Animated.Value(0));

  // Função para animar o menu
  const toggleMenu = () => {
    const toValue = isMenuOpen ? 0 : 1;
    Animated.spring(animation, {
      toValue,
      friction: 5,
      useNativeDriver: true,
    }).start();
    setIsMenuOpen(!isMenuOpen);
  };

  // Função para navegação
  const goTo = (screen: string) => {
    setIsMenuOpen(false);
    navigation.navigate(screen as never);
  };

  // Função para cadastrar novo item
  const openAddMenu = () => {
    goTo('ProductRegistration');
  };

  // Definir qual aba está ativa
  const current = route.name;

  return (
    <View style={styles.container}>
      {/* Home */}
      <TouchableOpacity style={styles.tabButton} onPress={() => goTo('Home')}>
        <Ionicons name="home" size={28} color={current === 'Home' ? COLORS.green : COLORS.grayText} />
      </TouchableOpacity>

      {/* Emissão */}
      <TouchableOpacity style={styles.tabButton} onPress={() => goTo('InvoiceEmission')}>
        <MaterialCommunityIcons name="file-document-outline" size={28} color={current === 'InvoiceEmission' ? COLORS.green : COLORS.grayText} />
      </TouchableOpacity>

      {/* Botão central destacado (menu flutuante) */}
      <View style={styles.fabWrapper}>
        {isMenuOpen && (
          <View style={styles.menuContainer}>
            <ScrollView style={styles.menuScroll} contentContainerStyle={{ paddingVertical: 8 }}>
              {MENU_ITEMS.map((item, idx) => (
                <TouchableOpacity
                  key={item.name}
                  style={styles.menuItemRow}
                  onPress={() => goTo(item.screen)}
                >
                  <View style={styles.menuIconCircle}>
                    <Ionicons name={item.icon as any} size={22} color="#fff" />
                  </View>
                  <Text style={styles.menuItemText}>{item.name}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        )}
        <TouchableOpacity style={styles.fabButton} onPress={toggleMenu}>
          <Ionicons name={isMenuOpen ? 'close' : 'menu'} size={36} color={COLORS.green} />
        </TouchableOpacity>
      </View>

      {/* Novo botão + */}
      <TouchableOpacity style={styles.tabButton} onPress={openAddMenu}>
        <AntDesign name="pluscircleo" size={28} color={COLORS.grayText} />
      </TouchableOpacity>

      {/* Perfil */}
      <TouchableOpacity style={styles.tabButton} onPress={() => goTo('Profile')}>
        <Ionicons name="person" size={28} color={current === 'Profile' ? COLORS.green : COLORS.grayText} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: COLORS.beige,
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
  fabWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    top: -32,
    zIndex: 200,
  },
  fabButton: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: COLORS.greenDark,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
  menuContainer: {
    position: 'absolute',
    bottom: 80,
    backgroundColor: COLORS.beigeGray,
    borderRadius: 16,
    padding: 12,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 3.84,
    minWidth: 220,
    maxHeight: 320,
    overflow: 'hidden',
  },
  menuScroll: {
    maxHeight: 296,
  },
  menuItemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    paddingRight: 8,
    paddingLeft: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  menuIconCircle: {
    backgroundColor: COLORS.green,
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  menuItemText: {
    color: COLORS.greenDark,
    fontSize: 16,
    fontWeight: '500',
    fontFamily: Platform.OS === 'ios' ? 'Poppins' : 'Poppins-Regular',
  },
}); 