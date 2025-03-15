/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';
const primaryColour = '#0000E6';

export const Colors = {
  light: {
    text: '#0A0A0A',        // Almost black for maximum readability
    background: "E0E0E0",  // Pure white background for a clean look
    primary: primaryColour,     // Your deep blue as the primary color
    icon: '#333333',        // Darker grey for better contrast
    tabIconDefault: '#666666', // Neutral grey for inactive tabs
    tabIconSelected: '#0000E6', // Deep blue for active tabs (consistent with primary)
  },
  dark: {
    text: '#F1F1F1',        // Soft white for readability without being harsh
    background: '#121212',  // Dark grey for better eye comfort (not pure black)
    primary: '#4C6EF5',     // Softer blue that complements dark mode
    icon: '#C4C4C4',        // Light grey for better visibility on dark backgrounds
    tabIconDefault: '#888888', // Muted grey for inactive tabs
    tabIconSelected: '#4C6EF5', // Softer blue for active tabs in dark mode
  },
};
