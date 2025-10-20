export default (config, { strapi }) => {
  return async (ctx, next) => {
    await next();

    if (ctx.path.startsWith('/api/')) {
      ctx.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
      ctx.set('Pragma', 'no-cache');
      ctx.set('Expires', '0');
      return;
    }


    if (ctx.path.startsWith('/admin') || ctx.path.startsWith('/content-manager')) {
      ctx.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
      ctx.set('Pragma', 'no-cache');
      ctx.set('Expires', '0');
    }
  };
};