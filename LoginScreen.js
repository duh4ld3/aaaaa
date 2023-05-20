import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Input, Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

import Colors from './Colors';
import LogoImage from '../assets/dibujito.jpg';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate('RecScreen');
    
  };

  const handleRegister = () => {
    navigation.navigate('Registro');
  };

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => null,
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={LogoImage} style={styles.logo} />

      <Text style={styles.title}>Inicio Sesion</Text>
      <Text style={styles.description}>RecolectApp </Text>

      <Input
        placeholder="Correo electrónico"
        leftIcon={<Icon color="#27ae60" name='envelope' type='font-awesome' />}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Input
        placeholder="Contraseña"
        leftIcon={<Icon color="#27ae60" name='lock' type='font-awesome' />}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        autoCapitalize="none"
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Iniciar sesión</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.registerLink} onPress={handleRegister}>
        <Text style={styles.registerText}>¿No tienes una cuenta? Regístrate aquí</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 250,
    height: 250,
    marginBottom: 30,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    color: Colors.darkGreen,
  },
  description: {
    fontSize: 16,
    marginBottom: 30,
    color: Colors.gray,
  },
  button: {
    backgroundColor: Colors.success,
    borderRadius: 25,
    paddingVertical: 13,
    paddingHorizontal: 30,
    marginTop: 20,
  },
  buttonText: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
  registerLink: {
    marginTop: 10,
  },
  registerText: {
    fontSize: 16,
    color: Colors.darkGreen,
  },
});

export default LoginScreen;


