
declare module '@strapi/strapi' {
  export const factories: {
    createCoreController(uid: string, controller?: unknown): unknown;
    createCoreRouter(uid: string, router?: unknown): unknown;
    createCoreService(uid: string, service?: unknown): unknown;
  };
}