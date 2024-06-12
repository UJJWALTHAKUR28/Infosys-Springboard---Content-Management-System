import { Server } from 'socket.io';

let io;

export default function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
    return;
  }

  if (io) {
    io.emit('update', req.body);
  }

  res.status(200).json({ status: 'success' });
}

export const config = {
  api: {
    bodyParser: true,
  },
};
export const setupWebSocket = (server) => {
  if (!io) {
    io = new Server(server, {
      cors: {
        origin: "*",
        methods: ["GET", "POST"],
      },
    });

    io.on('connection', (socket) => {
      console.log('A user connected');
      
      socket.on('disconnect', () => {
        console.log('A user disconnected');
      });
    });
  }
};
