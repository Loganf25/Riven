import { Realm } from "@realm/react";
import { ObjectSchema } from "realm";

//1. Realm Schema Definition
export class FoodItem extends Realm.Object {
  _id!: Realm.BSON.ObjectId;
  name!: string;
  calories!: number;
  grams!: number;
  packedDate!: Date;
  isConsumed!: boolean;
  isSynced!: boolean;

  static schema: ObjectSchema = {
    name: "FoodItem",
    primaryKey: "_id",
    properties: {
      _id: "objectId", //Unique ID
      name: "string", //e.g., 'Oatmeal Packet'
      calories: "int", //e.g., 250
      grams: "int", //e.g., 85 (weight for pack weight calculation)
      packedDate: "date", //When it was added
      isConsumed: { type: "bool", default: false }, //Consumption status
      isSynced: { type: "bool", default: false }, //Sync status with cloud
    },
  };
}