module.exports = ({ env }) => ({
  apiToken: {
    salt: env('API_TOKEN_SALT', '23981f0oede39p5984gcd99mf007aw67y'),
  },
  auth: {
    secret: env('ADMIN_JWT_SECRET', '13101f0ece39b5194bdd79bf597fc67b'),
  },
});
