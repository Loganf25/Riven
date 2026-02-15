import { useQuery, useRealm } from "@realm/react";
import Mapbox from "@rnmapbox/maps";
import { SafeAreaView } from "react-native-safe-area-context";
import { MapMarker } from "../../src/models/MapMarker";
import { StyleSheet, Text } from "react-native";


export default function Index() {
  const realm = useRealm();
  const markerItems = useQuery(MapMarker);


  return (
    <SafeAreaView className="flex-1" >

      <Mapbox.MapView style={styles.container}>
        <Mapbox.Camera
        zoomLevel={12}
        centerCoordinate={[-74.0060, 40.7128]}/>

      </Mapbox.MapView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    }
});