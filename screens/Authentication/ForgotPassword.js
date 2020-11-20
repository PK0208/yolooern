import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import axios from 'axios';
import Toast from 'react-native-simple-toast';
/* import Curve from '../../assets/images/Curve.svg';
import Logo from '../../assets/images/S Logo.svg';
import Lock from '../../assets/images/lock.svg';
 */import {Form, Item, Label, Button} from 'native-base';
import Icon from 'react-native-ionicons';
import {SafeAreaView} from 'react-native-safe-area-context';

//import Toast from 'react-native-toast-message';
//const image = require('../../assets/images/Curve.png');

export default function ForgotPassword({navigation}) {
  const [count, setCount] = useState(0);
  const onPress = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const checkLoginData = () => {
    if (email == '') {
      Toast.show('please enter email');
    } else {
      axios
        .get(
          `https://www.sustowns.com/Sustownsservice/login/?username=${email}&password=${password}`,
        )
        .then((response) => {
          if (response.data['success'] == 1) {
            Toast.show('success');
          } else {
            Toast.show('Wrong Email');
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      {/* <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/images/Curve.png')}
          style={styles.logo}
        />
        <Text style={{position: 'absolute', fontSize: 22, color: 'white'}}>
          Forgot Password
        </Text>
      </View>
      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          top: -20,
        }}>
        <Logo />
      </View>
      <ScrollView>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: height * 0.03,
          }}>
          <View
            style={{
              borderColor: 'green',
              flexDirection: 'row',
              borderWidth: 1,
              height: 50,
              width: '65%',
              borderRadius: 20,
            }}>
            <View
              style={{
                justifyContent: 'center',
                width: '20%',
                alignItems: 'center',
              }}>
              <Icon name="mail" color="#5CB85C" size={25} />
            </View>

            <TextInput
              style={{width: '80%', height: 50}}
              placeholder="Email"
              placeholderTextColor="#5CB85C"
              value={email}
              onChangeText={setEmail}
            />
          </View>
        </View>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity
            style={{
              paddingHorizontal:width*0.06,
              paddingVertical:height*0.023, 
              borderRadius: 7,
              alignItems: 'center',
              justifyContent: 'center',
              marginVertical: height * 0.03,
              backgroundColor: '#5CB85C',
            }}
            >
            <Text style={{color: 'white'}}>Reset Password</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
 */}    </SafeAreaView>
  );
}
const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    height: '40%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: '100%',
    width: '100%',
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
  },
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  },
});
