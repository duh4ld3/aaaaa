import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Video } from 'expo-av';


const IntroScreen = ({ navigation }) => {
  const [isReady, setIsReady] = useState(false);
  const [status, setStatus] = useState({});

  const onPlaybackStatusUpdate = (status) => {
    setStatus(status);
  };

  useEffect(() => {
    if (isReady && status.isLoaded && !status.isPlaying) {
      navigation.navigate('InicioSesion');
    }
  }, [isReady, status]);

  return (
    <View style={styles.container}>
      <Video
        source={require('../assets/ECOlecta.mp4')}
        style={styles.video}
        resizeMode="cover"
        shouldPlay
        isLooping ={false}
        onPlaybackStatusUpdate={onPlaybackStatusUpdate}
        onReadyForDisplay={() => setIsReady(true)}
      />
    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
 
  video: {
    flex: 1,
    width: '100%',
  },
  });

export default IntroScreen;
