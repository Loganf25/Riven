import { useQuery, useRealm } from "@realm/react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FoodItem } from "../../src/models/FoodItem";
import { Realm } from "realm";

export default function Index() {
  const realm = useRealm();
  const foodItems = useQuery(FoodItem);

  const addTestFood = () => {
    realm.write(() => {
      realm.create("FoodItem", {
        _id: new Realm.BSON.ObjectId(),
        name: "Test Trail Mix",
        calories: 500,
        grams: 120,
        packedDate: new Date(),
        isConsumed: false,
        isSynced: false,
      });
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Riven Data Core</Text>
      <Text style={styles.subtitle}>DB Items: {foodItems.length}</Text>
      <TouchableOpacity style={styles.button} onPress={addTestFood}>
        <Text style={styles.buttonText}>Add Food Item</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0A1828",
  },
  title: {
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
  },
  subtitle: {
    color: "#888",
    marginVertical: 10,
  },
  button: {
    backgroundColor: "#2ECC71",
    paddingVertical: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});
