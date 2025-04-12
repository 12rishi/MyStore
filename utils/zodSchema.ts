import z from "zod";

export const productSchema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 characters" }),
  company: z
    .string()
    .min(3, { message: "Company must be at least 3 characters" }),
  price: z.coerce
    .number()
    .int()
    .min(1, { message: "Price must be at least 1" }),
  description: z.string().refine(
    (val) => {
      const checkDescriptionLength = val.split(" ");
      return (
        checkDescriptionLength.length >= 10 &&
        checkDescriptionLength.length <= 1000
      );
    },
    {
      message: "Description must be between 10 and 1000 characters",
    }
  ),
  featured: z.coerce.boolean(),
});
export const validateZodSchema = <T>(schema: z.ZodSchema<T>, data: unknown) => {
  const validatedFields = schema.safeParse(data);
  if (!validatedFields.success) {
    const errors = validatedFields.error?.errors
      .map((error) => error.message)
      .join(", ");
    throw new Error(errors);
  }
  return validatedFields.data;
};
const validateImage = () => {
  const maxSize = 1024 * 1024;
  const allowedTypes = ["image/jpeg", "image/png", "image/webp"];
  return z
    .instanceof(File)
    .refine((file) => file.size <= maxSize, {
      message: "Image must be less than 1MB",
    })
    .refine((file) => allowedTypes.includes(file.type), {
      message: "Image must be a valid image type",
    });
};
export const imageSchema = z.object({
  image: validateImage(),
});
