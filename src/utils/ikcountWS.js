import { io } from 'socket.io-client';

const socketUrl = `${import.meta.env.VITE_APP_IKCOUNT_API_URL}/live`;
export const socket = io(socketUrl, {
  transports: ['websocket', 'polling'],
  query: {
    atoken:
      'Z2lvdmFubmkubm9jZXRpLmRlbW86QVBJX0tFWUA0MWZmNGU0Zjc3NDM3MTIyMmY5Zjc2ZmIzYTE3Y2UyMDJjMTgwNzgwZjNkOGZhY2U4YzVlY2M1MTQ2YWI3ODYyNWMyY2M5NTdlNGYyMDQxNTdlMzk1YTg1ZDQyZTY3ODJhNWZlNDljODQ2YzI0YzVhYmJkZTUzM2I4NDE5NDZkYzpJS0xBQjAwNQ==',
  },
});
