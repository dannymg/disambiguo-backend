module.exports = ({ env }) => ({
  settings: {
    cors: {
      origin: ['https://disambiguo-frontend.vercel.app'],
      headers: ['Content-Type', 'Authorization', 'Origin', 'Accept'],
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
      credentials: true,
    },
  },
});
