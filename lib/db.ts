import { neon } from '@neondatabase/serverless'

// Return a DB client or null if DATABASE_URL is not configured.
export function getDb() {
  const connectionString = process.env.DATABASE_URL
  if (!connectionString) {
    return null
  }
  return neon(connectionString)
}
