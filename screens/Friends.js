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
import {Card, CardItem, Body, Text, Header, Title, Fab} from 'native-base';
import home_img from '../assests/home_img.png';
import Icon from 'react-native-vector-icons/AntDesign';

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

  onPressFAB = () => {
    console.log('--------- On Press FAB -------------');
    this.props.navigation.navigate('CreateFriends');
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
        <ScrollView>
          <View>
            <Text>Hey</Text>
            {this.state.allfriends.map((item) => (
              <View>
                <Text>{item.address}</Text>
                <Text>{item.created_by}</Text>
                <Text>{item.dob}</Text>
                <Text>{item.facebook}</Text>
                <Text>{item.group_id}</Text>
                <Text>{item.id}</Text>
                <Text>{item.image}</Text>
                <Text>{item.instra}</Text>
                <Text>{item.name}</Text>
                <Text>{item.relation}</Text>
                <Text>{item.whtasapp}</Text>
              </View>
            ))}
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              margin: 20,
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
                    source={require('../assests/OneFriend.png')}
                    resizeMode="contain"
                  />
                  <Text>Demo</Text>
                </Card>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={() => this.onClickFriends()}>
                <Card style={[styles.cardContainer]}>
                  <Image
                    style={styles.imageContainer}
                    source={require('../assests/OneFriend.png')}
                    resizeMode="contain"
                  />
                  <Text>Demo</Text>
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
                    source={require('../assests/OneFriend.png')}
                    resizeMode="contain"
                  />
                  <Text>Demo</Text>
                </Card>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={() => this.onClickMessages()}>
                <Card style={[styles.cardContainer]}>
                  <Image
                    style={styles.imageContainer}
                    source={require('../assests/OneFriend.png')}
                    resizeMode="contain"
                  />
                  <Text>Demo</Text>
                </Card>
              </TouchableOpacity>
            )}
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              margin: 20,
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
                    source={require('../assests/OneFriend.png')}
                    resizeMode="contain"
                  />
                  <Text>Demo</Text>
                </Card>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={() => this.onClickFriends()}>
                <Card style={[styles.cardContainer]}>
                  <Image
                    style={styles.imageContainer}
                    source={require('../assests/OneFriend.png')}
                    resizeMode="contain"
                  />
                  <Text>Demo</Text>
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
                    source={require('../assests/OneFriend.png')}
                    resizeMode="contain"
                  />
                  <Text>Demo</Text>
                </Card>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={() => this.onClickMessages()}>
                <Card style={[styles.cardContainer]}>
                  <Image
                    style={styles.imageContainer}
                    source={require('../assests/OneFriend.png')}
                    resizeMode="contain"
                  />
                  <Text>Demo</Text>
                </Card>
              </TouchableOpacity>
            )}
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              margin: 20,
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
                    source={require('../assests/OneFriend.png')}
                    resizeMode="contain"
                  />
                  <Text>Demo</Text>
                </Card>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={() => this.onClickFriends()}>
                <Card style={[styles.cardContainer]}>
                  <Image
                    style={styles.imageContainer}
                    source={require('../assests/OneFriend.png')}
                    resizeMode="contain"
                  />
                  <Text>Demo</Text>
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
                    source={require('../assests/OneFriend.png')}
                    resizeMode="contain"
                  />
                  <Text>Demo</Text>
                </Card>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={() => this.onClickMessages()}>
                <Card style={[styles.cardContainer]}>
                  <Image
                    style={styles.imageContainer}
                    source={require('../assests/OneFriend.png')}
                    resizeMode="contain"
                  />
                  <Text>Demo</Text>
                </Card>
              </TouchableOpacity>
            )}
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              margin: 20,
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
                    source={require('../assests/OneFriend.png')}
                    resizeMode="contain"
                  />
                  <Text>Demo</Text>
                </Card>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={() => this.onClickFriends()}>
                <Card style={[styles.cardContainer]}>
                  <Image
                    style={styles.imageContainer}
                    source={require('../assests/OneFriend.png')}
                    resizeMode="contain"
                  />
                  <Text>Demo</Text>
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
                    source={require('../assests/OneFriend.png')}
                    resizeMode="contain"
                  />
                  <Text>Demo</Text>
                </Card>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={() => this.onClickMessages()}>
                <Card style={[styles.cardContainer]}>
                  <Image
                    style={styles.imageContainer}
                    source={require('../assests/OneFriend.png')}
                    resizeMode="contain"
                  />
                  <Text>Demo</Text>
                </Card>
              </TouchableOpacity>
            )}
          </View>
          <View styles={{marginTop: 50}}>
            <Fab position="bottomRight" onPress={() => this.onPressFAB()}>
              <Icon name="plus" />
            </Fab>
          </View>
          {/* <Fab
          style={{backgroundColor: '2C3790'}}
          position="bottomRight"
          onPress={() => console.log('FAB Pressed')}>
          <Icon name="plus" />
        </Fab> */}
        </ScrollView>
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
});
