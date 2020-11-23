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
import { Card, CardItem, Body, Text } from 'native-base';
import home_img from '../assests/home_img.png';


const { height, width } = Dimensions.get('window');



export default class ProductsComponent extends React.Component {
  state = {
    color: '#FFFFFF',
    clickFriends: Boolean,
    clickMemories: Boolean,
    clickMessages: Boolean,
    clickServices: Boolean,
    clickTimeline: Boolean,
    clickVault: Boolean,
    colorActive: "#2C3790",
    colorInactive: '#FFFFFF',
  };






  componentDidMount() {
    console.log('--------- HomeScreen -------------------------')
  }

  onClickFriends = () => {
    this.setState({ clickFriends: false })
    console.log('on Click Friends');
    //console.log('on Click Friends color Before', this.state.color);
    this.setState({ clickFriends: true })
    //this.setState({ colorActive: "#2C3790" })
    //console.log('on Click Friends color After', this.state.color);
  }

  onClickMemories = () => {
    this.setState({ clickMemories: false })
    console.log('on Click memories');
    this.setState({ clickMemories: true })
  }

  onClickMessages = () => {
    this.setState({ clickMessages: false })
    console.log('on Click messages');
    this.setState({ clickMessages: true })

  }

  render() {
    console.log('Home Screen');
    return (
      <View>
        <Appbar />
        <Text>Gud Afternoon</Text>
        <Image source={require("../assests/home_img.png")} />
        <View style={{ justifyContent: "space-around", alignItems: "center" }}>
          <View style={{ flexDirection: "row" }}>
            {/* <Card style={[styles.cardContainer, this.state.clickFriends == true ? { backgroundColor: this.state.colorActive } : { backgroundColor: this.state.colorInactive }]}>
              <TouchableOpacity onPress={() => this.onClickFriends()}>
                <Image style={styles.imageContainer} source={require("../assests/friends.png")} resizeMode="contain" />
                <Text>Friends</Text>
              </TouchableOpacity>
            </Card> */}

            <TouchableOpacity onPress={() => this.onClickFriends()}>
              <Card style={[styles.cardContainer, this.state.clickFriends == true ? { backgroundColor: this.state.colorActive } : { backgroundColor: this.state.colorInactive }]}>
                <Image style={styles.imageContainer} source={require("../assests/friends.png")} resizeMode="contain" />
                <Text>Messages</Text>
              </Card>
            </TouchableOpacity>

            <Card style={[styles.cardContainer, this.state.clickMemories == true ? { backgroundColor: this.state.colorActive } : { backgroundColor: this.state.colorInactive }]}>
              <TouchableOpacity onPress={() => this.onClickMemories()}>
                <Image style={styles.imageContainer} source={require("../assests/memories.png")} resizeMode="contain" />
                <Text>Memories</Text>
              </TouchableOpacity>
            </Card>
            <TouchableOpacity onPress={() => this.onClickMessages()}>
              <Card style={[styles.cardContainer, this.state.clickMessages == true ? { backgroundColor: this.state.colorActive } : { backgroundColor: this.state.colorInactive }]}>
                <Image style={styles.imageContainer} source={require("../assests/messages.png")} resizeMode="contain" />
                <Text>Messages</Text>
              </Card>
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: "row" }}>
            <Card style={styles.cardContainer}>
              <TouchableOpacity>
                <Image style={styles.imageContainer} source={require("../assests/services.png")} resizeMode="contain" />
                <Text>Service</Text>
              </TouchableOpacity>
            </Card>

            <Card style={styles.cardContainer}>
              <TouchableOpacity>
                <Image style={styles.imageContainer} source={require("../assests/timeline.png")} resizeMode="contain" />
                <Text>Timeline</Text>
              </TouchableOpacity>
            </Card>
            <Card style={styles.cardContainer}>
              <TouchableOpacity>
                <Image style={styles.imageContainer} source={require("../assests/vault.png")} resizeMode="contain" />
                <Text>Vault</Text>
              </TouchableOpacity>
            </Card>
          </View>
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
    width: 120,
    height: 80,
    borderRadius: 10,
    alignItems: "center"
  },
  imageContainer: {
    width: 60,
    height: 60,
  }
});
