# Backend DB Snapshot

This directory contains the local database bundle for the backend.

Files:
- `connection.cjs`: shared MySQL connection config
- `dump.cjs`: export the current database into `schema.sql` and `seed-data.json`
- `restore.cjs`: rebuild a database from the exported snapshot
- `schema.sql`: table structure
- `seed-data.json`: table rows
- `docker-compose.yml`: local MySQL service
- `.env.example`: local database environment values

## Local workflow

1. Copy `src/backend-db/.env.example` to your runtime `.env` or export the same variables in your shell.
2. Start MySQL with `docker compose -f src/backend-db/docker-compose.yml up -d`.
3. Restore the snapshot with `node src/backend-db/restore.cjs`.
4. Start the backend normally.

## Saving changes

When the database content changes and you want to persist that state in Git:

1. Point the backend/database env vars at the database you want to snapshot.
2. Run `node src/backend-db/dump.cjs`.
3. Commit the updated `schema.sql` and `seed-data.json`.

## Notes

- The snapshot preserves IDs so foreign-key-style relationships stay stable.
- `DB_SSL=false` is intended for local MySQL.
- The backend still needs to use the same env vars when it starts.
