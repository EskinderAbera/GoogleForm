import { Link, useRouter } from "expo-router";
import { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import {
  Button,
  Card,
  TextInput,
  useTheme,
  RadioButton,
  HelperText,
} from "react-native-paper";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  DeliveryInfo,
  DeliveryInfoSchema,
} from "../../src/schema/checkout.schema";
import ControlledInput from "../../src/components/ControlledInput";
import { useCheckoutContext } from "../../src/context/CheckOutContext";

export default function DeliveryDetails() {
  const { setDelivery } = useCheckoutContext();

  const { control, handleSubmit } = useForm<DeliveryInfo>({
    resolver: zodResolver(DeliveryInfoSchema),
    defaultValues: {
      shipping: "free",
    },
  });

  const router = useRouter();
  const theme = useTheme();

  const nextPage = (data: DeliveryInfo) => {
    setDelivery(data);
    router.push("/checkout/payment");
  };

  return (
    <ScrollView
      contentContainerStyle={{ gap: 15 }}
      showsVerticalScrollIndicator={false}
    >
      <Card style={{ backgroundColor: theme.colors.background }}>
        <Card.Title title="Delivery Details" titleVariant="titleLarge" />
        <Card.Content style={{ gap: 15 }}>
          <ControlledInput control={control} name="city" label={"City"} />
          <ControlledInput
            control={control}
            name="postalCode"
            label={"Postal Code"}
          />
          <ControlledInput control={control} name="address" label={"Address"} />
        </Card.Content>
      </Card>

      <Card style={{ backgroundColor: theme.colors.background }}>
        <Card.Title title="Delivery Options" titleVariant="titleLarge" />
        <Card.Content style={{ gap: 15 }}>
          <Controller
            control={control}
            name="shipping"
            render={({
              field: { value, onChange, onBlur },
              fieldState: { error, invalid },
            }) => (
              <View>
                <RadioButton.Group
                  value={value}
                  onValueChange={(value: DeliveryInfo["shipping"]) =>
                    onChange(value)
                  }
                >
                  <RadioButton.Item label="Free" value="free" />
                  <RadioButton.Item label="Fast" value="fast" />
                  <RadioButton.Item label="Same day" value="same_day" />
                </RadioButton.Group>
                <HelperText type="error" visible={invalid}>
                  {error?.message}
                </HelperText>
              </View>
            )}
          />
        </Card.Content>
      </Card>
      <Button onPress={handleSubmit(nextPage)} mode="contained">
        Next
      </Button>
    </ScrollView>
  );
}
