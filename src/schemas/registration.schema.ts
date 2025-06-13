import { z } from "zod";

export const registrationSchema = z.object({
    username: z
        .string()
        .min(2, {
            message: "Username must be at least 2 characters.",
        })
        .max(50),
    email: z.string().email({ message: "Please enter a valid email address." }),
    gender: z.string(),
    dob: z.date({
        required_error: "A date of birth is required.",
    })
});

// For frontend form validation
export type RegistrationFormData = z.infer<typeof registrationSchema>;