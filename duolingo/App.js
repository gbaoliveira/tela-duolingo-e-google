import * as React from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity, } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';
import Botao from './components/botao';


export default function App() {  
  return (
    
    <View style={styles.container}>
        <AssetExample />
        <Text style={styles.paragraph}>
        Learn language for free.
      </Text>
      <Text style={styles.paragraph2}>
        Forever.
      </Text>
      <Botao />
    </View>
    
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    color: '#a1a1a1',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  paragraph2: {
    marginBottom: 150,
    color: '#a1a1a1',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
