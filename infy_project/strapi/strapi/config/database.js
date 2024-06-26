
    // strapi-api/config/database.js
    module.exports = ({ env }) => ({
      connection: {
        client: 'postgres',
        connection: {
          host: env('DATABASE_HOST', 'localhost'),
          port: env.int('DATABASE_PORT', ),
          database: env('DATABASE_NAME', ''),
          user: env('DATABASE_USERNAME', ''),
          password: env('DATABASE_PASSWORD', ''),
          schema: env('DATABASE_SCHEMA', ''), 
        },
      },
    });