import { Realm } from "@realm/react";

export class MapMarker extends Realm.Object {
  _id!: Realm.BSON.ObjectId;
  creatorId!: Realm.BSON.ObjectId;
  type!: string; // 'water', 'shelter', 'hazard'
  latitude!: number;
  longitude!: number;
  description!: string;
  timestamp!: Date;

  static schema: Realm.ObjectSchema = {
    name: "MapMarker",
    primaryKey: "_id",
    properties: {
      _id: "objectId",
      creatorId: "objectId",
      type: "string",
      latitude: "double",
      longitude: "double",
      description: "string",
      timestamp: "date",
    },
  };
}
