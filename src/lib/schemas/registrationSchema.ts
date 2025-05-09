import { z } from "zod";

export const registrationSchema = z.object({
  username: z
    .string()
    .min(2, {
      message: "Username must be at least 2 characters.",
    })
    .max(50),
  email: z.string().email(),
  joiningDate: z.string().datetime(),
  department: z.string(),
});

// For frontend form validation
export type RegistrationFormData = z.infer<typeof registrationSchema>;
