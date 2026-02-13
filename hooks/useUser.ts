import { useQuery, useRealm } from "@realm/react";
import { useEffect } from "react";
import { Realm } from "realm";
import { User } from "../src/models/User";

export const useUser = () => {
  const realm = useRealm();
  const users = useQuery(User);
  const currentUser = users[0]; // For now, we assume a single local user

  useEffect(() => {
    // If no user exists in the local DB, create one
    if (users.length === 0) {
      realm.write(() => {
        realm.create("User", {
          _id: new Realm.BSON.ObjectId(),
          username: "Survivor_1",
          email: "offline@riven.local",
          gearWeightUnit: "lb",
          isPro: false,
        });
      });
    }
  }, [users, realm]);

  return currentUser;
};
