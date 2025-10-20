function slugify(input: string): string {
  return input
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .trim();
}

async function ensureUniqueSlug(base: string, excludeId?: number): Promise<string> {
  let candidate = base;
  let suffix = 1;

  const exists = async (slug: string) => {
    const filters: any = { slug: { $eq: slug } };
    if (excludeId) filters.id = { $ne: excludeId };

    const found = await strapi.entityService.findMany('api::post.post', {
      filters,
      limit: 1,
      fields: ['id'],
    });
    return Array.isArray(found) && found.length > 0;
  };

  while (await exists(candidate)) {
    suffix += 1;
    candidate = `${base}-${suffix}`;
  }

  return candidate;
}

function sanitizeData(data: any) {
  if (!data || typeof data !== 'object') return;
  if (typeof data.title === 'string') data.title = data.title.trim();
  if (typeof data.description === 'string') data.description = data.description.trim();
  if (typeof data.author === 'string') data.author = data.author.trim();
  if (typeof data.slug === 'string') data.slug = data.slug.trim();
}

export default {
  async beforeCreate(event) {
    const data = event?.params?.data ?? {};
    sanitizeData(data);

    const hasSlug =
      typeof data.slug === 'string' && data.slug.trim().length > 0;

    if (hasSlug) {
      data.slug = await ensureUniqueSlug(slugify(data.slug));
      return;
    }

    if (typeof data.title === 'string' && data.title.trim().length > 0) {
      const base = slugify(data.title);
      data.slug = await ensureUniqueSlug(base);
    }
  },

  async beforeUpdate(event) {
    const data = event?.params?.data ?? {};
    const id = event?.params?.where?.id;
    sanitizeData(data);

    const hasSlug =
      typeof data.slug === 'string' && data.slug.trim().length > 0;

    if (hasSlug) {
      data.slug = await ensureUniqueSlug(slugify(data.slug), id);
      return;
    }

    if (typeof data.title === 'string' && data.title.trim().length > 0) {
      const base = slugify(data.title);
      data.slug = await ensureUniqueSlug(base, id);
    }
  },
};