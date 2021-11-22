import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./ProductCard.styles";

const ProductCard = ({ product }) => {
  const { productPrice, productName } = product;
  return (
    <View style={styles.textCard}>
      <Text style={styles.title}> {productName}</Text>
      <Text style={styles.price}> {productPrice} TL</Text>
    </View>
  );
};

export default ProductCard;
