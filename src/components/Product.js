import React, {useEffect, useState} from 'react';
import {Button, Image, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {AddToCart} from '../redux/actions/action';

const Porduct = props => {
  const item = props.item;
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.reducer);
  const [addedInCart, setIsAdded] = useState(false);

  const handleAddToCart = item => {
    dispatch(AddToCart(item));
  };

  useEffect(() => {
    if (cartItems && cartItems.length) {
      cartItems.forEach(element => {
        if (element.name === item.name) {
          setIsAdded(true);
        }
      });
    }
  }, [cartItems]);

  return (
    <View style={styles.product}>
      <Image style={styles.productImage} source={{uri: item?.url}} />
      <View style={styles.productInner}>
        <Text style={styles.title}>{item?.name}</Text>
        <Text>Price: {item?.price}</Text>
        <Text>Model: {item?.model}</Text>
        {addedInCart ? (
          <Button
            title="Remove From Cart"
            onPress={() => handleAddToCart(item)}
          />
        ) : (
          <Button title="Add To Cart" onPress={() => handleAddToCart(item)} />
        )}
      </View>
    </View>
  );
};
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
export default Porduct;
