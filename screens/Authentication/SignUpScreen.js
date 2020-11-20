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
/* import axios from 'axios';
import Toast from 'react-native-simple-toast';
import Curve from '../../assets/images/Curve.svg';
import Logo from '../../assets/images/S Logo.svg';
import Lock from '../../assets/images/lock.svg'; */
import {Form, Item, Label, Button} from 'native-base';
import Icon from 'react-native-ionicons';
import {SafeAreaView} from 'react-native-safe-area-context';
//import DropDownPicker from 'react-native-dropdown-picker';
//import Toast from 'react-native-toast-message';
//const image = require('../../assets/images/Curve.png');

export default class SignUpScreen extends React.Component {
  state = {
    email: '',
    country: 'uk',
  };
  render() {
    return (
      <SafeAreaView style={styles.container}>
       {/*  <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/images/Curve.png')}
            style={styles.logo}
          />
          <Text style={{position: 'absolute', fontSize: 22, color: 'white'}}>
            Signup
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
                <Icon name="person" color="#5CB85C" size={25} />
              </View>
              <TextInput
                style={{width: '80%', height: 50}}
                placeholder="Name"
                placeholderTextColor="#5CB85C"
              />
            </View>
          </View>
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
              />
            </View>
          </View>
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
                <Icon name="call" color="#5CB85C" size={25} />
              </View>
              <TextInput
                style={{width: '80%', height: 50}}
                placeholder="Mobile"
                placeholderTextColor="#5CB85C"
              />
            </View>
          </View>
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
                <Icon name="lock" color="#5CB85C" size={25} />
              </View>
              <TextInput
                style={{width: '80%', height: 50}}
                placeholder="Password"
                placeholderTextColor="#5CB85C"
              />
            </View>
          </View>
          <View style={{alignItems: 'center', height: 150}}>
            <View style={{width: '65%'}}>
              <DropDownPicker
                items={[
                  {
                    label: 'USA',
                    value: 'usa',
                  },
                  {
                    label: 'UK',
                    value: 'uk',
                  },
                  {
                    label: 'France',
                    value: 'france',
                  },
                  {
                    label: 'UK',
                    value: 'uk',
                  },
                  {
                    label: 'France',
                    value: 'france',
                  },
                ]}
                searchable={true}
                searchablePlaceholder="Search for an item"
                defaultValue={this.state.country}
                containerStyle={{height: 50}}
                style={{backgroundColor: '#fafafa'}}
                itemStyle={{
                  justifyContent: 'flex-start',
                }}
                dropDownStyle={{backgroundColor: '#fafafa'}}
                onChangeItem={(item) =>
                  this.setState({
                    country: item.value,
                  })
                }
              />
            </View>
          </View>
          <View style={{alignItems: 'center', height: 150}}>
            <View style={{width: '65%'}}>
              <DropDownPicker
                items={[
                  {
                    label: 'USA',
                    value: 'usa',
                  },
                  {
                    label: 'UK',
                    value: 'uk',
                  },
                  {
                    label: 'France',
                    value: 'france',
                  },
                  {
                    label: 'UK',
                    value: 'uk',
                  },
                  {
                    label: 'France',
                    value: 'france',
                  },
                ]}
                searchable={true}
                searchablePlaceholder="Search for an item"
                defaultValue={this.state.country}
                containerStyle={{height: 50}}
                style={{backgroundColor: '#fafafa'}}
                itemStyle={{
                  justifyContent: 'flex-start',
                }}
                dropDownStyle={{backgroundColor: '#fafafa'}}
                onChangeItem={(item) =>
                  this.setState({
                    country: item.value,
                  })
                }
              />
            </View>
          </View>
          <View style={{alignItems: 'center'}}>
            <TouchableOpacity
              style={{
                paddingHorizontal: width * 0.06,
                paddingVertical: height * 0.023,
                borderRadius: 7,
                alignItems: 'center',
                justifyContent: 'center',
                marginVertical: height * 0.03,
                backgroundColor: '#5CB85C',
              }}>
              <Text style={{color: 'white'}}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </ScrollView> */}
      </SafeAreaView>
    );
  }
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
