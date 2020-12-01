import React, {useState, Component} from 'react';
import {
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
import {Form, Item, Label, Button, Text} from 'native-base';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Entypo';
import axios from 'axios';
import {toogleUser} from '../../store/actions/loginActions';

export default function LoginScreen({navigation}) {
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);
  const onPress = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const {height, width} = Dimensions.get('window');

  login = async () => {
    console.log('------LOGIN API POST-------');
    let fd = new FormData();
    /* fd.append('email', 'abcd@gmail.com');
    fd.append('password', '1234'); */

    console.log('Email, Password', email, password);

    /* console.log('------LOGIN API POST-------', setEmail);
    console.log('------LOGIN API POST-------', this.state.setPassword);
    console.log('------LOGIN API POST-------', fd);*/
    fd.append('email', email);
    fd.append('password', password);

    console.log('Email, Password---FormData', fd);
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

  toSignUp = async () => {
    console.log('navigate to signup');
  };

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
            Enter your login info to sign in to your account
          </Text>
        </View>
        <Form style={{marginTop: 20}}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputs}
              placeholder="User Name"
              underlineColorAndroid="transparent"
              /* onChangeText={(value) => this.setState({setEmail: value})} */
              onChangeText={setEmail}
            />
            <View style={styles.iconInside}>
              <Icon name={'user'} color="#fff" size={25} style={{margin: 5}} />
            </View>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputs}
              placeholder="Password"
              underlineColorAndroid="transparent"
              secureTextEntry={true}
              /*  onChangeText={(value) => this.setState({setPassword: value})} */
              onChangeText={setPassword}
            />
            <View style={styles.iconInside}>
              <Icon name={'lock'} color="#fff" size={20} style={{margin: 5}} />
            </View>
          </View>
        </Form>
        <View
          style={{justifyContent: 'center', alignItems: 'center', margin: 15}}>
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
            onPress={login}>
            <Text uppercase={false}>Sign in</Text>
          </Button>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text>Don't have an account ?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text> click here</Text>
          </TouchableOpacity>
        </View>
        {/* <Text>Try in other ways</Text> */}
        <View style={{flexDirection: 'row'}}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#134C94',
  },
  logo: {
    width: '85%',
    height: '40%',
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
    flex: 3,
    backgroundColor: '#fff',
    justifyContent: 'center',
    //borderRadius: 35,
    alignItems: 'center',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
  },
  title: {
    fontFamily: 'Roboto-BoldI',
    fontSize: 20,
    marginLeft: 45,
    //marginBottom: 20,
    color: '#2C3790',
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
    /* paddingHorizontal: 125,
    paddingBottom: 35, */
    /* width: 80,
    marginLeft: 120, */
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
