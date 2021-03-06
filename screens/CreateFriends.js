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
import Toast from 'react-native-toast-message';
import {Value} from 'react-native-reanimated';
const {height, width} = Dimensions.get('window');
import DatePicker from 'react-native-datepicker';
import ImagePicker from 'react-native-image-picker';
import RNDateTimePicker from '@react-native-community/datetimepicker';

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
    createdBy: '',
    groupId: '',
    relation: '',
    name: '',
    mobile: '',
    image: '',
    whatsaap: '',
    faceboook: '',
    insta: '',
    address: '',
    dob: '',
    date: '09-10-2020',
    resourcePath: {},
    showDatePicker: false,
  };

  componentDidMount() {
    console.log('--------- CreateFriends -------------');
    /*  console.log(
      '- params from previous screen-------------',
      this.props.route.params.createdBy,
      this.props.route.params.groupId,
      this.props.route.params.relation,
    ); */
  }

  selectFile = () => {
    var options = {
      title: 'Select Image',
      customButtons: [
        {
          name: 'customOptionKey',
          title: 'Choose file from Custom Option',
        },
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, (res) => {
      console.log('Response = ', res);

      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else if (res.customButton) {
        console.log('User tapped custom button: ', res.customButton);
        alert(res.customButton);
      } else {
        let source = res;
        this.setState({
          resourcePath: source,
        });
      }
    });
  };

  imageGalleryLaunch = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.launchImageLibrary(options, (res) => {
      console.log('Response = ', res);

      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else if (res.customButton) {
        console.log('User tapped custom button: ', res.customButton);
        alert(res.customButton);
      } else {
        const source = {uri: res.uri};
        console.log('response', JSON.stringify(res));
        this.setState({
          filePath: res,
          fileData: res.data,
          fileUri: res.uri,
        });
      }
    });
  };

  handleBackButtonClick() {
    console.log('--------- On Press Back-------------');
    this.props.navigation.goBack(null);
    return true;
  }

  createFriends = async () => {
    console.log('Create friends api call');
    let fd = new FormData();
    let fd1 = new FormData();
    //fd.append('id', '2');

    /* fd1.append('created_by', this.props.route.params.createdBy);
    fd1.append('group_id', this.props.route.params.groupId);
    fd1.append('relation', this.props.route.params.relation); */
    fd1.append('name', this.state.name);
    fd1.append('mobile_no', this.state.mobile);
    fd1.append('whtasapp', this.state.mobile);
    fd1.append('facebook', this.state.faceboook);
    fd1.append('instra', this.state.insta);
    fd1.append('address', this.state.address);
    fd1.append('dob', this.state.dob);
    fd1.append('image', this.state.image);

    console.log('FD1', fd1);

    fd.append('created_by', 'sss');
    fd.append('group_id', '3433');
    fd.append('relation', 'friend');
    fd.append('name', 'sssssAPI');
    fd.append('mobile_no', '0000000000');
    fd.append('whtasapp', '3435454534');
    fd.append('facebook', '3435454534');
    fd.append('instra', '3435454534');
    fd.append('address', 'testApi');
    fd.append('dob', 'testApi');
    fd.append('image', 'yolooe_icon.jpeg');

    /*  const res = await axios
      .post('https://ixiono.com/yolooe/api/add_contact', fd1)
      .then((response) => {
        console.log('Response_Data', response.data);
        console.log('Response_Data-message', response.data.message);
        console.log('Response_Data-status', response.data.status);

        //console.log('Response_Data', response);
        //this.setState({allfriends: response.data.data});
        //console.log('Response_Data--State', this.state.allfriends);
        let msg = response.data.message;
        if (response.data.status == 'true') {
          console.log('Friend Added success');
          Toast.show(msg);
        }
      }); */
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
            <Title style={{marginLeft: 80, fontWeight: '500', fontSize: 16}}>
              Create Friend
            </Title>
          </Body>
        </Header>
        <ScrollView>
          <View>
            {/* <TextInput
              style={styles.input}
              underlineColorAndroid="transparent"
              placeholder="Select Group"
              placeholderTextColor="#9a73ef"
              autoCapitalize="none"
              onChangeText={(value) => this.setState({name: value})}
            /> */}
            {/* <TextInput
              style={styles.input}
              underlineColorAndroid="transparent"
              placeholder="Relation"
              placeholderTextColor="#9a73ef"
              autoCapitalize="none"
              onChangeText={(value) => this.setState({name: value})}
            /> */}
            {/* <TextInput
              style={styles.input}
              underlineColorAndroid="transparent"
              placeholder="Name"
              placeholderTextColor="#9a73ef"
              autoCapitalize="none"
              onChangeText={(value) => this.setState({name: value})}
            /> */}
            <TextInput
              style={styles.input}
              underlineColorAndroid="transparent"
              placeholder="Name"
              placeholderTextColor="#9a73ef"
              autoCapitalize="none"
              onChangeText={(value) => this.setState({name: value})}
            />

            <TextInput
              style={styles.input}
              underlineColorAndroid="transparent"
              placeholder="Mobile"
              placeholderTextColor="#9a73ef"
              autoCapitalize="none"
              onChangeText={(value) => this.setState({mobile: value})}
            />

            <View
              style={{
                flexDirection: 'row',
                margin: 10,
                justifyContent: 'space-between',
                alignItems: 'center',
                marginLeft: 20,
              }}>
              <Text style={{fontSize: 20}}>Image</Text>
              {/* <TextInput
              style={styles.input}
              underlineColorAndroid="transparent"
              placeholder="Image upload packge instaler TODO"
              placeholderTextColor="#9a73ef"
              autoCapitalize="none"
              onChangeText={(value) => this.setState({image: value})}
            /> */}
              <TouchableOpacity
                onPress={this.imageGalleryLaunch}
                style={styles.button}>
                <Text style={styles.buttonTextOne}>Choose file</Text>
              </TouchableOpacity>
            </View>

            <TextInput
              style={styles.input}
              underlineColorAndroid="transparent"
              placeholder="Whatsapp"
              placeholderTextColor="#9a73ef"
              autoCapitalize="none"
              onChangeText={(value) => this.setState({whatsaap: value})}
            />

            <TextInput
              style={styles.input}
              underlineColorAndroid="transparent"
              placeholder="Face Book ID"
              placeholderTextColor="#9a73ef"
              autoCapitalize="none"
              onChangeText={(value) => this.setState({faceboook: value})}
            />

            <TextInput
              style={styles.input}
              underlineColorAndroid="transparent"
              placeholder="Instagram"
              placeholderTextColor="#9a73ef"
              autoCapitalize="none"
              onChangeText={(value) => this.setState({insta: value})}
            />
            <TextInput
              style={styles.input}
              underlineColorAndroid="transparent"
              placeholder="Address"
              placeholderTextColor="#9a73ef"
              autoCapitalize="none"
              onChangeText={(value) => this.setState({address: value})}
            />
            {/* <TextInput
              style={styles.input}
              underlineColorAndroid="transparent"
              placeholder="DOB"
              placeholderTextColor="#9a73ef"
              autoCapitalize="none"
              onChangeText={(value) => this.setState({dob: value})}
            /> */}

            <DatePicker
              style={styles.datePickerStyle}
              //date={this.state.date} // Initial date from state
              mode="date" // The enum of date, datetime and time
              placeholder="select date"
              format="DD-MM-YYYY"
              minDate="01-01-1980"
              maxDate="01-01-2021"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              /* customStyles={{
                dateIcon: {
                  display: 'none',
                  position: 'absolute',
                  left: 0,
                  top: 4,
                  marginLeft: 0,
                },
                dateInput: {
                  marginLeft: 36,
                },
              }} */
              /* onDateChange={(date) => {
                //this.state({date: date});
                console.log('date', date);
              }} */
              onDateChange={(value) => this.setState({dob: value})}
            />

            {/*  {this.state.dob.length > 2 && (
              <View>
                <Text>{this.state.dob}</Text>
              </View>
            )} */}
          </View>

          {/* <RNDateTimePicker
            mode="date"
            value={
              !!dueDate
                ? new Date(dayjs(dueDate).format('YYYY-MM-DD'))
                : new Date()
            }
            value={this.state.date}
            onChange={(event, date) => {
              this.setState({showDatePicker: false});
              if (date) {
                const format = dayjs(date).format('YYYY-MM-DD');
                this.setState({dueDate: format});
              }
            }}
            onChange={(event, date) => {
              this.setState({showDatePicker: false});
              if (date) {
                const format = dayjs(date).format('YYYY-MM-DD');
                this.setState({dob: format});
              }
            }}
          /> */}

          <View style={styles.buttonContainer}>
            {/* <TouchableOpacity
              style={{
                backgroundColor: '#2C3790',
                height: 40,
                borderRadius: 5,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={this.createFriends}>
              <Text style={styles.buttonText}>Create</Text>
            </TouchableOpacity> */}
            <TouchableOpacity
              onPress={this.createFriends}
              style={styles.button}>
              <Text style={styles.buttonTextOne}>Create</Text>
            </TouchableOpacity>
          </View>
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
    padding: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    //fontFamily: FONTS.titleMedium,
  },
  button: {
    width: 150,
    height: 40,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#707070',
  },
  buttonTextOne: {
    textAlign: 'center',
    fontSize: 15,
    color: '#2C3790',
  },
});
