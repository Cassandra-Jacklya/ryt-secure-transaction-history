import { View, Text, TouchableOpacity, Alert, useColorScheme } from "react-native";
import { useRouter } from "expo-router";
import * as LocalAuthentication from "expo-local-authentication";
import { useAuth } from "@/context/AuthContext";
import { Colors } from "../../constants/Colors";

export default function BiometricLoginScreen() {
  const { setIsAuthenticated } = useAuth();
  const router = useRouter();
  const theme = useColorScheme() ?? "light";

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
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors[theme].background, // Apply background color to entire screen
        padding: 20,
      }}
    >
      {/* App Title */}
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          marginBottom: 20,
          color: Colors[theme].text, // Dynamic text color
        }}
      >
        Transaction History App
      </Text>

      {/* Login Button */}
      <TouchableOpacity
        onPress={authenticateUser}
        style={{
          paddingVertical: 12,
          paddingHorizontal: 30,
          backgroundColor: "lightgrey", // Use theme tint color
          borderRadius: 8,
        }}
      >
        <Text style={{ color: Colors[theme].primary, fontSize: 15, fontWeight: "bold" }}>
          Login with Biometrics
        </Text>
      </TouchableOpacity>
    </View>
  );
}
