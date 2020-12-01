import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import Appbar from '../Components/Appbar';
import ImageSlider from '../Components/ImageSlider';
import Products from '../Components/ProductsComponent';
import axios from 'axios';
import {Card, CardItem, Body, Text} from 'native-base';
import home_img from '../assests/home_img.png';
import Icon from 'react-native-vector-icons/EvilIcons';
//import store from '../utils/commonFunctions.js';

const {height, width} = Dimensions.get('window');

export default class ProductsComponent extends React.Component {
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
    console.log('--------- HomeScreen -------------');
    /* const id = useSelector((state) => state.login.id);
    console.log('--------- HomeScreen -------------', id); */
    //this.storeFunction();
  }

  /* storeFunction = () => {
    console.log('Store Function from Home');
    return store();
  }; */

  onClickFriends = () => {
    this.setState({clickFriends: false});
    console.log('on Click Friends');
    this.setState({clickFriends: true});
    //navigation.navigate('SignUp');
    this.props.navigation.navigate('Friends');
  };

  onClickMemories = () => {
    this.setState({clickMemories: false});
    console.log('on Click memories');
    this.setState({clickMemories: true});
  };

  onClickMessages = () => {
    this.setState({clickMessages: false});
    console.log('on Click messages');
    this.setState({clickMessages: true});
  };

  onClickServices = () => {
    this.setState({clickServices: false});
    console.log('on Click services');
    this.setState({clickServices: true});
  };

  onClickTimeline = () => {
    this.setState({clickTimeline: false});
    console.log('on Click Timeline');
    this.setState({clickTimeline: true});
  };

  onClickVault = () => {
    this.setState({clickVault: false});
    console.log('on Click vault');
    this.setState({clickVault: true});
  };

  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <Appbar />

        <View style={{flexDirection: 'row'}}>
          <Icon name={'user'} size={120} style={{margin: 5, marginTop: 20}} />
          <View style={{marginTop: 50}}>
            <Text style={{fontSize: 25}}>Hello</Text>
          </View>
        </View>
        <Image
          source={require('../assests/home_img.png')}
          resizeMode="contain"
          style={{width: '100%', height: 200}}
        />
        <View
          style={{
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: 'white',
            margin: 15,
          }}>
          <ScrollView horizontal={true}>
            <View
              style={{
                flexDirection: 'row',
              }}>
              {this.state.clickFriends == true ? (
                <TouchableOpacity onPress={() => this.onClickFriends()}>
                  <Card
                    style={[
                      styles.cardContainer,
                      this.state.clickFriends == true
                        ? {backgroundColor: this.state.colorActive}
                        : {backgroundColor: this.state.colorInactive},
                    ]}>
                    <Image
                      style={styles.imageContainer}
                      source={require('../assests/friends.png')}
                      resizeMode="contain"
                      style={{width: 50, height: 50}}
                    />
                    <Text styles={{fontSize: 10, margin: 10}}>Friends</Text>
                  </Card>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity onPress={() => this.onClickFriends()}>
                  <Card style={[styles.cardContainer]}>
                    <Image
                      style={styles.imageContainer}
                      source={require('../assests/friendsOne.png')}
                      resizeMode="contain"
                    />
                    <Text styles={{fontSize: 6, margin: 10}}>Friends</Text>
                  </Card>
                </TouchableOpacity>
              )}

              {this.state.clickMemories == true ? (
                <TouchableOpacity onPress={() => this.onClickMemories()}>
                  <Card
                    style={[
                      styles.cardContainer,
                      this.state.clickMemories == true
                        ? {backgroundColor: this.state.colorActive}
                        : {backgroundColor: this.state.colorInactive},
                    ]}>
                    <Image
                      style={styles.imageContainer}
                      source={require('../assests/memoriesOne.png')}
                      resizeMode="contain"
                    />
                    <Text>Memories</Text>
                  </Card>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity onPress={() => this.onClickMemories()}>
                  <Card style={[styles.cardContainer]}>
                    <Image
                      style={styles.imageContainer}
                      source={require('../assests/memories.png')}
                      resizeMode="contain"
                    />
                    <Text>Memories</Text>
                  </Card>
                </TouchableOpacity>
              )}

              {this.state.clickMessages == true ? (
                <TouchableOpacity onPress={() => this.onClickMessages()}>
                  <Card
                    style={[
                      styles.cardContainer,
                      this.state.clickMessages == true
                        ? {backgroundColor: this.state.colorActive}
                        : {backgroundColor: this.state.colorInactive},
                    ]}>
                    <Image
                      style={styles.imageContainer}
                      source={require('../assests/messagesOne.png')}
                      resizeMode="contain"
                    />
                    <Text>Messages</Text>
                  </Card>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity onPress={() => this.onClickMessages()}>
                  <Card style={[styles.cardContainer]}>
                    <Image
                      style={styles.imageContainer}
                      source={require('../assests/messages.png')}
                      resizeMode="contain"
                    />
                    <Text>Messages</Text>
                  </Card>
                </TouchableOpacity>
              )}
            </View>
          </ScrollView>

          <ScrollView horizontal={true}>
            <View
              style={{
                flexDirection: 'row',
                margin: 15,
                justifyContent: 'space-around',
              }}>
              {this.state.clickServices == true ? (
                <TouchableOpacity onPress={() => this.onClickServices()}>
                  <Card
                    style={[
                      styles.cardContainer,
                      this.state.clickServices == true
                        ? {backgroundColor: this.state.colorActive}
                        : {backgroundColor: this.state.colorInactive},
                    ]}>
                    <Image
                      style={styles.imageContainer}
                      source={require('../assests/servicesOne.png')}
                      resizeMode="contain"
                    />
                    <Text>Services</Text>
                  </Card>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity onPress={() => this.onClickServices()}>
                  <Card style={[styles.cardContainer]}>
                    <Image
                      style={styles.imageContainer}
                      source={require('../assests/services.png')}
                      resizeMode="contain"
                    />
                    <Text>Services</Text>
                  </Card>
                </TouchableOpacity>
              )}

              {this.state.clickTimeline == true ? (
                <TouchableOpacity onPress={() => this.onClickTimeline()}>
                  <Card
                    style={[
                      styles.cardContainer,
                      this.state.clickTimeline == true
                        ? {backgroundColor: this.state.colorActive}
                        : {backgroundColor: this.state.colorInactive},
                    ]}>
                    <Image
                      style={styles.imageContainer}
                      source={require('../assests/timelineOne.png')}
                      resizeMode="contain"
                    />
                    <Text>Timeline</Text>
                  </Card>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity onPress={() => this.onClickTimeline()}>
                  <Card style={[styles.cardContainer]}>
                    <Image
                      style={styles.imageContainer}
                      source={require('../assests/timeline.png')}
                      resizeMode="contain"
                    />
                    <Text>Timeline</Text>
                  </Card>
                </TouchableOpacity>
              )}

              {this.state.clickVault == true ? (
                <TouchableOpacity onPress={() => this.onClickVault()}>
                  <Card
                    style={[
                      styles.cardContainer,
                      this.state.clickVault == true
                        ? {backgroundColor: this.state.colorActive}
                        : {backgroundColor: this.state.colorInactive},
                    ]}>
                    <Image
                      style={styles.imageContainer}
                      source={require('../assests/vaultTwo.png')}
                      resizeMode="contain"
                    />
                    <Text>Vault</Text>
                  </Card>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity onPress={() => this.onClickVault()}>
                  <Card style={[styles.cardContainer]}>
                    <Image
                      style={styles.imageContainer}
                      source={require('../assests/vault.png')}
                      resizeMode="contain"
                    />
                    <Text>Vault</Text>
                  </Card>
                </TouchableOpacity>
              )}
            </View>
          </ScrollView>
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
    borderRightWidth: 10,
    borderRightColor: '#fff',
    borderColor: '#fff',
  },
  imageContainer: {
    width: 45,
    height: 45,
    margin: 10,
  },
});
