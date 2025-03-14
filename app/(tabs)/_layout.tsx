import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import { useRouter } from "expo-router";
import * as LocalAuthentication from "expo-local-authentication";
import { useAuth } from "@/context/AuthContext";

export default function BiometricLoginScreen() {
  const { isAuthenticated, setIsAuthenticated } = useAuth();
  const router = useRouter();

  const authenticateUser = async () => {
    const hasHardware = await LocalAuthentication.hasHardwareAsync();
    const isEnrolled = await LocalAuthentication.isEnrolledAsync();

    if (!hasHardware || !isEnrolled) {
      Alert.alert("Biometrics not available", "Please set up Face ID or Fingerprint.");
      return;
    }

    const result = await LocalAuthentication.authenticateAsync({
      promptMessage: "Authenticate to log in",
      fallbackLabel: "Enter passcode",
    });

    if (result.success) {
      setIsAuthenticated(true); // Set authentication status globally
      router.push("/transaction-history"); // Navigate to transaction history
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>Biometric Login</Text>
      <TouchableOpacity onPress={authenticateUser} style={{ padding: 15, backgroundColor: "blue", borderRadius: 5 }}>
        <Text style={{ color: "white" }}>Login with Biometrics</Text>
      </TouchableOpacity>
    </View>
  );
}