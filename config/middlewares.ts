export default [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',

  {
    name: 'strapi::query',
    config: {
      arrayLimit: 200,
    },
  },

  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
