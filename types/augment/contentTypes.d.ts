
declare module '@strapi/strapi' {
  export module Public {
    export interface ContentTypeSchemas {
      'api::category.category': {
        collectionName: 'categories';
        info: {
          displayName: 'Category';
          singularName: 'category';
          pluralName: 'categories';
        };
        options: unknown;
        attributes: Record<string, unknown>;
      };
      'api::tag.tag': {
        collectionName: 'tags';
        info: {
          displayName: 'Tag';
          singularName: 'tag';
          pluralName: 'tags';
        };
        options: unknown;
        attributes: Record<string, unknown>;
      };
    }
  }
}