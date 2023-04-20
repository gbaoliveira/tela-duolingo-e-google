import * as React from 'react';
import { View, StyleSheet, Image } from 'react-native';

export default function Dot() {
  return (
    <View style={styles.container}>
    <Image style={styles.dot} source={require('../assets/dot.png')} />
    </View>
  );
}

const styles = StyleSheet.create({
  dot: { 
    width: 50,
    height: 50,
}
});
