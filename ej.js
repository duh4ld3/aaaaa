import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Ejemplo de uso de FontAwesome, puedes utilizar la librería de íconos que prefieras

const RecyclingScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Cómo reciclar</Text>

      <View style={styles.card}>
        <Image source={require('../assets/plastic.jpg')} style={styles.image} />
        <Text style={styles.cardTitle}>Plástico</Text>
        <Text style={styles.cardDescription}>
          


Antes de tirarlo, asegúrate de limpiar cualquier residuo o etiquetas que puedan estar adheridos. 

Separa los tipos de plástico: Si es posible, clasifica los diferentes tipos de plástico, como botellas o envases, para facilitar su reciclaje.

Deposita el plástico: Coloca los materiales de plástico limpios y separados en el contenedor. Asegúrate de no obstruir la entrada y cerrar correctamente.
        </Text>
        {/* Agrega aquí un reproductor de video o enlaces a videos explicativos */}
      </View>

      <View style={styles.card}>
        <Image source={require('../assets/paper.jpg')} style={styles.image} />
        <Text style={styles.cardTitle}>Papel y cartón</Text>
        <Text style={styles.cardDescription}>
           información sobre cómo reciclar papel y cartón.
        </Text>
        {/* Agrega aquí un reproductor de video o enlaces a videos explicativos */}
      </View>

      {/* Agrega más tarjetas para otros materiales */}

      <View style={styles.card}>
        <Image source={require('../assets/glass.jpg')} style={styles.image} />
        <Text style={styles.cardTitle}>Vidrio</Text>
        <Text style={styles.cardDescription}>
           información sobre cómo reciclar vidrio.
        </Text>
        {/* Agrega aquí un reproductor de video o enlaces a videos explicativos */}
      </View>

      {/* Puedes agregar más tarjetas para otros materiales */}

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333', // Color de texto principal
  },
  card: {
    marginBottom: 16,
    backgroundColor: '#FFF', // Color de fondo de las tarjetas
    borderRadius: 8,
    padding: 16,
    elevation: 3, // Sombra en Android
    shadowColor: '#000', // Sombra en iOS
    shadowOpacity: 0.3,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 8,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333', // Color de texto secundario
  },
  cardDescription: {
    fontSize: 16,
    marginBottom: 8,
    color: '#666', // Color de texto descriptivo
  },
});

export default RecyclingScreen;