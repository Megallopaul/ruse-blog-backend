module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '13101f0ece39b5194bdd79bf597fc67b'),
  },
});
