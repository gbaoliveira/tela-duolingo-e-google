import React from "react";
import { View, StyleSheet, TouchableOpacity, Text} from "react-native";

const Botao = () => {
  return (
    <View style={styles.screenContainer}>
      <TouchableOpacity style={{ height: 70, backgroundColor:'#639800' , alignItems: 'center'}}>
      <Text style={{color: '#fff', marginTop: 20, fontSize: 20}}>GET STARTED</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ height: 70, backgroundColor:'#fff', alignItems: 'center' , marginTop: 20, borderWidth: 1, borderColor:'#b5b5b5' }}>
      <Text style={{color: '#639800', marginTop: 20, fontSize: 20}}>I ALREADY HAVE AN ACCOUNT</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    justifyContent: "center",
    padding: 10
  },
});

export default Botao;