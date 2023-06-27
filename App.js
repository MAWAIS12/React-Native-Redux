/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Button, Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import Home from './src/screens/Home';
import Header from './src/components/Header';
import Porduct from './src/components/Product';

function App() {
  // return <Home />;

  const Products = [
    {
      name: 'Samsung',
      price: 10000,
      model: 22,
      url: 'https://www.globalbrandsmagazine.com/wp-content/uploads/2023/01/Top-10-Mobile-Brands-in-World.jpg',
    },
    {
      name: 'oppo',
      price: 15000,
      model: 22,
      url: 'https://www.globalbrandsmagazine.com/wp-content/uploads/2023/01/Top-10-Mobile-Brands-in-World.jpg',
    },
    {
      name: 'Iphone',
      price: 20000,
      model: 22,
      url: 'https://www.globalbrandsmagazine.com/wp-content/uploads/2023/01/Top-10-Mobile-Brands-in-World.jpg',
    },
  ];

  return (
    <ScrollView>
      <Header />
      {Products.map(item => (
        <Porduct item={item} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  product: {
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
    marginHorizontal: 10,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  productImage: {
    width: 150,
    height: 100,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 20,
    marginBottom: 5,
  },
});

export default App;
