/**
 * post controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::post.post', ({ strapi }) => ({
  async create(ctx) {
    if (!ctx.request.body) ctx.request.body = {};
    if (!ctx.request.body.data) ctx.request.body.data = {};
    const data = ctx.request.body.data;

    const user = ctx.state?.user;
    if (user) {
      const authorName =
        user.username ||
        [user.firstname, user.lastname].filter(Boolean).join(' ') ||
        user.email;
      if (authorName) {
        data.author = authorName;
      }
    }

    const response = await super.create(ctx);
    return response;
  },
}));
