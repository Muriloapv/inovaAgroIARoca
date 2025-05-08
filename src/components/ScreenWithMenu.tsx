import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ScreenMenu } from './ScreenMenu';

export const ScreenWithMenu = (WrappedComponent: React.ComponentType<any>) => {
  return (props: any) => (
    <View style={styles.container}>
      <WrappedComponent {...props} />
      <ScreenMenu />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
}); 