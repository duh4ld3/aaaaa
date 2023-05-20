import React, { useEffect, useState } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Constants from 'expo-constants';

const MapScreen = () => {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [distance, setDistance] = useState(null);

  useEffect(() => {
    const simulateTruckLocation = () => {
      const truckLocation = {
        latitude: -40.3167,
        longitude: -72.9667,
      };
      setCurrentLocation(truckLocation);

      // Calcular la distancia entre la casa y el camión
      const homeLocation = {
        latitude:  -40.34019002199562,
        longitude: -72.95032027834786,
      };
      const calculatedDistance = calculateDistance(homeLocation, truckLocation);
      setDistance(calculatedDistance);
    };

    simulateTruckLocation();
  }, []);

  // Función para calcular la distancia entre dos coordenadas en kilómetros
  const calculateDistance = (start, end) => {
    const lat1 = start.latitude;
    const lon1 = start.longitude;
    const lat2 = end.latitude;
    const lon2 = end.longitude;

    const R = 6371; // Radio de la Tierra en kilómetros
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;

    return distance.toFixed(2); // Redondear la distancia a 2 decimales
  };

  // Función para convertir grados a radianes
  const toRad = (value) => {
    return (value * Math.PI) / 180;
  };

  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={{ latitude: -40.3167, longitude: -72.9667, latitudeDelta: 0.02, longitudeDelta: 0.02 }}>
        {currentLocation && (
          <Marker coordinate={currentLocation} title="Camión" description={`Distancia: ${distance} km`}>
            <Image source={require('../assets/truck.png')} style={styles.truckIcon} />
          </Marker>
        )}
        <Marker coordinate={{ latitude: -40.34019002199562, longitude: -72.95032027834786 }} title="Mi Casa">
          <Image source={require('../assets/home.png')} style={styles.homeIcon} />
        </Marker>
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#fff',
  },
  map: {
    flex: 1,
  },
  truckIcon: {
    width: 40,
    height: 40,
  },
  homeIcon: {
    width: 40,
    height: 40,
  },
});

export default MapScreen;



