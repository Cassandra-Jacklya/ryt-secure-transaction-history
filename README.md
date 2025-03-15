# Project Overview  
This is a React Native app built using Expo Router. It features:

- A Biometric Login Screen as the homepage.

- A Transaction History Screen displaying recent transactions.

- A Transaction Detail Screen to view details of a selected transaction.

- The ability to mask/unmask transaction amounts using biometric authentication.

- A pull-to-refresh feature for updating the transaction list.

- Each transaction is pressable, navigating to a detailed transaction screen.

## Installation
1. Clone the repository
```bash
git clone Cassandra-Jacklya/ryt-secure-transaction-history
```

2. Then go into the project folder of the cloned repository
```bash
cd <project-folder>
```

## Get started

1. Install Expo Go

   ```bash
   Google Play / App Store
   ```

2. Start the app

   ```bash
    npx expo start
   ```
   or (to clear cache)

   ```bash
    npx expo start --clear
   ```

3. Scan the QR code provided when running the project or enter the URL manually (exp link which can be found in the Expo Go app)

<br/>

# Troubleshooting

1. App Not Running?

```bash
Ensure you have Expo Go installed.

Check your internet connection.

Restart the app and try again.
```

2. Biometric Authentication Not Working?

```bash
Ensure your device supports Face ID / Fingerprint.

Check if biometrics are enabled in device settings.
```
