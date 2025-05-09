import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ScreenMenu } from './ScreenMenu';
import { Header } from './Header';
import { useRoute } from '@react-navigation/native';

export const ScreenWithMenu = (WrappedComponent: React.ComponentType<any>) => {
  return (props: any) => {
    const route = useRoute();
    return (
      <View style={styles.container}>
        <Header title={route.name !== 'Home' ? route.name : undefined} />
        <WrappedComponent {...props} />
        <ScreenMenu />
      </View>
    );
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
}); 