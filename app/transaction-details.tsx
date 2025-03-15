import { useLocalSearchParams, useNavigation } from "expo-router";
import { View, Text, useColorScheme  } from "react-native";
import { Colors } from "../constants/Colors";

export default function TransactionDetailScreen() {
  const { id, amount, date, description, type } = useLocalSearchParams();
  const nav = useNavigation();
  const theme = useColorScheme() ?? "light";

  nav.setOptions({title: "Receipt"});

  return (
    <View style={{ flex: 1, padding: 0 }}>
      <View style={{ backgroundColor: Colors[theme].background }}>
        <Text style={{ fontSize: 18, fontWeight: "bold", margin: 15, color: "white" }}>{description}</Text>
      </View>
      <View style={{ marginLeft: 15, flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginRight: 20}}>
        <View style={{ flexDirection: "column"}}>
          <Text style={{ fontSize: 15, marginTop: 10 }}>Reference ID</Text>
          <Text style={{ fontSize: 13, marginTop: 2, color: "grey" }}>{id}</Text>
        </View>
        <Text style={{ fontSize: 13, color: "grey" }}>{date}</Text>
      </View>
      <View style={{ borderBottomWidth: 1, borderBottomColor: "lightgrey", marginVertical: 10, margin: 10 }} />
      <View style={{ marginLeft: 15 }}>
        <Text style={{ fontSize: 15 }}>
          Amount
        </Text>
        <Text style={{ fontSize: 13, marginTop: 2, color: type === "credit" ? "green" : "red"}}>RM {amount}</Text>
      </View>
      <View style={{ borderBottomWidth: 1, borderBottomColor: "lightgrey", marginVertical: 10, margin: 10 }} />
      <View style={{ marginLeft: 15 }}>
        <Text style={{ fontSize: 9, color: "grey" }}>Note: This receipt is system-generated and does not require a signature. The transaction is subject to Maybank's terms and conditions.</Text>
      </View>
    </View>
  );
}
