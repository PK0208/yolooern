import React, { useState, Component } from 'react';
import {
  Text,
  View,
  StatusBar,
  StyleSheet,
  Image,
  TextInput,
  Platform,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';
//import { COLORS } from "util/Colors";
//import COLORS from '../../utils/Colors';
//import Fonts from '../../utils/Fonts';
//import { FONTS } from "util/Fonts";
import { Form, Item, Label, Button } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
//import { Network } from "network";
//import { inject } from "mobx-react";
//import { STORES } from "store/Type";
//import { _storeData, _retrieveData } from "storage";
//import { ASYNC } from "storage/Type";
import Icon from 'react-native-vector-icons/Entypo';
import axios from 'axios';
//import { color } from 'react-native-reanimated';
import { toogleUser } from '../../store/actions/loginActions';

export default function LoginScreen({ navigation }) {
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);
  const onPress = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const { height, width } = Dimensions.get('window');


  login = async () => {
    console.log('------LOGIN API POST-------');
    let fd = new FormData();
    fd.append('email', 'abcd@gmail.com');
    fd.append('password', '1234');
    let data = {
      email: 'abc@gmail.com',
      password: '1234',
    };
    const res = await axios
      .post('https://ixiono.com/yolooe/api/Login', fd)
      .then((response) => {
        console.log('Response_Data', response.data);
        console.log('Response_Data', response.data.data);
        console.log('Response_Data_email', response.data.data[0].email);
        console.log('Response_Data_Status', response.data.status);
        if (response.data.status === 'true') {
          console.log('navigate to home screen');
          console.log('navigate to home screen', response.data.data[0].email);
          dispatch(
            toogleUser(
              response.data.data[0].email,
            ),
          );
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  /* let fd = new FormData();
    fd.append('email','abc@gmail.com')
    fd.append('password','1234')
    let data = {
      email:'abc@gmail.com',
      password:'1234'
    }
    const res = await axios
      .post('https://ixiono.com/yolooe/api/Login',fd)
      .then((response) => {
        console.log(response.data)
      })
      .catch((error) => {
        console.log(error);
      }); */

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>Yolooe</Text>
        </View>
        <View style={styles.loginContainer}>
          <View style={styles.contentContainer}>
            <Form>
              <Text style={styles.title}>
                Enter your login info to sign in to your account
              </Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.inputs}
                  placeholder="User Name"
                  underlineColorAndroid="transparent"
                  onChangeText={(value) => this.setState({ email: value })}
                />
                <View style={styles.iconInside}>
                  <Icon
                    name={'user'}
                    color="#fff"
                    size={25}
                    style={{ margin: 5 }}
                  />
                </View>
              </View>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.inputs}
                  placeholder="Password"
                  underlineColorAndroid="transparent"
                  onChangeText={(value) => this.setState({ password: value })}
                />
                <View style={styles.iconInside}>
                  <Icon
                    name={'lock'}
                    color="#fff"
                    size={20}
                    style={{ margin: 5 }}
                  />
                </View>
              </View>
            </Form>
            <View style={{ flexDirection: 'column' }}>
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#2C3790',
                    height: 40,
                    borderRadius: 5,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  onPress={login}>
                  <Text style={styles.buttonText}>Sign In</Text>
                </TouchableOpacity>
              </View>
              <Text style={styles.title}>
                <Text>Don't have an account ?
              <Text styles={{ color: '#2C3790' }} numberOfLines={1}>Click here</Text>
                </Text>
              </Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#134C94',
  },
  logoContainer: {
    flex: 1,
    margin: 20,
    backgroundColor: '#134C94',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoText: {
    fontSize: 24,
    color: 'white',
  },
  loginContainer: {
    flex: 1,
    backgroundColor: 'white',
  },

  contentContainer: {
    flex: 2,
    backgroundColor: '#fff',
    justifyContent: 'center',
    borderRadius: 25,
  },
  title: {
    //fontFamily: FONTS.titleSemiBold,
    fontSize: 16,
    lineHeight: 20,
    marginLeft: 45,
    marginBottom: 20,
    color: '#2C3790',
  },
  label: {
    //fontFamily: FONTS.contentRegular,
    fontSize: 12,
  },
  input: {
    //fontFamily: FONTS.contentRegular,
    fontSize: 16,
    paddingTop: 5,
    paddingBottom: 0,
    color: '#000',
    alignSelf: 'flex-start',
  },
  buttonContainer: {
    paddingHorizontal: 125,
    paddingBottom: 35,
    borderRadius: 45,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    //fontFamily: FONTS.titleMedium,
  },
  forgotText: {
    fontSize: 14,
    //fontFamily: FONTS.titleMedium,
    color: '#242424',
    textAlign: 'center',
  },
  signUpText: {
    fontSize: 14,
    //fontFamily: FONTS.titleMedium,
    color: '#134C94',
    textAlign: 'center',
  },
  error: {
    textAlign: 'center',
    marginTop: 15,
    fontSize: 12,
    //fontFamily: FONTS.titleMedium,
    color: 'red',
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    borderBottomWidth: 1,
    width: 300,
    height: 40,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 35,
    elevation: 5,
  },
  inputs: {
    height: 40,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1,
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginRight: 15,
    justifyContent: 'center',
    borderColor: '#2C3790',
  },
  iconInside: {
    borderWidth: 1,
    backgroundColor: '#134C94',
    justifyContent: 'center',
    height: 43,
    width: 43,
  },
});
