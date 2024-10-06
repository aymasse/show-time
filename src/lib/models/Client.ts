import { z } from "zod";
import type { Tables } from "../../models";

export type Client = Tables<"clients">;

export const CreateClientSchema = z.object({
  address: z.string().min(1),
  name: z.string().min(1),
});

export type CreateClient = z.infer<typeof CreateClientSchema>;
