import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

import * as schema from './schema';
import { pgTableCreator } from 'drizzle-orm/pg-core';

/**
 * Cache the database connection in development. This avoids creating a new connection on every HMR
 * update.
 */
const globalForDb = globalThis as unknown as {
  conn: postgres.Sql | undefined;
};
const conn = globalForDb.conn ?? postgres(process.env.DATABASE_URL!);
if (process.env.STATUS! !== 'production') globalForDb.conn = conn;

export const db = drizzle(conn, { schema });
