import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Header } from './Header';
import { BottomTabBar } from './BottomTabBar';
import { useRoute } from '@react-navigation/native';

export const ScreenWithMenu = (WrappedComponent: React.ComponentType<any>) => {
  return (props: any) => {
    const route = useRoute();
    const isHome = route.name === 'Home';
    return (
      <View style={styles.container}>
        {/* Header completo só na Home */}
        {isHome && <Header type="full" title={route.name} />}
        {/* Conteúdo full */}
        <View style={styles.contentWrapper}>
          <WrappedComponent {...props} />
        </View>
        {/* Barra inferior só nas demais telas */}
        {!isHome && <BottomTabBar />}
      </View>
    );
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentWrapper: {
    flex: 1,
    paddingBottom: 72, // espaço para a barra inferior
  },
}); 