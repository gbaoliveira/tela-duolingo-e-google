import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function Cam() {
  return (
    <View style={styles.container}>
    <Image style={styles.camera} source={require('../assets/camera.png')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 300,
  },
  camera: { 
    width: 50,
    height: 50,
}
});
