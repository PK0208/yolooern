import React, {useState, Component} from 'react';
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
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch} from 'react-redux';
//import { COLORS } from "util/Colors";
//import COLORS from '../../utils/Colors';
//import Fonts from '../../utils/Fonts';
//import { FONTS } from "util/Fonts";
import {Form, Item, Label, Button} from 'native-base';
import {TouchableOpacity} from 'react-native-gesture-handler';
//import { Network } from "network";
//import { inject } from "mobx-react";
//import { STORES } from "store/Type";
//import { _storeData, _retrieveData } from "storage";
//import { ASYNC } from "storage/Type";
import Icon from 'react-native-vector-icons/Entypo';
import axios from 'axios';
//import { color } from 'react-native-reanimated';
import {toogleUser} from '../../store/actions/loginActions';

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      email: '',
      mobile: 0,
      password: '',
      loading: false,
      errorMessage: '',
      errorMessageName: '',
      errorMessagePassword: '',
      birthday: '',
    };
  }

  login = async () => {
    console.log('------LOGIN API POST-------');
    let fd = new FormData();
    fd.append('email', 'abcd@gmail.com');
    fd.append('password', '1234');

    /* console.log('------LOGIN API POST-------', setEmail);
    console.log('------LOGIN API POST-------', this.state.setPassword);
    console.log('------LOGIN API POST-------', fd);
    fd.append('email', 'this.state.setEmail');
    fd.append('password', 'this.state.setPassword'); */

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
        console.log(
          'Response_Data_FirstName',
          response.data.data[0].first_name,
        );
        console.log('Response_Data_id', response.data.data[0].id);
        console.log('Response_Data_Status', response.data.status);
        if (response.data.status === 'true') {
          console.log('navigate to home screen');
          console.log('navigate to home screen', response.data.data[0].email);
          console.log(
            'navigate to home screen',
            response.data.data[0].first_name,
          );
          console.log('navigate to home screen', response.data.data[0].id);
          dispatch(
            toogleUser(
              response.data.data[0].email,
              response.data.data[0].first_name,
              response.data.data[0].id,
            ),
          );
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/images/Curve.png')}
            style={styles.logo}
          />
          <Text
            style={{
              position: 'absolute',
              fontSize: 22,
              color: 'white',
              fontFamily: 'POORICH',
            }}>
            Login
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
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <View
              style={{
                borderColor: 'green',
                flexDirection: 'row',
                borderWidth: 1,
                height: 50,
                width: '65%',
                borderRadius: 20,
                alignItems: 'center',
              }}>
              <View
                style={{
                  justifyContent: 'center',
                  width: '20%',
                  alignItems: 'center',
                }}>
                <Icon name="lock" color="#5CB85C" size={25} />
              </View>

              <TextInput
                style={{width: '80%', height: 50}}
                placeholder="Password"
                placeholderTextColor="#5CB85C"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
              />
            </View>
          </View>
          <View style={{alignItems: 'flex-end', marginTop: 10, width: '65%'}}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Forgot Password')}>
              <Text style={{color: 'red'}}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
          <View style={{alignItems: 'center'}}>
            <TouchableOpacity
              style={{
                paddingHorizontal: width * 0.14,
                paddingVertical: height * 0.02,
                borderRadius: 7,
                alignItems: 'center',
                justifyContent: 'center',
                marginVertical: height * 0.03,
                backgroundColor: '#5CB85C',
              }}
              onPress={checkLoginData}>
              <Text style={{color: 'white', fontSize: width * 0.048}}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{alignItems: 'center', marginBottom: 20}}>
            <Text style={{color: '#5CB85C'}}>Don't Have An Account?</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('SignUp')}>
              <Text style={{color: '#5CB85C'}}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#134C94',
  },
  logo: {
    width: 30,
    height: 30,
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
