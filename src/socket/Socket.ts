import { io } from "socket.io-client"
const url = import.meta.env.VITE_SERVER_URL;
export const Socket = io(url)