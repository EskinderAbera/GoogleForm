import { createContext, useContext, useState } from "react";
import {
  DeliveryInfo,
  PaymentInfo,
  PersonalInfo,
} from "../schema/checkout.schema";

type CheckOutContextType = {
  setPersonal: React.Dispatch<React.SetStateAction<PersonalInfo>>;
  setDelivery: React.Dispatch<React.SetStateAction<DeliveryInfo>>;
  setPayment: React.Dispatch<React.SetStateAction<PaymentInfo>>;
  onSubmitAll?: (paymentInfo: PaymentInfo) => Promise<boolean>;
};

const CheckOutContext = createContext<CheckOutContextType>({
  setPersonal: () => {},
  setDelivery: () => {},
  setPayment: () => {},
  onSubmitAll: () => Promise.resolve(false),
});

export default function CheckoutContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [personal, setPersonal] = useState<PersonalInfo>({} as PersonalInfo);
  const [delivery, setDelivery] = useState<DeliveryInfo>({} as DeliveryInfo);
  const [payment, setPayment] = useState<PaymentInfo>({} as PaymentInfo);

  const onSubmitAll = async (paymentInfo: PaymentInfo) => {
    setPayment(paymentInfo);

    console.log("Submitted all");
    console.log(personal);
    console.log(delivery);
    console.log(paymentInfo);

    return true;
  };

  return (
    <CheckOutContext.Provider
      value={{ setPersonal, setDelivery, setPayment, onSubmitAll }}
    >
      {children}
    </CheckOutContext.Provider>
  );
}

export const useCheckoutContext = () => useContext(CheckOutContext);
