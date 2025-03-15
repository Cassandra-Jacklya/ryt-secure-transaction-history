# Project Overview  
This is a React Native app built using Expo Router. It features:

- A Biometric Login Screen as the homepage.

- A Transaction History Screen displaying recent transactions.

- A Transaction Detail Screen to view details of a selected transaction.

- The ability to mask/unmask transaction amounts using biometric authentication.

- A pull-to-refresh feature for updating the transaction list.

- Each transaction is pressable, navigating to a detailed transaction screen.

## Get Started (IOS)
<i>Because I don't have an Apple account so I am not able to build for ios</i>

1. Go to your terminal

2. Go to a directory that you want to clone the repository in
```bash
cd <path>
```

3. Clone the repository
```bash
git clone https://github.com/Cassandra-Jacklya/ryt-secure-transaction-history.git
```

4. Then go into the project folder of the cloned repository
```bash
cd <project-folder>
```

5. Install Expo Go

   ```bash
   Google Play / App Store
   ```

6. Start the app (on terminal, make sure you are in the project directory)

   ```bash
    npx expo start
   ```
   or (to clear cache)

   ```bash
    npx expo start --clear
   ```

7. Scan the QR code provided using your phone when running the project or enter the URL manually (exp link which can be found in the Expo Go app)

<br/>

## Get started (Android)
<i>*This is for Android only</i>

1. Install Expo Go (on your Android Phone)

   ```bash
   Google Play / App Store
   ```

2. Go to this link and download the APK

   ```bash
   https://expo.dev/accounts/cassandraj/projects/ryt-assessment/builds/8fea811d-c210-4459-8f9f-b2fbfd98446a 
   ```

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
