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

export default function FriendsList(props) {
  //const onPress = () => props.navigation.openDrawer();

  const [friends, setAllFriends] = React.useState([]);
  //const [password, setPassword] = React.useState('');

  /* getAllFriends = async () => {
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
        //this.setState({allfriends: response.data.data});
        setAllFriends(response.data.data);
        console.log('Response_Data--State', setAllFriends);
      });
  }; */

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      {/* <Header>
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
      </Header> */}
      {/* <ImageBackground
          source={require('../assests/OneFriend.png')}
          resizeMode="contain"></ImageBackground> */}
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}>
          <View
            style={{
              justifyContent: 'space-evenly',
              margin: 15,
            }}>
            <TouchableOpacity>
              <Card style={[styles.cardContainer]}>
                <Image
                  style={styles.imageContainer}
                  source={{
                    uri:
                      'https://ixiono.com/yolooe/resources/upload/User/9da3ab84d663ff9bf34cf4d60440bc2b.jpg',
                  }}
                  /* source={{
                      uri: item.image,
                    }} */
                  resizeMode="contain"
                />
                <Text>Praveen Text</Text>
              </Card>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
  appBarContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20 /*,borderBottomLeftRadius:30*/,
    alignItems: 'center',
    backgroundColor: '#2C3790',
    height: height * 0.082065217391,
  },
  titleText: {
    color: 'white',
    fontSize: 25,
    margin: 15,
    marginLeft: 100,
  },
});
