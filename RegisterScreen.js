import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { Input, Button, Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native'; 
import Colors from './Colors';

const RegisterScreen = () => {
  const [Name, setName] = useState('');
  const [FullName,setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigation = useNavigation();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => null,
    });
  }, [navigation]);

  const handleRegister = () => {
    if (!email) {
      setErrorMessage('Escriba su correo');
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setErrorMessage('Digite un correo válido');
    } else if (!password) {
      setErrorMessage('Escriba su contraseña');
    } else if (password.length < 6) {
      setErrorMessage('Su contraseña debe tener al menos 6 caracteres');
    } else {
      // Register user
      navigation.navigate('RecScreen'); 
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Registro de usuario</Text>

        <Input
          placeholder="Nombres"
          leftIcon={<Icon color="#27ae60" name='user' type='font-awesome' />}
          value={Name}
          onChangeText={setName}
        />
        <Input 
          placeholder="Apellidos"
          leftIcon={<Icon color="#27ae60" name='user' type='font-awesome'/>}
          value={FullName}
          onChangeText={setFullName}
        />
        
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
          onChangeText={(value) => setPassword(value)}
          secureTextEntry={true}
          autoCapitalize="none"
        />
        
        {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Registrarse</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 30,
    color: Colors.darkGreen,
  },
  button: {
    backgroundColor:Colors.success,
    borderRadius: 25,
    paddingVertical: 13,
    paddingHorizontal: 30,
    marginTop: 40,
  },
  buttonText: {
    color: Colors.darkGreen,
    fontSize: 18,
    fontWeight: 'bold',
  
  },
});

export default RegisterScreen;
