export default ({ env }) => {
  console.log('ADMIN_JWT_SECRET:', env('ADMIN_JWT_SECRET') ? 'Found' : 'Missing');
  return {
    auth: {
      secret: env('ADMIN_JWT_SECRET') || 'DznXVuuSwARmxnbE34slmg==',
    },
    apiToken: {
      salt: env('API_TOKEN_SALT'),
    },
    transfer: {
      token: {
        salt: env('TRANSFER_TOKEN_SALT'),
      },
    },
    secrets: {
      encryptionKey: env('ENCRYPTION_KEY'),
    },
    flags: {
      nps: env.bool('FLAG_NPS', true),
      promoteEE: env.bool('FLAG_PROMOTE_EE', true),
    },
  };
};
