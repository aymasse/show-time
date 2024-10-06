import { isValidPhoneNumber, parsePhoneNumber } from "libphonenumber-js";
import { z } from "zod";

export function phone(schema: z.ZodString) {
  return schema
    .refine(
      isValidPhoneNumber,
      "Please specify a valid phone number (include the international prefix)."
    )
    .transform((value) => parsePhoneNumber(value).number.toString());
}
