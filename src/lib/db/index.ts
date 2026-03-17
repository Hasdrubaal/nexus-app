import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";

let _db: ReturnType<typeof drizzle<typeof schema>> | undefined;

export function getDb() {
  if (!_db) {
    const connectionString = process.env.DATABASE_URL;
    if (!connectionString) {
      throw new Error("DATABASE_URL environment variable is required");
    }
    const client = postgres(connectionString);
    _db = drizzle(client, { schema });
  }
  return _db;
}

// Keep `db` export for backward compat in code that only runs at request time.
// At build time this will be undefined but won't throw.
export const db = (typeof process !== "undefined" && process.env.DATABASE_URL)
  ? (() => {
      const client = postgres(process.env.DATABASE_URL);
      return drizzle(client, { schema });
    })()
  : (undefined as unknown as ReturnType<typeof drizzle<typeof schema>>);

export type Database = ReturnType<typeof drizzle<typeof schema>>;
