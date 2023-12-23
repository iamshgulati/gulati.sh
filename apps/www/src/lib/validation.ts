import * as z from "zod";

export const ogImageSchema = z.object({
  title: z
    .string()
    .optional()
    .transform((v) =>
      v ? decodeURIComponent(v) : "Hello! I'm Shubham Gulati.",
    ),
  publishedAt: z
    .string()
    .optional()
    .transform((v) => (v ? decodeURIComponent(v) : undefined)),
});
