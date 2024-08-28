import { sql } from 'drizzle-orm';
import {
  index,
  serial,
  text,
  timestamp,
  pgTableCreator,
  uuid,
  varchar,
} from 'drizzle-orm/pg-core';
const createTable = pgTableCreator((name) => `devlog_${name}`);

export const user = createTable('user', {
  id: uuid('id').defaultRandom().primaryKey(),
  name: varchar('name', { length: 256 }).notNull(),
  email: varchar('email', { length: 256 }).notNull().unique(),
  password: text('password'),
  username: varchar('username', { length: 256 }).unique(),
  profile_pic: varchar('profile_pic', { length: 566 }),
  provider: varchar('provider', { length: 256 }),
  createdAt: timestamp('created_at', { withTimezone: true })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).$onUpdate(
    () => new Date()
  ),
});
