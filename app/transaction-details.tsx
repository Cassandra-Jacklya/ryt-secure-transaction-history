import { useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";

export default function TransactionDetailScreen() {
  const { id, amount, date, description, type } = useLocalSearchParams();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>Transaction Details</Text>
      <Text style={{ fontSize: 18, marginTop: 10 }}>ID: {id}</Text>
      <Text style={{ fontSize: 18 }}>Date: {date}</Text>
      <Text style={{ fontSize: 18 }}>Description: {description}</Text>
      <Text style={{ fontSize: 18, color: type === "credit" ? "green" : "red" }}>
        Amount: RM {amount}
      </Text>
    </View>
  );
}
