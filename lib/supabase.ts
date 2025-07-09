import { createClient, type SupabaseClient } from "@supabase/supabase-js"

/**
 * A helper that returns either a fully-featured Supabase client (when the
 * required environment variables are present) or a lightweight “dummy” client
 * that simply warns at runtime.  This prevents the common
 * “supabaseUrl is required” error in local/preview environments that have not
 * yet been configured with real Supabase credentials.
 */

const PUBLIC_URL = process.env.NEXT_PUBLIC_SUPABASE_URL
const PUBLIC_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
const SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY

// ---------- Fallback: dummy client ---------------------------------------- //
function createDummyClient(): SupabaseClient {
  const warn = (method = "operation") =>
    console.warn(
      `[supabase] Environment variables are missing – '${method}' is a no-op (add your Supabase keys to enable it).`,
    )

  // Helper that returns a proxy for table-builder chains
  const tableProxy: any = new Proxy(
    {},
    {
      get(_t, prop: string) {
        // Special handling for common builder methods
        if (prop === "select") {
          return (..._args: unknown[]) => {
            warn(`.${prop}()`)
            // allow further chaining (e.g. .order())
            return tableProxy
          }
        }
        if (prop === "order") {
          return (..._args: unknown[]) => {
            warn(`.${prop}()`)
            // end of the chain – return a response-like object
            return { data: null, error: null }
          }
        }
        // Generic fallback for any other builder method
        return (..._args: unknown[]) => {
          warn(`.${prop}()`)
          return tableProxy
        }
      },
    },
  )

  // The dummy client itself
  return new Proxy({} as SupabaseClient, {
    get(_t, prop: string) {
      if (prop === "from") {
        // supabase.from("table")
        return (_table: string) => {
          warn(`.from("${_table}")`)
          return tableProxy
        }
      }
      // Any other root-level method
      return (..._args: unknown[]) => warn(`.${prop}()`)
    },
  })
}

// ---------- Public client (browser / client-side) ------------------------- //
export const supabase = PUBLIC_URL && PUBLIC_KEY ? createClient(PUBLIC_URL, PUBLIC_KEY) : createDummyClient()

// ---------- Server-side helper (admin / service-role) --------------------- //
export const createServerClient = () =>
  PUBLIC_URL && SERVICE_KEY ? createClient(PUBLIC_URL, SERVICE_KEY) : createDummyClient()

// ---------- Shared types -------------------------------------------------- //
export type Message = {
  id: number
  name: string
  email: string
  subject: string
  message: string
  created_at: string
  read: boolean
}
