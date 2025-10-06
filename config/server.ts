export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS') || [
      'VkXrt5QOWL2XSmODS6P54Q==',
      '3sKRpfaY1Uw8ebrgKfc2Sw==',
      'K7gSzqrx3K+OLGiKTSEzlA==',
      'Bo3kqvxxBF6piBkPi3Sl7Q=='
    ],
  },
});
