import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "./Input.styles";

const Input = ({ onAddProduct }) => {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const date = new Date();

  function handleAddList() {
    onAddProduct({ productName, productPrice,date });
    setProductName("");
    setProductPrice("");
  }

  return (
    <View style={styles.container}>
      <View style={{ paddingVertical: 10 }}>
        <Text style={{ fontSize: 18, fontWeight: "600" }}>Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Add Product Name..."
          onChangeText={setProductName}
          value={productName}
        />
      </View>
      <View style={{ paddingVertical: 10 }}>
        <Text style={{ fontSize: 18, fontWeight: "600" }}>Price</Text>
        <TextInput
          style={styles.input}
          placeholder="Add Product Price..."
          onChangeText={setProductPrice}
          value={productPrice}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleAddList}>
        <Text style={styles.button_text}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Input;
