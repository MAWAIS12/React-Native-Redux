import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {reducer} from '../redux/reducers/reducer';

const Header = () => {
  const cartData = useSelector(state => state.reducer);
  const [cartItems, setcartItems] = useState(0);
  useEffect(() => {
    setcartItems(cartData.length);
  }, [cartData]);

  return (
    <View
      style={{
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        padding: 10,
        marginBottom: 10,
        backgroundColor: 'orange',
      }}>
      <Text style={{fontSize: 30}}>{cartItems}</Text>
    </View>
  );
};
export default Header;
