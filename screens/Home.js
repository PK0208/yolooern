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

const { height, width } = Dimensions.get('window');
export default class ProductsComponent extends React.Component {
  state = {
    products: [],
  };

  componentDidMount() {
    //this.products();
    console.log('--------- HomeScreen -------------------------')
  }

  products = async () => {
    const res = await axios
      .get('https://www.sustowns.com/Sustownsservice/homegeneral')
      .then((response) => {
        this.setState({ products: response.data['getallproduct'] });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    console.log('Home Screen');
    return (
      <View>

        <Text>Home Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
