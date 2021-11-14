module.exports = {
  development: {
    dialect: 'postgres',
    use_env_variable: 'DATABASE_URL',
  },
  test: {
    dialect: 'sqlite',
  },
  production: {
    dialect: 'postgres',
    use_env_variable: 'DATABASE_URL',
  }
};
