import { useFonts,  } from "@expo-google-fonts/inter";
import { Platform } from "react-native";

export const colors = {
  primary: "#00C853",         // Shipt green
  primaryLight: "#69F0AE",    // Light mint green
  secondary: "#FF6D00",       // Vibrant orange for accents
  text: "#1A1A1A",            // Deep black for contrast
  muted: "#777",              // Subtle text
  background: "#C4C7CC",      // Darker silver background 
  card: "#FFFFFF",            // Card background
  border: "#E0E0E0",          // For card outlines or dividers
  error: "#D32F2F",           // Standard red for errors
  success: "#388E3C",         // Deep green for success
};

export const shadows = {
  light: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 1,
  },
  medium: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 3,
  },
};


export const fontFamily = {
    body: "Oswald",
    heading: Platform.OS === "ios" ? "Oswald" : "Lato",
    monospace: Platform.OS === "ios" ? "Lato" : "Oswald",
};

export const fontSizes = {
  caption: 12,
  body: 14,
  button: 16,
  subtitle: 18,
  title: 22,
  headline: 28,
  display: 34,
};

export const fontWeights = {
    regular: 400,
    medium: 500,
    bold: 700,
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
  xxxl: 64,
};

export const breakpoints = {
  smallPhone: 320,
  phone: 375,
  tablet: 768,
  desktop: 1024,
};


export const zIndex = {
  background: 0,
  default: 1,
  dropdown: 10,
  modal: 100,
  toast: 999,
};

export const radius = {
  sm: 4,
  md: 8,
  lg: 16,
  xl: 24,
};

export const durations = {
  fast: 150,
  normal: 300,
  slow: 500,
};


export const theme = {
  colors,
  spacing,
  fontSizes,
  fontWeights,
  fontFamily,
  radius,
  // optional
  shadows,
  zIndex,
  durations,
  breakpoints,
};

