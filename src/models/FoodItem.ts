import { Realm } from "@realm/react";

//1. TypeScript Interface (Initialization Structure)
export interface FoodItem {
  _id: Realm.BSON.ObjectId;
  name: string;
  calories: number;
  grams: number;
  packedDate: Date;
  isConsumed: boolean;
}

//2. Realm Schema Definition
export class FoodItemSchema extends Realm.Object {
  //Static property for Realm to identify this model
  static schema = {
    name: 'FoodItem',
    primaryKey: '_id',
    properties: {
      _id: 'objectId',         //Unique ID
      name: 'string',          //e.g., 'Oatmeal Packet'
      calories: 'int',         //e.g., 250
      grams: 'int',            //e.g., 85 (weight for pack weight calculation)
      packedDate: 'date',      //When it was added
      isConsumed: { type: 'bool', default: false }, //Consumption status
    },
  };
}