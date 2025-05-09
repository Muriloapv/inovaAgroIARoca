import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export const Header = ({ title }: { title?: string }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {title ? (
        <Text style={styles.title}>{title}</Text>
      ) : (
        <View style={styles.logoContainer}>
          <Ionicons name="rocket" size={32} color="#27ae60" style={{ marginRight: 8 }} />
          <Text style={styles.logoText}>IA da Roça</Text>
        </View>
      )}
      <TouchableOpacity
        style={styles.profileButton}
        onPress={() => navigation.navigate('Profile' as never)}
      >
        <Ionicons name="person-circle" size={32} color="#27ae60" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#fff',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#27ae60',
    letterSpacing: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  profileButton: {
    padding: 4,
  },
}); 