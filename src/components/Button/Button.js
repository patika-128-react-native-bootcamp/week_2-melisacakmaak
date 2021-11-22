import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./Button.style";

const Button = ({title}) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={{ textAlign: "center" }}>{title}</Text>
    </TouchableOpacity>
  );
};
export default Button;
