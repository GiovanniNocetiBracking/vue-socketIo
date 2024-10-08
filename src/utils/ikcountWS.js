import { io } from 'socket.io-client';

const socketUrl = `${import.meta.env.VITE_APP_IKCOUNT_API_URL}/live`;
export const socket = io(socketUrl, {
  transports: ['websocket', 'polling'],
  query: {
    atoken: import.meta.env.VITE_APP_IKCOUNT_ATOKEN,
  },
  autoConnect: false,
});
