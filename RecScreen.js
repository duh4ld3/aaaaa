import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const RecScreen = () => {
  const navigation = useNavigation();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => null,
    });
  }, [navigation]);

  const goToMicrobasurales = () => {
    navigation.navigate('MicroScreen');
  };

  const goToEstadisticas = () => {
    navigation.navigate('Estadisticas');
  };

  const goToRecoleccion = () => {
    navigation.navigate('Recoleccion');
  };

  const goToReciclaje = () => {
    navigation.navigate('Reciclaje');
  };

  const goToMapScreen = () => {
    navigation.navigate('MapScreen');
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Pantalla de Recolección</Text>
        <Text style={styles.description}>Aquí puedes programar la recolección de materiales reciclables.</Text>
        {/* Aquí va el código del calendario y los campos de descripción */}
      </View>

      <View style={styles.bottomMenu}>
        <TouchableOpacity style={styles.bottomMenuItem} onPress={goToMicrobasurales}>
          <Icon name="camera" size={20} color="#fff" />
          <Text style={styles.bottomMenuItemText}></Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.bottomMenuItem} onPress={goToEstadisticas}>
          <Icon name="bar-chart" size={20} color="#fff" />
          <Text style={styles.bottomMenuItemText}></Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.bottomMenuItem} onPress={goToRecoleccion}>
          <Icon name="truck" size={20} color="#fff" />
          <Text style={styles.bottomMenuItemText}></Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.bottomMenuItem} onPress={goToReciclaje}>
          <Icon name="recycle" size={20} color="#fff" />
          <Text style={styles.bottomMenuItemText}></Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.bottomMenuItem} onPress={goToMapScreen}>
          <Icon name="trash" size={20} color="#fff" />
          <Text style={styles.bottomMenuItemText}></Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  bottomMenu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingBottom: 10,
    backgroundColor: '#f2f2f2',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  bottomMenuItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#27ae60',
    marginHorizontal: 5,
    borderRadius: 10,
  },
  bottomMenuItemText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default RecScreen;
