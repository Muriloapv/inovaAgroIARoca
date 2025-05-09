import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  ScrollView, 
  RefreshControl,
  Platform,
  Dimensions,
  SafeAreaView
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { StackNavigationProp } from '@react-navigation/stack';

// Organize menu items by categories for better organization
const menuItems = [
  { 
    name: 'Produtos', 
    icon: 'leaf', 
    screen: 'ProductList', 
    color: '#2196F3',
    description: 'Gerenciar produtos'
  },
  { 
    name: 'Plano de Manejo', 
    icon: 'clipboard', 
    screen: 'ManagementDashboard', 
    color: '#4CAF50',
    description: 'Planejar manejo'
  },
  { 
    name: 'Sugestão de Plantio', 
    icon: 'leaf', 
    screen: 'PlantingSuggestion', 
    color: '#8D6E63',
    description: 'Dicas de plantio'
  },
  { 
    name: 'Previsão de Demanda', 
    icon: 'trending-up', 
    screen: 'DemandForecast', 
    color: '#FF9800',
    description: 'Ver demandas'
  },
  { 
    name: 'Caderno de Campo', 
    icon: 'book', 
    screen: 'FarmNotebook', 
    color: '#795548',
    description: 'Anotações'
  },
  { 
    name: 'Emissão de Nota', 
    icon: 'document-text', 
    screen: 'InvoiceEmission', 
    color: '#607D8B',
    description: 'Emitir notas'
  },
  { 
    name: 'AgroZap Chat', 
    icon: 'chatbubbles', 
    screen: 'AgroZapChat', 
    color: '#00BCD4',
    description: 'Conversar'
  },
  { 
    name: 'Custo de Gestão', 
    icon: 'calculator', 
    screen: 'ManagementCost', 
    color: '#388E3C',
    description: 'Ver custos'
  },
  { 
    name: 'Movimento de Produtos', 
    icon: 'swap-horizontal', 
    screen: 'ProductMovement', 
    color: '#FFA726',
    description: 'Movimentações'
  },
  { 
    name: 'Detalhe do Quadrante', 
    icon: 'grid', 
    screen: 'QuadrantDetail', 
    color: '#F44336',
    description: 'Ver quadrantes'
  },
  { 
    name: 'Planos de Gestão', 
    icon: 'clipboard', 
    screen: 'ManagementPlans', 
    color: '#607D8B',
    description: 'Planejar gestão'
  },
  { 
    name: 'Resumo Diário', 
    icon: 'calendar', 
    screen: 'DailySummary', 
    color: '#009688',
    description: 'Ver resumo'
  },
  { 
    name: 'Cadastro de Produtos', 
    icon: 'add-circle', 
    screen: 'ProductRegistration', 
    color: '#AB47BC',
    description: 'Cadastrar'
  },
];

type RootStackParamList = { [key: string]: undefined };
type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList>;

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

export const Home = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const route = useRoute();
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.mainContainer}>
        <ScrollView 
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={true}
          overScrollMode="always"
          bounces={true}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              colors={['#27ae60']}
              tintColor="#27ae60"
              title="Puxe para atualizar"
              titleColor="#666666"
            />
          }
          decelerationRate="normal"
          scrollEventThrottle={16}
        >
          <View style={styles.welcomeSection}>
            <Text style={styles.welcomeText}>Bem-vindo ao IA da Roça</Text>
            <Text style={styles.welcomeSubtext}>Selecione uma opção abaixo:</Text>
          </View>
          <View style={styles.gridWrapper}>
            <View style={styles.grid}>
              {menuItems.map((item, index) => (
                <TouchableOpacity
                  key={item.name}
                  style={[styles.square, { backgroundColor: item.color }]}
                  onPress={() => navigation.navigate(item.screen as any)}
                  activeOpacity={0.8}
                >
                  <View style={styles.squareContent}>
                    <View style={styles.iconContainer}>
                      <Ionicons
                        name={item.icon as any}
                        size={36}
                        color="#FFFFFF"
                        style={styles.squareIcon}
                      />
                    </View>
                    <Text style={styles.squareTitle}>{item.name}</Text>
                    <Text style={styles.squareDescription}>{item.description}</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const { width, height } = Dimensions.get('window');
const squareWidth = (width - 48) / 2;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  mainContainer: {
    flex: 1,
    height: height,
    backgroundColor: '#f5f5f5',
    overflow: 'hidden',
  },
  scrollView: {
    flex: 1,
    height: height,
  },
  scrollContent: {
    flexGrow: 1,
    paddingVertical: 16,
    paddingBottom: Platform.OS === 'ios' ? 100 : 80,
    minHeight: height + 1, // Force scrollable content
  },
  welcomeSection: {
    paddingHorizontal: 20,
    paddingBottom: 24,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
    textAlign: 'center',
    marginBottom: 8,
  },
  welcomeSubtext: {
    fontSize: 18,
    color: '#666666',
    textAlign: 'center',
  },
  gridWrapper: {
    paddingHorizontal: 12,
    flexGrow: 1,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  square: {
    width: squareWidth,
    aspectRatio: 1,
    marginBottom: 20,
    borderRadius: 16,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  squareContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: 'rgba(255,255,255,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  squareIcon: {
    marginBottom: 0,
  },
  squareTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 24,
    paddingHorizontal: 4,
    marginBottom: 4,
  },
  squareDescription: {
    color: 'rgba(255,255,255,0.9)',
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 18,
  },
}); 