import React from 'react';
import Colors from './Colors';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

const HomeScreen = ({ navigation }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => null,
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.videoContainer}>
        
      </View>
      <Text style={styles.title}>Bienvenido a Recolecta</Text>
      <Text style={styles.description}>
        La aplicación que te ayuda a reciclar y cuidar el medio ambiente. 1
      </Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Registro')}
        >
          <Text style={styles.buttonText}>Registrarse</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('InicioSesion')}
        >
          <Text style={styles.buttonText}>Iniciar sesión</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.secondary,
    textAlign: 'center',
    marginVertical: 20,
  },
  description: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 30,
  },
  buttonsContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop:80
  },
  button: {
    backgroundColor: Colors.success,
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  buttonText: {
    color: Colors.dark,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeScreen;


