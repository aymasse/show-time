import {
  CreateClientSchema,
  type Client,
  type CreateClient,
} from "$lib/models/Client";
import { supabase } from "$lib/utilities/db/database";
import {
  getSupabaseRange,
  type PaginationOptions,
} from "$lib/utilities/db/utils";

export async function getClients(paginationOptions: PaginationOptions) {
  const { rangeStart, rangeEnd } = getSupabaseRange(paginationOptions);

  return await supabase
    .from("clients")
    .select("*", { count: "exact" })
    .order("name")
    .range(rangeStart, rangeEnd);
}

export async function getClient(id: string): Promise<Client> {
  const { data: client, error } = await supabase
    .from("clients")
    .select()
    .eq("id", id)
    .limit(1)
    .single();

  if (client) {
    return client;
  }

  throw error;
}

export async function createClient(client: CreateClient): Promise<Client> {
  CreateClientSchema.parse(client);

  const { data, error } = await supabase
    .from("clients")
    .insert(client)
    .select()
    .single();

  if (data) {
    return data;
  }

  throw error;
}
