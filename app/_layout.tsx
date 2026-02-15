import { useColorScheme } from "@/hooks/use-color-scheme";
import { MapMarker } from "@/src/models/MapMarker";
import { Messages } from "@/src/models/Messages";
import { User } from "@/src/models/User";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { RealmProvider } from "@realm/react";
import Mapbox from "@rnmapbox/maps";
import { Stack } from "expo-router";
import { useUser } from "../hooks/useUser";
import { FoodItem } from "../src/models/FoodItem";
import { GuideArticleSchema } from "../src/models/GuideArticle";
import "./globals.css";

const mapboxToken = process.env.EXPO_PUBLIC_MAPBOX_ACCESS_TOKEN;

if (mapboxToken) {
  Mapbox.setAccessToken(mapboxToken);
}

Mapbox.setTelemetryEnabled(false);

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
