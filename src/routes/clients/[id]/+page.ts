import { getClient } from "$lib/services/clients.service.js";
import { getClientContacts } from "$lib/services/contacts.service.js";

export async function load({ params }) {
  try {
    const client = await getClient(params.id);
    const contacts = await getClientContacts(client);
    return { client, contacts };
  } catch (error) {
    return { error };
  }
}
