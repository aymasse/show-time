import { z } from "zod";
import type { Tables } from "../../models";
import { phone } from "$lib/utilities/schema";

export type Contact = Tables<"contacts">;

export const CreateContactSchema = z.object({
  first_name: z.string().min(1),
  last_name: z.string().min(1),
  email: z.string().email(),
  phone: phone(z.string()),
});

export type CreateContact = z.infer<typeof CreateContactSchema>;
