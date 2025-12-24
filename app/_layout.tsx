import { Stack } from "expo-router";
import { RealmProvider } from "@realm/react";
import { FoodItem } from "../src/models/FoodItem";
import { GuideArticleSchema } from "../src/models/GuideArticle";

import { useColorScheme } from "@/hooks/use-color-scheme";
import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";


export const unstable_settings = {
  anchor: '(tabs)', 
}; 

export default function RootLayout() {
  const colorScheme = useColorScheme(); 

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RealmProvider schema={[FoodItem, GuideArticleSchema]}>
        <Stack>
          <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
        </Stack>
      </RealmProvider>
    </ThemeProvider>
  );
}
