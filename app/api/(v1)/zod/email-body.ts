import { z } from "zod/mini";

export const emailBody = z.object({
    name : z.string(),
    email : z.email(),
    subject : z.string(),
    message : z.string()
});