import { Realm } from "@realm/react";

export class User extends Realm.Object {
  _id!: Realm.BSON.ObjectId;
  username!: string;
  email!: string;

  //User Preferences
  gearWeightUnit!: string;

  //Additional Data
  lastSync?: Date;

  static schema: Realm.ObjectSchema = {
    name: "User",
    primaryKey: "_id",
    properties: {
      _id: "objectId",
      username: "string",
      email: "string",
      gearWeightUnit: { type: "string", default: "lb" },
      lastSync: "date?",
    },
  };
}
