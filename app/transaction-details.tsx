import { useLocalSearchParams, useNavigation } from "expo-router";
import { View, Text, useColorScheme } from "react-native";
import { Colors } from "../constants/Colors";
import { useEffect } from "react";

export default function TransactionDetailScreen() {
  const { id, amount, date, description, type } = useLocalSearchParams();
  const nav = useNavigation();
  const theme = useColorScheme() ?? "light";

  useEffect(() => {
      nav.setOptions({ title: "Receipt" });
    }, [nav]); // Runs only when `navigation` changes

  return (
    <View style={{ flex: 1, padding: 0 }}>
      <View style={{ backgroundColor: "#121212" }}>
        <Text style={{ fontSize: 20, fontWeight: "bold", margin: 15, color: "white" }}>{description}</Text>
      </View>
      <View style={{ marginLeft: 15, flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginRight: 20}}>
        <View style={{ flexDirection: "column"}}>
          <Text style={{ fontSize: 18, marginTop: 10, color: Colors[theme].text }}>Reference ID</Text>
          <Text style={{ fontSize: 15, marginTop: 2, color: theme === "dark" ? "lightgrey" : "grey" }}>{id}</Text>
        </View>
        <Text style={{ fontSize: 15, color: "grey" }}>{date}</Text>
      </View>
      <View style={{ borderBottomWidth: 1, borderBottomColor: "lightgrey", marginVertical: 10, margin: 10 }} />
      <View style={{ marginLeft: 15 }}>
        <Text style={{ fontSize: 15, color: Colors[theme].text }}>
          Amount
        </Text>
        <Text style={{ fontSize: 15, marginTop: 2, color: type === "credit" ? "green" : "red"}}>RM {amount}</Text>
      </View>
      <View style={{ borderBottomWidth: 1, borderBottomColor: "lightgrey", marginVertical: 10, margin: 10 }} />
      <View style={{ marginLeft: 15 }}>
        <Text style={{ fontSize: 10, color: "grey" }}>Note: This receipt is system-generated and does not require a signature. The transaction is subject to Maybank's terms and conditions.</Text>
      </View>
    </View>
  );
}
