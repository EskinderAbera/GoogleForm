import { Link, useRouter } from "expo-router";
import { View, Text } from "react-native";
import { Button } from "react-native-paper";

export default function PersonalDetails() {
  const router = useRouter();

  const nextPage = () => {
    router.push("/checkout/delivery");
  };

  return (
    <View>
      <Text>Personal Details</Text>
      <Button onPress={nextPage} mode="contained">
        Next
      </Button>
    </View>
  );
}
