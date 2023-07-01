import { useRouter } from "expo-router";
import { View, ScrollView, Alert } from "react-native";
import { Button, Card, useTheme, Checkbox } from "react-native-paper";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  PaymentInfo,
  PaymentInfoSchema,
} from "../../src/schema/checkout.schema";
import ControlledInput from "../../src/components/ControlledInput";
import { useCheckoutContext } from "../../src/context/CheckOutContext";

export default function PaymentDetails() {
  const { control, handleSubmit } = useForm<PaymentInfo>({
    resolver: zodResolver(PaymentInfoSchema),
  });
  const router = useRouter();
  const theme = useTheme();
  const { setPayment, onSubmitAll } = useCheckoutContext();

  const nextPage = async (data: PaymentInfo) => {
    // setPayment(data);
    const success = await onSubmitAll(data);
    if (success) {
      router.push("/");
    } else {
      Alert.alert("Something went wrong");
    }
  };
  return (
    <ScrollView
      contentContainerStyle={{ gap: 15 }}
      showsVerticalScrollIndicator={false}
    >
      <Card style={{ backgroundColor: theme.colors.background }}>
        <Card.Title title="Payment Details" titleVariant="titleLarge" />
        <Card.Content style={{ gap: 15 }}>
          <ControlledInput
            control={control}
            name="number"
            label={"Card Number"}
            placeholder="4242 4242 4242 4242"
          />
          <View style={{ flexDirection: "row", gap: 15 }}>
            <ControlledInput
              control={control}
              name="expirationDate"
              label={"Expiration Date"}
              placeholder="MM/YY"
              style={{ backgroundColor: theme.colors.background, flex: 3 }}
            />
            <ControlledInput
              control={control}
              name="securityCode"
              label={"Security Code"}
              placeholder="MM/YY"
              style={{ backgroundColor: theme.colors.background, flex: 2 }}
            />
          </View>
          <Controller
            control={control}
            name="saveInformation"
            render={({ field: { value, onChange } }) => (
              <Checkbox.Item
                label="Save card for future purchases"
                onPress={() => onChange(!value)}
                status={value ? "checked" : "unchecked"}
              />
            )}
          />
        </Card.Content>
      </Card>

      <Button onPress={handleSubmit(nextPage)} mode="contained">
        Submit
      </Button>
    </ScrollView>
  );
}
