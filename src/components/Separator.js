import React from "react";
import { StyleSheet, View } from "react-native";

const Separator = () => <View style={ styles.root } />;

const styles = StyleSheet.create({
  root: {
    width: "100%",
    height: 12,
  },
});

export default Separator;