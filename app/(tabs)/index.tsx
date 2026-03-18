import { useQuery, useRealm } from "@realm/react";
import Mapbox, { MapView } from "@rnmapbox/maps";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MapMarker } from "../../src/models/MapMarker";

export default function Index() {
  const realm = useRealm();
  const markerItems = useQuery(MapMarker);

  return (
    <SafeAreaView className="flex-1">     <Mapbox.MapView style={styles.container} styleURL={Mapbox.StyleURL.Outdoors} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
