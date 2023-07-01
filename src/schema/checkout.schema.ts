import { z } from "zod";

export const PersonalInfoSchema = z.object({
  name: z.string().min(3).max(50),
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

// payment form

export const PaymentInfoSchema = z.object({
  number: z.string().min(3).max(50),
  expirationDate: z.string().min(3).max(50),
  securityCode: z.string().min(3).max(50),
  saveInformation: z.boolean(),
});

export type PaymentInfo = z.infer<typeof PaymentInfoSchema>;
