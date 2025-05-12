// src/screens/HomeScreen.js

import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Slider from '@react-native-community/slider';
import ColorCircle from '../components/ColorCircle';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeScreen = ({ navigation }) => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  const [brightness, setBrightness] = useState(1);
  const [lightOn, setLightOn] = useState(false);

  const color = `rgb(${Math.round(red * 255)}, ${Math.round(green * 255)}, ${Math.round(blue * 255)})`;

  const toggleLight = (on) => {
    setLightOn(on);
    console.log(on ? 'Işık açıldı' : 'Işık kapatıldı');
  };

  return (
    <View style={styles.container}>
      {/* Başlık ve Renk Dairesi */}
      <View>
        <Text style={styles.title}>Akıllı Aydınlatma</Text>
        <ColorCircle color={color} brightness={brightness} />
      </View>

      {/* Renk ve Parlaklık Sliderları */}
      <View style={styles.slidersContainer}>
        {/* Kırmızı Renk Ayarı */}
        <View style={styles.sliderRow}>
          <View style={[styles.colorBox, { backgroundColor: 'red' }]} />
          <Slider
            style={styles.slider}
            value={red}
            minimumValue={0}
            maximumValue={1}
            minimumTrackTintColor="red"
            onValueChange={setRed}
          />
        </View>

        {/* Yeşil Renk Ayarı */}
        <View style={styles.sliderRow}>
          <View style={[styles.colorBox, { backgroundColor: 'green' }]} />
          <Slider
            style={styles.slider}
            value={green}
            minimumValue={0}
            maximumValue={1}
            minimumTrackTintColor="green"
            onValueChange={setGreen}
          />
        </View>

        {/* Mavi Renk Ayarı */}
        <View style={styles.sliderRow}>
          <View style={[styles.colorBox, { backgroundColor: 'blue' }]} />
          <Slider
            style={styles.slider}
            value={blue}
            minimumValue={0}
            maximumValue={1}
            minimumTrackTintColor="blue"
            onValueChange={setBlue}
          />
        </View>

        {/* Parlaklık Ayarı */}
        <View style={styles.brightnessRow}>
          <Icon name="sunny" size={24} color="#fff" style={{ marginRight: 10 }} />
          <Slider
            style={{ flex: 1 }}
            value={brightness}
            minimumValue={0}
            maximumValue={1}
            minimumTrackTintColor="#fff"
            onValueChange={setBrightness}
          />
        </View>
      </View>

      {/* Işık Kontrol Butonları */}
      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#4caf50' }]}
          onPress={() => toggleLight(true)}
        >
          <Text style={styles.buttonText}>Aç</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#f44336' }]}
          onPress={() => toggleLight(false)}
        >
          <Text style={styles.buttonText}>Kapat</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#2196f3' }]}
          onPress={() => navigation.navigate('Modlar')}
        >
          <Text style={styles.buttonText}>Modlar</Text>
        </TouchableOpacity>
      </View>

      {/* Mod Oluştur Butonu */}
      <TouchableOpacity
        style={[styles.mediumButton, { backgroundColor: 'orange' }]}
        onPress={() => console.log('Mod Oluştur butonuna basıldı')}
      >
        <Text style={styles.mediumButtonText}>Mod Oluştur</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    padding: 20,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 10,
    marginTop: 20,
    textAlign: 'center',
  },
  slidersContainer: {
    justifyContent: 'center',
  },
  sliderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  colorBox: {
    width: 30,
    height: 30,
    borderRadius: 100,
    marginRight: 15,
  },
  slider: {
    flex: 1,
  },
  brightnessRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  button: {
    flex: 1,
    marginHorizontal: 5,
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  mediumButton: {
    alignSelf: 'center',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 10,
    marginBottom: 40,
  },
  mediumButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});