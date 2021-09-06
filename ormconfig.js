module.exports = {
  "type": "postgres",
  "host": "127.0.0.1",
  "port": 5432,
  "username": "profile_user",
  "password": "password",
  "database": "profile_db",
  "entities": ["src/models/*.{js,ts}"],
  "migrations": ["database/migrations/*.{js,ts}"],
  "migrationsTableName": "typeorm_migrations",
  "cli": {
    "migrationsDir": "./database/migrations",
    "entities": "./src/models"
  }
}
