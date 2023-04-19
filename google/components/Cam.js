import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function Cam() {
  return (
    <View style={styles.container}>
    <Image style={styles.camera} source={require('../assets/camera.png')} />
    <Image style={styles.camera} source={require('../assets/dot.png')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 200,
  },
  camera: { 
    width: 100,
    height: 100,
}
});
