export const config = {
  db: {
    type: 'mysql',
    synchronize: false,
    logging: false,
    host: process.env.DB_HOST || '127.0.0.1',
    port: process.env.DB_PORT || 3306,
    username: process.env.DB_USER || 'username',
    password: process.env.DB_PASSWORD || 'password',
    // database: 'dbname',
    extra: {
      connectionLimit: 5,
    },
  },
  graphql: {
    playground: false,
    autoSchemaFile: true,
  },
};