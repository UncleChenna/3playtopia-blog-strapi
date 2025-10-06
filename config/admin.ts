export default ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET') || 'DznXVuuSwARmxnbE34slmg==',
  },
  apiToken: {
    salt: env('API_TOKEN_SALT') || 'kV5eNZKlfFEgUs6CEmCbzg==',
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT') || '6ItGte3MTy6gzCTjlkBxww==',
    },
  },
  secrets: {
    encryptionKey: env('ENCRYPTION_KEY') || 'u6MFmpiOic52fGKfTvNUYA==',
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});
