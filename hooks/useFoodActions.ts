import { useRealm } from "@realm/react";
import { Realm } from "realm";

export const useFoodActions = () => {
  const realm = useRealm();

  const addFood = (name: string, calories: number, grams: number) => {
    realm.write(() => {
      realm.create("FoodItem", {
        _id: new Realm.BSON.ObjectId(),
        name,
        calories,
        grams,
        packedDate: new Date(),
        isConsumed: false,
        isSynced: false,
      });
    });
  };

  return { addFood };
};
