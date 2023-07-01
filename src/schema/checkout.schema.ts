import { z } from "zod";

const cardNumberRegex =
  /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|3[47][0-9]{13}|6(?:011|5[0-9]{2})[0-9]{12}|3(?:0[0-5]|[68][0-9])[0-9]{11})$/;

export const PersonalInfoSchema = z.object({
  name: z.string({ required_error: "Name is required" }).min(3).max(50),
  email: z.string().email({ message: "Please enter a valid email" }),
});

export type PersonalInfo = z.infer<typeof PersonalInfoSchema>;

// delivery form

export const DeliveryInfoSchema = z.object({
  city: z.string().min(3).max(50),
  postalCode: z.string().min(3).max(50),
  address: z.string().min(3).max(50),
  shipping: z.enum(["free", "fast", "same_day"]),
});

export type DeliveryInfo = z.infer<typeof DeliveryInfoSchema>;

const CheckoutSchema =
  PersonalInfoSchema.merge(DeliveryInfoSchema).merge(DeliveryInfoSchema);

export type CheckoutData = z.infer<typeof CheckoutSchema>;

// payment form
// coerce is used to convert string to number
export const PaymentInfoSchema = z.object({
  number: z.string().regex(cardNumberRegex),
  expirationDate: z
    .string()
    .regex(/^(0[1-9]|1[0-2])\/\d{4}$/)
    .refine(
      (val) => {
        var [month, year] = val.split("/");

        var date = new Date(parseInt(year), parseInt(month) - 1);
        return date > new Date();
      },
      { message: "Card is expired" }
    ),
  securityCode: z.coerce.number().gte(100).lte(999),
  saveInformation: z.boolean(),
});

export type PaymentInfo = z.infer<typeof PaymentInfoSchema>;
