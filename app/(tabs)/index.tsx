import { FoodItem } from "@/src/models/FoodItem";
import { useQuery, useRealm } from "@realm/react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Realm } from "realm";
import { MapMarker } from "../../src/models/MapMarker";

export default function Index() {
  const realm = useRealm();
  const foodItem = useQuery(FoodItem);
  const markerItems = useQuery(MapMarker);

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
    <SafeAreaView className="flex-1 justify-center items-center">
      <Text className=" ">Riven Data Core</Text>
      <Text style={styles.subtitle}>DB Items: {foodItem.length}</Text>
      <TouchableOpacity style={styles.button} onPress={addTestFood}>
        <Text style={styles.buttonText}>Add Food Item</Text>
      </TouchableOpacity>
    </SafeAreaView>
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
    paddingHorizontal: 5, 
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});
