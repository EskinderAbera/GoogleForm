import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import CheckoutContextProvider from "../../src/context/CheckOutContext";

export default function CheckoutStack() {
  return (
    <>
      <CheckoutContextProvider>
        <StatusBar style="light" />
        <Stack
          screenOptions={{
            contentStyle: { padding: 15, backgroundColor: "#F0E8F8", flex: 1 },
            headerStyle: { backgroundColor: "#673AB8" },
            headerTitleStyle: { color: "white" },
            headerTintColor: "#F0E8F8",
          }}
        >
          <Stack.Screen
            name="personal"
            options={{ title: "Personal Information" }}
          />
          <Stack.Screen
            name="delivery"
            options={{ title: "Delivery Information" }}
          />
          <Stack.Screen
            name="payment"
            options={{ title: "Payment Information" }}
          />
        </Stack>
      </CheckoutContextProvider>
    </>
  );
}
