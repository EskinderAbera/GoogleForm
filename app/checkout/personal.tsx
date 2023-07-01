import { Link, useRouter } from "expo-router";
import { ScrollView } from "react-native";
import { Button, Card, useTheme } from "react-native-paper";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  PersonalInfoSchema,
  PersonalInfo,
} from "../../src/schema/checkout.schema";
import ControlledInput from "../../src/components/ControlledInput";
import { useCheckoutContext } from "../../src/context/CheckOutContext";

export default function PersonalDetails() {
  const { control, handleSubmit } = useForm<PersonalInfo>({
    resolver: zodResolver(PersonalInfoSchema),
    defaultValues: {
      name: "Vadim",
      email: "vas@sa.com",
    },
  });

  const { setPersonal } = useCheckoutContext();

  const router = useRouter();
  const theme = useTheme();

  const nextPage = (data: PersonalInfo) => {
    setPersonal(data);
    router.push("/checkout/delivery");
  };

  return (
    <ScrollView
      contentContainerStyle={{ gap: 15 }}
      showsVerticalScrollIndicator={false}
    >
      <Card style={{ backgroundColor: theme.colors.background }}>
        <Card.Title title="Personal Details" titleVariant="titleLarge" />
        <Card.Content style={{ gap: 10 }}>
          <ControlledInput
            control={control}
            name="name"
            placeholder="Name"
            label={"Name"}
          />

          <ControlledInput
            control={control}
            name="email"
            placeholder="hey@boo.com"
            label="Email"
          />
        </Card.Content>
      </Card>
      <Button onPress={handleSubmit(nextPage)} mode="contained">
        Next
      </Button>
    </ScrollView>
  );
}
