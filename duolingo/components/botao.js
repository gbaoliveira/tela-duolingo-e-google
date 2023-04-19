import React from "react";
import { View, Button, StyleSheet } from "react-native";

const Botao = () => {
  return (
    <View style={styles.screenContainer}>
      <Button color='#639800' title="Get started" />
      <View style={styles.espaco}>
      <Button color='#639800' title="I already have an account" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    justifyContent: "center",
    padding: 10
  },
    espaco: {
    marginTop: 10
  }
});

export default Botao;