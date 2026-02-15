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
import Mapbox from "@rnmapbox/maps";

Mapbox.setAccessToken(
  "pk.eyJ1IjoidGlsZmZ0YW1iIiwiYSI6ImNtbGxlcnF1dTA3cjczbG9uZmpzNGRrbm4ifQ.a9DYaLEveXySlnS0xvp9YA",
);
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
