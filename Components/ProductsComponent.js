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

export default function Friends(props) {
  //const onPress = () => props.navigation.openDrawer();

  return (
    <View>
      <Text>Hi friends Component</Text>
    </View>
  );
}
const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
  appBarContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20 /*,borderBottomLeftRadius:30*/,
    alignItems: 'center',
    backgroundColor: '#2C3790',
    height: height * 0.082065217391,
  },
  titleText: {
    color: 'white',
    fontSize: 25,
    margin: 15,
    marginLeft: 100,
  },
});
