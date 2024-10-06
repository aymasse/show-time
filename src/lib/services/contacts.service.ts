import type { Client } from "$lib/models/Client";
import {
  CreateContactSchema,
  type Contact,
  type CreateContact,
} from "$lib/models/Contact";
import { supabase } from "$lib/utilities/db/database";

export async function getClientContacts(client: Client): Promise<Contact[]> {
  const { data: contacts, error } = await supabase
    .from("contacts")
    .select()
    .eq("client_id", client.id);

  if (contacts) {
    return contacts;
  }

  throw error;
}

export async function getClientMainContact(client: Client): Promise<Contact> {
  const { data: contact, error } = await supabase
    .from("contacts")
    .select()
    .eq("client_id", client.id)
    .limit(1)
    .single();

  if (contact) {
    return contact;
  }

  throw error;
}

export async function createContact(contact: CreateContact): Promise<Contact> {
  CreateContactSchema.parse(contact);

  const { data, error } = await supabase
    .from("contacts")
    .insert(contact)
    .select()
    .single();

  if (data) {
    return data;
  }

  throw error;
}

export async function createContacts(
  contacts: CreateContact[]
): Promise<Contact[]> {
  contacts.forEach((contact) => {
    CreateContactSchema.parse(contact);
  });

  const { data, error } = await supabase
    .from("contacts")
    .insert(contacts)
    .select();

  if (data) {
    return data;
  }

  throw error;
}
