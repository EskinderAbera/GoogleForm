import { useRouter } from "expo-router";
import { View, Text, ScrollView } from "react-native";
import {
  Button,
  Card,
  TextInput,
  useTheme,
  Checkbox,
} from "react-native-paper";

export default function PaymentDetails() {
  const router = useRouter();
  const theme = useTheme();

  const nextPage = () => router.push("/");

  return (
    <ScrollView
      contentContainerStyle={{ gap: 15 }}
      showsVerticalScrollIndicator={false}
    >
      <Card style={{ backgroundColor: theme.colors.background }}>
        <Card.Title title="Payment Details" titleVariant="titleLarge" />
        <Card.Content style={{ gap: 15 }}>
          <TextInput
            label="Card Number"
            placeholder="4242 4242 4242 4242"
            style={{ backgroundColor: theme.colors.background }}
          />
          <View style={{ flexDirection: "row", gap: 15 }}>
            <TextInput
              label="Expiration Date"
              placeholder="MM/YY"
              style={{ backgroundColor: theme.colors.background, flex: 3 }}
            />
            <TextInput
              label="Security Code"
              style={{ backgroundColor: theme.colors.background, flex: 2 }}
            />
          </View>
          <Checkbox.Item
            label="Save card for future purchases"
            status="checked"
          />
        </Card.Content>
      </Card>

      <Button onPress={nextPage} mode="contained">
        Submit
      </Button>
    </ScrollView>
  );
}
