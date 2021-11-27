import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const styles = StyleSheet.create({
  textCard: {
    flex: 1,
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#eceff1",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 18,
    fontWeight: "400",
    color: "#34515e",
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default styles;
