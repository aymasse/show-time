import { createClient } from "@supabase/supabase-js";
import { type Database } from "../../../models";

//import { SUPABASE_URL, SUPABASE_API_KEY } from "$env/static/private";

export const supabase = createClient<Database>(
  "http://localhost:54321",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0"
);
