//Guides Tab
import { View, Text, StyleSheet } from 'react-native';

export default function GuidesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Logistics & Guides</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#050B14' },
  text: { color: 'white', fontSize: 18 }
});