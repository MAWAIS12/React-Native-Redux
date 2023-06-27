import React, {useState} from 'react';
import {
  Button,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';

const Home = () => {
  const [counter, setCounter] = useState(0);

  const increament = () => {
    setCounter(counter + 1);
  };

  const decreament = () => {
    setCounter(counter - 1);
  };

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 30}}>{counter}</Text>
      <TouchableOpacity style={styles.btn} onPress={increament}>
        <Text style={styles.text}>Increament</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={decreament}>
        <Text style={styles.text}>Decreament</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    marginTop: 10,
    marginBottom: 10,
    padding: 10,
    backgroundColor: 'red',
  },
  text: {
    color: '#fff',
  },
});
export default Home;
