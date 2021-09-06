module.exports = {
  "type": "postgres",
  "host": "127.0.0.1",
  "port": 5432,
  "username": "profile_user",
  "password": "password",
  "database": "profile_db",
  "entities": ["models/*.{js,ts}"],
  "migrations": ["migrations/*.{js,ts}"],
  "migrationsTableName": "typeorm_migrations",
  "cli": {
    "migrationsDir": "./migrations",
    "entities": "./models"
  }
}
