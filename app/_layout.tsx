import { RealmProvider } from "@realm/react";
import { Stack } from "expo-router";
import { FoodItem } from "../src/models/FoodItem";
import { GuideArticleSchema } from "../src/models/GuideArticle";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { MapMarker } from "@/src/models/MapMarker";
import { Messages } from "@/src/models/Messages";
import { User } from "@/src/models/User";
import "./globals.css"
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useUser } from "../hooks/useUser";

export const unstable_settings = {
  anchor: "(tabs)",
};

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const user = useUser;

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <RealmProvider
        schema={[FoodItem, GuideArticleSchema, User, MapMarker, Messages]}
      >
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
      </RealmProvider>
    </ThemeProvider>
  );
}
