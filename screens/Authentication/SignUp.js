import React, { Component } from "react";
import {
  Text,
  View,
  StatusBar,
  StyleSheet,
  Image,
  TextInput,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Form, Item, Label, Button } from "native-base";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/Entypo";
import IconTwo from "react-native-vector-icons/MaterialCommunityIcons";
import axios from "axios";





export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      email: "",
      mobile: 0,
      password: "",
      loading: false,
      errorMessage: "",
      errorMessageName: "",
      errorMessagePassword: "",
      birthday: "",
    };
    //this.handleLogin = this.handleLogin.bind(this);
  }


  onSignUp = async () => {
    console.log('------- Sign Up Api Post --------');
    let fd = new FormData();
    fd.append('f_name', 'abcd');
    fd.append('l_name', 'efg');
    fd.append('email', 'abcd@gmail.com');
    fd.append('phone', '00000000000');
    fd.append('password', '1234');
    fd.append('role', 'V');
    const res = await axios
      .post('https://ixiono.com/yolooe/api/SignUp', fd)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }



  render() {
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
                    onChangeText={(value) => this.setState({ userName: value })}
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
                    placeholder="Email"
                    underlineColorAndroid="transparent"
                    onChangeText={(value) => this.setState({ email: value })}
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
                <View style={styles.inputContainer}>
                  <TextInput
                    style={styles.inputs}
                    placeholder="Mobile"
                    underlineColorAndroid="transparent"
                    onChangeText={(value) => this.setState({ mobile: value })}
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
                      borderRadius: 10,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }} onPress={this.onSignUp}>
                    {/* onPress={signUp}> */}
                    <Text style={styles.buttonText}>Sign Up</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#134C94',
  },
  logoContainer: {
    flex: 0.25,
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
    marginTop: 50
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
