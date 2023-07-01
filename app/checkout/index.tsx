import { Link, useRouter } from "expo-router";
import { View, Text, ScrollView } from "react-native";
import { Button, Card, TextInput, useTheme } from "react-native-paper";

export default function PersonalDetails() {
  const router = useRouter();
  const theme = useTheme();

  const nextPage = () => {
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
          <TextInput
            placeholder="Full Name"
            label="Name"
            style={{ backgroundColor: theme.colors.background }}
          />
          <TextInput
            placeholder="hey@boo.com"
            label="Email"
            style={{ backgroundColor: theme.colors.background }}
          />
        </Card.Content>
      </Card>
      <Button onPress={nextPage} mode="contained">
        Next
      </Button>
    </ScrollView>
  );
}
