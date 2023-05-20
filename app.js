import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Image, Text, View, StyleSheet } from 'react-native';


const Stack = createStackNavigator();

const LogoTitle = () => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Image
        source={require('./assets/Logotipo.jpg')}
        style={{ width: 50, height: 50, resizeMode: 'contain', marginTop: 5 }}
      />
      <Text style={{ marginLeft: 10, fontSize: 18 }}>RecolectApp</Text>
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitle: props => <LogoTitle {...props} />,
          headerStyle: { backgroundColor: '#A4DFAA' }, 
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen name='Intro' component={IntroScreen} />
      
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    marginTop: 5,
  },
  logoText: {
    marginLeft: 10,
    fontSize: 18,
  },
  header: {
    backgroundColor: '#fff',
  },
});

export default App;


