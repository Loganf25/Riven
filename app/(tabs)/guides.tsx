//Guides Tab
import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function GuidesScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Logistics & Guides</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#050B14",
  },
  text: { color: "white", fontSize: 18 },
});
