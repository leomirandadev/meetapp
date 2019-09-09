module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'root',
  database: 'meetup',
  define: {
    timestamp: true,
    underscored: true,
    underscoredAll: true,
  },
};
