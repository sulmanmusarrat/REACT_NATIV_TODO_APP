import { ThemeProvider } from "@/hooks/usetheme";
import { Stack } from "expo-router";
export default function RootLayout() {
  return (
    <ThemeProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
      </Stack>
 </ThemeProvider>
  );
}
