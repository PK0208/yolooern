import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {useSelector} from 'react-redux';


const ProductDetails = ({route, navigation}) => {
  const id = useSelector(state => state.login.userName);
  const {itemId} = route.params;
  console.log('id',id)
  return (
    <View style={styles.center}>
      <Text>This is the about screen{itemId}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
});

export default ProductDetails;
