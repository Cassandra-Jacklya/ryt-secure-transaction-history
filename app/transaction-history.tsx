import React from "react";
import { View, Text, FlatList, StyleSheet, Alert, TouchableOpacity, RefreshControl, useColorScheme } from "react-native";
import { transactions } from "../constants/transactionData"; // Import JSON data
import { useState, useCallback, useEffect } from "react";
import * as LocalAuthentication from "expo-local-authentication";
import { useRouter, useNavigation } from "expo-router";
import { Colors } from "../constants/Colors";

export default function TransactionHistoryScreen() {

  const [masked, setMasked] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const router = useRouter();
  const nav = useNavigation();
  const theme = useColorScheme() ?? "light";

  useEffect(() => {
    nav.setOptions({ title: "Transactions" });
  }, [nav]); // Runs only when `navigation` changes

  const authenticateUser = async () => {
    const result = await LocalAuthentication.authenticateAsync({
      promptMessage: "Authenticate to show transaction amounts",
    });

    if (result.success) {
      setMasked(false); // Unmask amounts
    } else {
      Alert.alert("Authentication Failed", "Unable to reveal amounts.");
    }
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: "#f5f5f5" }}>
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id.toString()}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => router.push(`/transaction-details?id=${item.id}&amount=${item.amount}&date=${item.date}&description=${item.description}&type=${item.type}`)}
              style={{
                backgroundColor: theme === "dark" ? "#F0F0F0" : "white",
                marginBottom: 10,
                borderRadius: 8,
              }}
          >
            <View style={{ padding: 15, backgroundColor: Colors[theme].background, marginBottom: 10, borderRadius: 8 }}>
              <Text style={{ fontSize: 16, fontWeight: "bold", color: Colors[theme].text }}>{item.description}</Text>
              <Text style={{ fontSize: 14, color: "gray" }}>{item.date}</Text>
              <Text style={{ fontSize: 16, fontWeight: "bold", color: item.type === "credit" ? "green" : "red" }}>
                {masked ? "****" : `RM ${item.amount.toFixed(2)}`}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
      

      <TouchableOpacity
        onPress={() => {
          if (masked) {
            authenticateUser();
          } else {
            setMasked(true); // No need for authentication when hiding amounts
          }
        }}
        style={{
          backgroundColor: "blue",
          padding: 15,
          borderRadius: 5,
          marginTop: 20,
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white", fontSize: 16 }}>
          {masked ? "Show Amounts" : "Hide Amounts"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "white" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 10 },
  transaction: { padding: 10, borderBottomWidth: 1, borderBottomColor: "#ddd" },
  description: { fontSize: 16 },
  amount: { fontSize: 16, fontWeight: "bold" },
  debit: { color: "red" },
  credit: { color: "green" },
  date: { fontSize: 12, color: "gray" },
});
