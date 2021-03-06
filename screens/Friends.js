import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import Appbar from '../Components/Appbar';
import ImageSlider from '../Components/ImageSlider';
import Products from '../Components/ProductsComponent';
import axios from 'axios';
import {Card, CardItem, Body, Text, Header, Title, Fab, Row} from 'native-base';
import home_img from '../assests/home_img.png';
import Icon from 'react-native-vector-icons/AntDesign';
//import FriendsList from '../Components/FriendsList';
import vector from '../assests/vector.png';

const {height, width} = Dimensions.get('window');

export default class Friends extends React.Component {
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
    allfriends: [],
  };

  componentDidMount() {
    console.log('--------- Friends -------------');
    this.getAllFriends();
  }

  onPressFAB = (createdBy, groupId, relation) => {
    /* console.log(
      '--------- On Press FAB -------------',
      createdBy,
      groupId,
      relation,
    );
    this.props.navigation.navigate('CreateFriends', {
      createdBy,
      groupId,
      relation,
    }); */

    this.props.navigation.navigate('CreateFriends');
  };

  onPressFriend = (id) => {
    console.log('----OnPressfriend------', id);
    this.props.navigation.navigate('AddEditFriend', {id: id});
  };

  handleBackButtonClick() {
    console.log('--------- On Press Back-------------');
    this.props.navigation.goBack(null);
    return true;
  }

  getAllFriends = async () => {
    console.log('------Get all friends ------');
    let fd = new FormData();
    fd.append('id', '2');
    const res = await axios
      .post('https://ixiono.com/yolooe/api/view_contact_created_by', fd)
      .then((response) => {
        console.log('Response_Data', response.data);
        console.log('Response_Data-2', response.data.data);
        let arr = [];
        arr = response.data;
        //console.log('Response_Data', response);
        this.setState({allfriends: response.data.data});
        console.log('Response_Data--State', this.state.allfriends);
      });
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
            <Title style={{marginLeft: 100, fontWeight: '500', fontSize: 25}}>
              Friends
            </Title>
          </Body>
        </Header>
        {/* <ImageBackground
          source={require('../assests/OneFriend.png')}
          resizeMode="contain"></ImageBackground> */}
        {/* <ScrollView>
          <FriendsList />
        </ScrollView> */}
        <ScrollView style={[styles.scrollview]}>
          <ImageBackground
            style={[styles.fixed, styles.containter, {zIndex: -1}]}
            source={require('../assests/vector.png')}
          />
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}>
            {this.state.allfriends.map((item) => (
              <View
                style={{
                  justifyContent: 'space-evenly',
                  margin: 15,
                }}>
                <TouchableOpacity
                  key={item.id}
                  onPress={() => this.onPressFriend(item.id)}>
                  <Card style={[styles.cardContainer]}>
                    <Image
                      style={styles.imageContainer}
                      /* source={{
                        uri:
                          'https://ixiono.com/yolooe/resources/upload/User/9da3ab84d663ff9bf34cf4d60440bc2b.jpg',
                      }} */
                      source={{
                        uri: item.image,
                      }}
                      resizeMode="contain"
                    />
                    <Text numberOfLines={2} style={{textAlign: 'center'}}>
                      {item.name}
                    </Text>
                  </Card>
                </TouchableOpacity>
              </View>
            ))}
            {/* <View>
              <Fab
                position="bottomRight"
                style={{position: 'absolute'}}
                onPress={() => this.onPressFAB()}>
                <Icon name="plus" />
              </Fab>
            </View> */}
          </View>
        </ScrollView>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => this.onPressFAB()}
          style={styles.touchableOpacityStyle}>
          <Image
            //We are making FAB using TouchableOpacity with an image
            //We are using online image here
            source={{
              uri:
                'https://raw.githubusercontent.com/AboutReact/sampleresource/master/plus_icon.png',
            }}
            //You can use you project image Example below
            //source={require('./images/float-add-icon.png')}
            style={styles.floatingButtonStyle}
          />
        </TouchableOpacity>
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
    borderRadius: 60 / 2,
  },
  touchableOpacityStyle: {
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
  },
  floatingButtonStyle: {
    resizeMode: 'contain',
    width: 50,
    height: 50,
    //backgroundColor:'black'
  },
  containter: {
    width: Dimensions.get('window').width, //for full screen
    height: Dimensions.get('window').height, //for full screen
  },
  fixed: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  scrollview: {
    backgroundColor: 'transparent',
  },
});
