// src/screens/ModesScreen.js

import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import IconButton from '../components/IconButton';
import Icon from 'react-native-vector-icons/Ionicons';
import io from 'socket.io-client';

const BACKEND_SOCKET_URL = 'http://<YOUR_BACKEND_IP>:5001'; // Replace with your Flask SocketIO endpoint

const ModesScreen = ({ navigation }) => {
  const [socket, setSocket] = useState(null);

  // Define available modes
  const modes = [
    { id: 'meal', name: 'Yemek', color: 'rgb(255, 200, 100)' }, // Warm yellow
    { id: 'sleep', name: 'Uyku', color: 'rgb(100, 100, 255)' },  // Blue tone
    { id: 'study', name: 'Ders', color: 'rgb(255, 255, 100)' },  // White-yellow
  ];

  // Establish a Socket.IO connection when the component mounts:
  useEffect(() => {
    const newSocket = io(BACKEND_SOCKET_URL);

    newSocket.on('connect', () => {
      console.log('Connected to Socket.IO server from ModesScreen');
    });

    // Optional: listen for confirmation or additional events.
    newSocket.on('mode_update_confirm', (data) => {
      console.log('Mode update confirmed:', data);
    });

    setSocket(newSocket);

    // Clean up on component unmount
    return () => newSocket.disconnect();
  }, []);

  // When user selects a mode, send a WebSocket event to the backend and go back
  const handleModeSelect = (mode) => {
    console.log(`${mode.name} moduna geçiliyor. Renk: ${mode.color}`);
    if (socket) {
      socket.emit('mode_update', {
        mode_id: mode.id,
        mode_name: mode.name,
        mode_color: mode.color,
        timestamp: new Date().toISOString(),
      });
    } else {
      console.log('No socket connection');
    }
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {/* Home Button */}
      <IconButton icon="arrow-back" label="Anasayfa" onPress={() => navigation.navigate('Home')} />

      {/* Title */}
      <Text style={styles.title}>Hazır Aydınlatma Modları</Text>

      {/* Mode List */}
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

export default ModesScreen;

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
