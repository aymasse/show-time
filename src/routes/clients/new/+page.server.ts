import type { CreateClient } from "$lib/models/Client.js";
import type { CreateContact } from "$lib/models/Contact.js";
import { createClient } from "$lib/services/clients.service.js";
import { createContacts } from "$lib/services/contacts.service.js";
import { fail } from "@sveltejs/kit";

export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();

    const client = getClient(data);
    const contacts = getContacts(data);

    if (contacts.length < 1) {
      return fail(400, {
        error: "You must add at least one contact",
      });
    }

    try {
      const createdClient = await createClient(client);

      await createContacts(
        contacts.map((contact) => {
          return {
            ...contact,
            client_id: createdClient.id,
          };
        })
      );

      return {
        success: true,
        createdClientId: createdClient.id,
      };
    } catch (error: any) {
      return fail(400, {
        error: error.message,
      });
    }
  },
};

function getClient(data: FormData): CreateClient {
  return {
    address: data.get("address")!.toString(),
    name: data.get("name")!.toString(),
  };
}

function getContacts(formData: FormData): CreateContact[] {
  const firstNames = formData.getAll("first_name");
  const lastNames = formData.getAll("last_name");
  const emails = formData.getAll("email");
  const phones = formData.getAll("phone");

  return firstNames.map((firstName, index) => {
    return {
      first_name: firstName.toString(),
      last_name: lastNames[index].toString(),
      email: emails[index].toString(),
      phone: phones[index].toString(),
    };
  });
}
