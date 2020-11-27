import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
  TouchableOpacity,
  ImageBackground,
  TextInput,
} from 'react-native';
import Appbar from '../Components/Appbar';
import ImageSlider from '../Components/ImageSlider';
import Products from '../Components/ProductsComponent';
import axios from 'axios';
import {Card, CardItem, Body, Text, Header, Title, Fab} from 'native-base';
import home_img from '../assests/home_img.png';
import Icon from 'react-native-vector-icons/AntDesign';

const {height, width} = Dimensions.get('window');

export default class CreateFriends extends React.Component {
  state = {
    color: '#FFFFFF',
    clickFriends: Boolean,
    clickMemories: Boolean,
    clickMessages: Boolean,
    clickServices: Boolean,
    clickTimeline: Boolean,
    clickVault: Boolean,
    colorActive: '#2C3790',
    colorInactive: '#FFFFFF',
  };

  componentDidMount() {
    console.log('--------- CreateFriends -------------');
  }

  handleBackButtonClick() {
    console.log('--------- On Press Back-------------');
    this.props.navigation.goBack(null);
    return true;
  }

  createFriends = () => {
    console.log('Create friends api call');
  };

  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <Header>
          <TouchableOpacity onPress={() => this.handleBackButtonClick()}>
            <Icon
              name={'arrowleft'}
              color="#fff"
              size={25}
              style={{margin: 5, marginTop: 20}}
            />
          </TouchableOpacity>
          <Body style={{flexDirection: 'row', margin: 5}}>
            <Title style={{marginLeft: 80, fontWeight: '500', fontSize: 25}}>
              Create Friend
            </Title>
          </Body>
        </Header>
        <View>
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="Name"
            placeholderTextColor="#9a73ef"
            autoCapitalize="none"
            //onChangeText = {this.handleEmail}
          />

          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="Mobile"
            placeholderTextColor="#9a73ef"
            autoCapitalize="none"
            //onChangeText = {this.handleEmail}
          />

          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="Image upload packge instaler TODO"
            placeholderTextColor="#9a73ef"
            autoCapitalize="none"
            //onChangeText = {this.handleEmail}
          />

          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="Whatsapp"
            placeholderTextColor="#9a73ef"
            autoCapitalize="none"
            //onChangeText = {this.handleEmail}
          />

          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="Face Book ID"
            placeholderTextColor="#9a73ef"
            autoCapitalize="none"
            //onChangeText = {this.handleEmail}
          />

          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="Instagram"
            placeholderTextColor="#9a73ef"
            autoCapitalize="none"
            //onChangeText = {this.handleEmail}
          />
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="Address"
            placeholderTextColor="#9a73ef"
            autoCapitalize="none"
            //onChangeText = {this.handleEmail}
          />
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="DOB"
            placeholderTextColor="#9a73ef"
            autoCapitalize="none"
            //onChangeText = {this.handleEmail}
          />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={{
              backgroundColor: '#2C3790',
              height: 40,
              borderRadius: 5,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={this.createFriends}>
            <Text style={styles.buttonText}>Create</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tinyLogo: {
    width: 50,
    height: 50,
  },
  cardContainer: {
    width: 100,
    height: 100,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    width: 60,
    height: 60,
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: '#7a42f4',
    borderWidth: 1,
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
});
