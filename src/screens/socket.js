// socket.js
import io from 'socket.io-client';

// Replace '192.168.1.100' with your backend's actual IP address.
const BACKEND_SOCKET_URL = 'http://192.168.1.100:5001';

const socket = io(BACKEND_SOCKET_URL, {
  transports: ['websocket'], // This ensures WebSocket connections.
  // You can add other configuration options here if needed.
});

socket.on('connect', () => {
  console.log('Socket connected:', socket.id);
});

socket.on('disconnect', () => {
  console.log('Socket disconnected');
});

// Optional: You can register other global event handlers here if desired.
// For example:
// socket.on('error', (error) => {
//   console.error('Socket error:', error);
// });

export default socket;
