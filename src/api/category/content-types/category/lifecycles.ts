type LifecycleEvent = {
  params?: {
    data?: Record<string, any>;
  };
};

function sanitizeData(event: LifecycleEvent) {
  const data = event?.params?.data;
  if (!data) return;

  if ('slug' in data) {
    delete data.slug;
  }
  if (typeof data.name === 'string') {
    data.name = data.name.trim();
  }
  if (typeof data.description === 'string') {
    data.description = data.description.trim();
  }
}

export default {
  async beforeCreate(event: LifecycleEvent) {
    sanitizeData(event);
  },

  async beforeUpdate(event: LifecycleEvent) {
    sanitizeData(event);
  },
};