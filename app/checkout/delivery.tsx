import { Link } from "expo-router";
import { View, Text } from "react-native";

export default function DeliveryDetails() {
  return (
    <View>
      <Text>Delivery Details</Text>

      <Link href={"/checkout/payment"}>Next</Link>
    </View>
  );
}
