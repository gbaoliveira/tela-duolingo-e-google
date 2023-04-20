import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function AssetExample() {
  return (
    <View style={styles.container}>
      <Image style={styles.icon} source={require('../assets/duolingo.png')} />
            <Image style={styles.logo} source={require('../assets/logo.png')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40,
  },
  logo: {
    height: 86,
    width: 340,
  },
   icon: {
    height: 128,
    width: 128,
    marginTop: 90,
    marginBottom: 10
  }
});
