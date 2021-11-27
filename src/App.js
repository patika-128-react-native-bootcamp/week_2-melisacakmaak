import React, { useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Button from "./components/Button/Button";
import Input from "./components/Input/Input";
import ProductCard from "./components/ProductCard/ProductCard";

export default function App() {
  const [products, setProducts] = useState([]);
  const [type, setType] = useState(0);

  const rendertoDoList = ({ item }) => <ProductCard product={item} />;

  function onAddProduct(product) {
    setProducts([...products, product]);
  }

  products.sort(function (a, b) {
    switch (type) {
      case 0:
        return a.productPrice - b.productPrice;
      case 1:
        return b.productPrice - a.productPrice;
      case 2:
        return b.date - a.date;
      default:
        break;
    }
  });

  let filterButton = ["Artan Fiyat", "Azalan Fiyat", "Tarih"];
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.button}>
        {filterButton.map((item, index) => (
          <Button
            title={item}
            onPress={() => setType(index)}
            isActive={index == type}
            key={index}
          />
        ))}
      </View>

      <FlatList
        keyExtractor={(item, index) => {
          return index.toString();
        }}
        data={products}
        renderItem={rendertoDoList}
      />
      <Input onAddProduct={onAddProduct} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingVertical: 10,
  },
});
