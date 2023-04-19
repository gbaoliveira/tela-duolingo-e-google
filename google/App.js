import React, {useState} from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';
import Cam from './components/Cam';

export default function App() {

  const [text, setText] = useState('');
  const [text2, setText2] = useState('');

  return (
    <View style={styles.container}>
        <Cam />
        <AssetExample />
        <TextInput
        style={styles.input}
        placeholder="Search or type URL"
        onChangeText={newText => setText(newText)}
        defaultValue={text}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#fff',
    padding: 8,
  },
    input: {
    width: 380,
    height: 65,
    fontSize: 20,
    backgroundColor: '#fff',
    borderColor: '#b5b5b5',
    borderRadius: 3,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  }
});
