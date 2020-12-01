import React, {Component} from 'react';
import {
  View,
  StatusBar,
  StyleSheet,
  Image,
  TextInput,
  Platform,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Form, Item, Label, Button, Text} from 'native-base';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Entypo';
import IconTwo from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from 'axios';
import Toast from 'react-native-simple-toast';

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
    //this.handleLogin = this.handleLogin.bind(this);
  }

  onSignUp = async () => {
    console.log('------- Sign Up Api Post --------');
    let fd = new FormData();
    console.log('userName', this.state.userName);
    console.log('email', this.state.email);
    console.log('mobile', this.state.mobile);
    console.log('password', this.state.password);
    console.log('userName', this.state.userName);
    console.log('userName', this.state.userName);
    fd.append('f_name', this.state.userName);
    fd.append('l_name', this.state.userName);
    fd.append('email', this.state.email);
    fd.append('phone', this.state.mobile);
    fd.append('password', this.state.password);
    fd.append('role', 'V');
    console.log('fd', fd);
    const res = await axios
      .post('https://ixiono.com/yolooe/api/SignUp', fd)
      .then((response) => {
        console.log('data', response.data);
        console.log('message', response.data.message);
        let msg = response.data.message;
        Toast.show(msg);
        this.props.navigation.navigate('Login');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.logoContainer}>
          {/* <Text style={styles.logoText}>Yolooe</Text> */}
          {/* Image */}
          <Image
            source={require('../../assests/yoloee.png')}
            style={styles.logo}
          />
        </View>
        <View style={styles.contentContainer}>
          <View style={{justifyContent: 'center', marginBottom: 10}}>
            <Text style={styles.title}>
              Enter your information below to create new account
            </Text>
          </View>

          <Form>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.inputs}
                placeholder="User Name"
                underlineColorAndroid="transparent"
                onChangeText={(value) => this.setState({userName: value})}
              />
              <View style={styles.iconInside}>
                <Icon
                  name={'user'}
                  color="#fff"
                  size={25}
                  style={{margin: 5}}
                />
              </View>
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.inputs}
                placeholder="Email"
                underlineColorAndroid="transparent"
                onChangeText={(value) => this.setState({email: value})}
              />
              <View style={styles.iconInside}>
                <Icon
                  name={'mail'}
                  color="#fff"
                  size={20}
                  style={{margin: 5}}
                />
              </View>
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.inputs}
                placeholder="Mobile"
                underlineColorAndroid="transparent"
                onChangeText={(value) => this.setState({mobile: value})}
              />
              <View style={styles.iconInside}>
                <Icon
                  name={'mobile'}
                  color="#fff"
                  size={20}
                  style={{margin: 5}}
                />
              </View>
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.inputs}
                placeholder="Password"
                underlineColorAndroid="transparent"
                onChangeText={(value) => this.setState({password: value})}
              />
              <View style={styles.iconInside}>
                <Icon
                  name={'lock'}
                  color="#fff"
                  size={20}
                  style={{margin: 5}}
                />
              </View>
            </View>
          </Form>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Button
              primary
              textStyle={{color: '#fff'}}
              style={{
                borderRadius: 10,
                height: 40,
                width: 80,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={this.onSignUp}>
              <Text uppercase={false}>Signup</Text>
            </Button>
          </View>
          <View style={{flexDirection: 'row'}}>
            {/* <Text>Try in other ways</Text> */}
            {/* <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
              <Text> click here</Text>
            </TouchableOpacity> */}
          </View>
          <View style={{flexDirection: 'row', marginTop: 5}}>
            <Icon
              name={'facebook-with-circle'}
              color="#2C3790"
              size={50}
              style={{margin: 5}}
            />

            <Icon
              name={'google--with-circle'}
              color="#2C3790"
              size={50}
              style={{margin: 5}}
            />
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
  logo: {
    width: '85%',
    height: '40%',
  },
  logoText: {
    fontSize: 24,
    color: 'white',
  },
  loginContainer: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 50,
  },

  contentContainer: {
    flex: 0.75,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
  },
  title: {
    //fontFamily: FONTS.titleSemiBold,
    fontSize: 20,
    //lineHeight: 20,
    marginLeft: 45,
    marginBottom: 20,
    color: '#2C3790',
    fontFamily: 'Roboto- Bold',
    fontWeight: '500',
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
