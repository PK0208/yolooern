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
  Button,
  TouchableHighlight,
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
import {Modal} from 'react-native';

export default class AddEditFriend extends React.Component {
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
    id: '',
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
    showModal: false,
    selectGroup: '',
    relation: '',
  };

  componentDidMount() {
    console.log('--------- AddEditFriend -------------');
    console.log('Params', this.props.route.params.id);
    /*  console.log(
      '- params from previous screen-------------',
      this.props.route.params.createdBy,
      this.props.route.params.groupId,
      this.props.route.params.relation,
    ); */
    this.getFriendDetailsById();
  }

  getFriendDetailsById = async () => {
    console.log('get friend details by id ', this.props.route.params.id);
    let fd = new FormData();
    let id = 2;
    fd.append('id', this.props.route.params.id);
    /* `https://www.sustowns.com/Sustownsservice/login/?username=${email}&password=${password}`, */
    const res = await axios
      .post('https://ixiono.com/yolooe/api/view_contact_by_Id?id=${2}', fd)
      .then((response) => {
        console.log('Response_Data', response.data);
        //console.log('Response_Data-message', response.data.data);
        /* console.log('Response_Data-address', response.data.data[0].address);
        console.log(
          'Response_Data-created_by',
          response.data.data[0].created_by,
        );
        console.log('Response_Data-dob', response.data.data[0].dob);
        console.log('Response_Data-facebook', response.data.data[0].facebook);
        console.log('Response_Data-group_id', response.data.data[0].group_id);
        console.log(
          'Response_Data-group_name',
          response.data.data[0].group_name,
        );
        console.log('Response_Data-Family', response.data.data[0].Family);
        console.log('Response_Data-id', response.data.data[0].id);
        console.log('Response_Data-image', response.data.data[0].image);
        console.log('Response_Data-instra', response.data.data[0].instra);
        console.log('Response_Data-mobile_no', response.data.data[0].mobile_no);
        console.log('Response_Data-name', response.data.data[0].name);
        console.log('Response_Data-relation', response.data.data[0].relation);
        console.log('Response_Data-whtasapp', response.data.data[0].whtasapp);
        console.log('Response_Data-message', response.data.message);
        console.log('Response_Data-status', response.data.status); */
        this.setState({relation: response.data.data[0].relation});
        this.setState({name: response.data.data[0].name});
        this.setState({mobile: response.data.data[0].mobile_no});
        this.setState({image: response.data.data[0].image});
        this.setState({whatsaap: response.data.data[0].whtasapp});
        this.setState({facebook: response.data.data[0].facebook});
        this.setState({insta: response.data.data[0].instra});
        this.setState({address: response.data.data[0].address});
        this.setState({dob: response.data.data[0].dob});

        //console.log('Response_Data', response);
        //this.setState({allfriends: response.data.data});
        //console.log('Response_Data--State', this.state.allfriends);
        let msg = response.data.message;
        if (response.data.status == 'true') {
          console.log('Friend Added success');
          Toast.show(msg);
        }
      });
  };
  updateFriendDetails = async () => {
    console.log('update api friends ');
    let fd1 = new FormData();
    fd1.append('name', this.state.name);
    fd1.append('mobile_no', this.state.mobile);
    fd1.append('whtasapp', this.state.mobile);
    fd1.append('facebook', this.state.faceboook);
    fd1.append('instra', this.state.insta);
    fd1.append('address', this.state.address);
    fd1.append('dob', this.state.dob);
    fd1.append('image', this.state.image);

    const res = await axios
      .post('https://ixiono.com/yolooe/api/Updatecontact', fd1)
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
      });
  };

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
  openModal = () => {
    console.log('Open modal');
    this.setState({showModal: true});
  };

  onSelectFriends = () => {
    console.log('onSelectFriends');
    this.setState({selectGroup: 'Friends'});
    this.setState({showModal: false});
  };

  onSelectFamily = () => {
    console.log('onSelectFamily');
    this.setState({selectGroup: 'Family'});
    this.setState({showModal: false});
  };

  onSelectColleagues = () => {
    console.log('onSelectColleagues');
    this.setState({selectGroup: 'Colleagues'});
    this.setState({showModal: false});
  };

  onSelectWork = () => {
    console.log('onSelectWork');
    this.setState({selectGroup: 'Work'});
    this.setState({showModal: false});
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
            <Title style={{marginLeft: 60, fontWeight: '500', fontSize: 16}}>
              Create Friend and Family
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
              onChangeText={() => this.openModal()}
            /> */}
            <TouchableOpacity
              style={styles.input}
              onPress={() => this.openModal()}>
              <Text>Select group</Text>
            </TouchableOpacity>
            <TextInput
              style={styles.input}
              underlineColorAndroid="transparent"
              placeholder="Relation"
              defaultValue={this.state.relation}
              placeholderTextColor="#9a73ef"
              autoCapitalize="none"
              onChangeText={(value) => this.setState({relation: value})}
            />
            <TextInput
              style={styles.input}
              underlineColorAndroid="transparent"
              placeholder="Name"
              defaultValue={this.state.name}
              placeholderTextColor="#9a73ef"
              autoCapitalize="none"
              onChangeText={(value) => this.setState({name: value})}
            />
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
              placeholder="Mobile"
              defaultValue={this.state.mobile}
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
              defaultValue={this.state.whatsaap}
              autoCapitalize="none"
              onChangeText={(value) => this.setState({whatsaap: value})}
            />

            <TextInput
              style={styles.input}
              underlineColorAndroid="transparent"
              placeholder="Face Book ID"
              placeholderTextColor="#9a73ef"
              defaultValue={this.state.facebook}
              autoCapitalize="none"
              onChangeText={(value) => this.setState({faceboook: value})}
            />

            <TextInput
              style={styles.input}
              underlineColorAndroid="transparent"
              placeholder="Instagram"
              placeholderTextColor="#9a73ef"
              defaultValue={this.state.insta}
              autoCapitalize="none"
              onChangeText={(value) => this.setState({insta: value})}
            />
            <TextInput
              style={styles.input}
              underlineColorAndroid="transparent"
              placeholder="Address"
              placeholderTextColor="#9a73ef"
              defaultValue={this.state.address}
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
              onPress={this.updateFriendDetails}
              style={styles.button}>
              <Text style={styles.buttonTextOne}>Create</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        {/* 
        <Modal
          animationType={'slide'}
          transparent={false}
          visible={this.state.showModal}
          onRequestClose={() => {
            console.log('Modal has been closed.');
          }}>
          
          <View style={styles.modal}>
            <Text style={styles.text}>Modal is open!</Text>
            <Button
              title="Click To Close Modal"
              onPress={() => {
                this.setState({showModal: false});
              }}
            />
          </View>
        </Modal> */}

        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.showModal}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Select Group</Text>
              <TouchableOpacity onPress={() => this.onSelectFamily()}>
                <Text>Family</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => this.onSelectFriends()}>
                <Text>Friends</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => this.onSelectColleagues()}>
                <Text>Colleagues</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => this.onSelectWork()}>
                <Text>Work</Text>
              </TouchableOpacity>

              {/* <TouchableHighlight
                style={{...styles.openButton, backgroundColor: '#fff'}}
                onPress={() => {
                  this.setState({showModal: false});
                }}>
                <Text style={styles.textStyle}>Hide Modal</Text>
              </TouchableHighlight> */}
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tinyLogo: {
    width: 50,
    height: 50,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
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
