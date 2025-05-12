// src/screens/ModesScreen.js

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import IconButton from '../components/IconButton';
import Icon from 'react-native-vector-icons/Ionicons';

const ModesScreen = ({ navigation }) => {
  const modes = [
    { id: 'meal', name: 'Yemek', color: 'rgb(255, 200, 100)' }, // Sıcak sarı tonu
    { id: 'sleep', name: 'Uyku', color: 'rgb(100, 100, 255)' }, // Mavi tonu
    { id: 'study', name: 'Ders', color: 'rgb(255, 255, 100)' }, // Beyaz/sarı
  ];

  const handleModeSelect = (mode) => {
    console.log(`${mode.name} moduna geçiliyor. Renk: ${mode.color}`);
    navigation.goBack(); // Seçtikten sonra anasayfaya döner
  };

  return (
    <View style={styles.container}>
      {/* Anasayfa Butonu */}
      <IconButton icon="arrow-back" label="Anasayfa" onPress={() => navigation.navigate('Home')} />

      {/* Modlar Başlık */}
      <Text style={styles.title}>Hazır Aydınlatma Modları</Text>

      {/* Modlar Listesi */}
      <View style={styles.modesContainer}>
        {modes.map((mode) => (
          <TouchableOpacity
            key={mode.id}
            style={[styles.modeCard, { backgroundColor: mode.color }]}
            onPress={() => handleModeSelect(mode)}
          >
            <Text style={styles.modeText}>{mode.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 20,
    marginBottom: 10,
  },
  modesContainer: {
    flex: 1,
  },
  modeCard: {
    padding: 20,
    marginVertical: 10,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#fff',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  modeText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ModesScreen;