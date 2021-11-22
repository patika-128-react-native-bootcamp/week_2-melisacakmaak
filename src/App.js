import React, { useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Button from "./components/Button/Button";
import Input from "./components/Input/Input";
import ProductCard from "./components/ProductCard/ProductCard";

export default function App() {
  const [products, setProducts] = useState([]);

  const rendertoDoList = ({ item }) => <ProductCard product={item} />;

  function onAddProduct(product) {
    setProducts([...products, product]);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.button}>
        <Button title="Artan Fiyat" />
        <Button title="Azalan Fiyat" />
        <Button title="Tarih" />
      </View>
      <View style={{ flex: 2 }}>
        <FlatList
          keyExtractor={(item) => item.id}
          data={products}
          renderItem={rendertoDoList}
        />
      </View>
      <Input onAddProduct={onAddProduct} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },
  button: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});
