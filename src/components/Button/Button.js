import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "./Button.style";

const Button = ({ title, onPress,isActive }) => {
  return (
    <TouchableOpacity style={[styles.button,isActive && styles.buttonTab]} onPress={onPress}>
      <Text style={{ textAlign: "center" }}>{title}</Text>
    </TouchableOpacity>
  );
};
export default Button;
