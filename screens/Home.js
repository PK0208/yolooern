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

const {height, width} = Dimensions.get('window');
export default class ProductsComponent extends React.Component {
  state = {
    products: [],
  };

  componentDidMount() {
    this.products();
  }

  products = async () => {
    const res = await axios
      .get('https://www.sustowns.com/Sustownsservice/homegeneral')
      .then((response) => {
        this.setState({products: response.data['getallproduct']});
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    console.log(this.state.products);
    return (
      <View>
        <Appbar />
        <ImageSlider />
        <View style={{alignItems: 'center'}}>
          <Text>Featured Items</Text>
        </View>
        {this.state.products.map((item, index) => (
          <TouchableOpacity
            style={{
              width: width * 0.480676328502,
              height: width * 0.480676328502,
            }}
            key={index}
            onPress={() =>
              this.props.navigation.navigate('ProductDetails', {itemId: item.id})
            }>
            <Card
              style={{
                width: width * 0.480676328502,
                height: width * 0.480676328502,
                borderTopLeftRadius: 40,
                borderTopRightRadius: 40,
                borderBottomLeftRadius: 40,
              }}
             >
              <CardItem>
                <View style={{alignItems: 'center', width: '100%'}}>
                  <Image
                    source={{
                      uri: 'https://reactnative.dev/img/tiny_logo.png',
                    }}
                  />
                  <Text
                    style={{
                      color: '#929292',
                      fontSize: width * 0.036231884057971,
                    }}>
                    {item.pr_title}
                  </Text>
                  <Text
                    style={{
                      color: '#F35772',
                      fontSize: width * 0.0314009661835749,
                    }}>
                    INR {item.pr_price}/1pc
                  </Text>
                  <View style={{flexDirection: 'row'}}>
                    <View>
                      <Text style={{fontSize: width * 0.0314009661835749}}>
                        Country :{' '}
                      </Text>
                    </View>
                    <Text style={{fontSize: width * 0.0314009661835749}}>
                      {item.country}
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={{fontSize: width * 0.0314009661835749}}>
                      Location :{' '}
                    </Text>
                    <Text style={{fontSize: width * 0.0314009661835749}}>
                      {item.city_name}
                    </Text>
                  </View>
                </View>
              </CardItem>
            </Card>
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({});
