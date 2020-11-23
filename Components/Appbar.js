import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from 'react-native';
//import Icon from 'react-native-ionicons';
import Icon from 'react-native-vector-icons/Entypo';

export default function Appbar(props) {
  const onPress = () => props.navigation.openDrawer();
  return (
    <View style={styles.appBarContainer}>
      <TouchableOpacity onPress={onPress}>
        <Icon name="menu" color="white" />
      </TouchableOpacity>
      <Text style={styles.titleText}>Home</Text>

      {/* <Icon name="cart" color="white" /> */}
    </View>
  );
}
const { height, width } = Dimensions.get('window');
const styles = StyleSheet.create({
  appBarContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20 /*,borderBottomLeftRadius:30*/,
    alignItems: 'center',
    backgroundColor: '#5CB85C',
    height: height * 0.082065217391,
    justifyContent: 'space-between',
  },
  titleText: {
    color: 'white',
    fontSize: 25
  },
});
