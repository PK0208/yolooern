import React from 'react';
import {
  View,
  FlatList,
  Image,
  ActivityIndicator,
  ScrollView,
  Dimensions,
} from 'react-native';
import axios from 'axios';
import {Card, CardItem, Body, Text} from 'native-base';

const {height, width} = Dimensions.get('window');
export default class ProductsComponent extends React.Component {
  state = {
    products: [],
    city: [],
  };
  componentDidMount() {
    axios
      .get('https://www.sustowns.com/Sustownsservice/homegeneral')
      .then((response) => {
        let tempProduct = [];
        let city = [];
        response.data['getallproduct'].map((item) => {
          city.push(item.city_name);
          tempProduct.push({
            image: item.imagepath,
            city: item.city_name,
            country: item.country,
            title: item.pr_title,
            price: item.pr_price,
          });
          this.setState({city: item.city_name});
        });
        this.setState({products: response.data['getallproduct']});
        this.setState({city: city});
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    console.log(this.state.products);
    return (
      <ScrollView>
        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
          <Card
            style={{
              width: width * 0.480676328502,
              height: width * 0.480676328502,
              borderTopLeftRadius: 40,
              borderTopRightRadius: 40,
              borderBottomLeftRadius: 40,
            }}>
            <CardItem>
              <Text>Hai</Text>
            </CardItem>
          </Card>
          <Card
            style={{
              width: width * 0.480676328502,
              height: width * 0.480676328502,
              borderTopLeftRadius: 40,
              borderTopRightRadius: 40,
              borderBottomLeftRadius: 40,
            }}>
            <CardItem>
              <Text>Hai</Text>
            </CardItem>
          </Card>
          <Card
            style={{
              width: width * 0.480676328502,
              height: width * 0.480676328502,
              borderTopLeftRadius: 40,
              borderTopRightRadius: 40,
              borderBottomLeftRadius: 40,
            }}>
            <CardItem>
              <Text>Hai</Text>
            </CardItem>
          </Card>
          <Card
            style={{
              width: width * 0.480676328502,
              height: width * 0.480676328502,
              borderTopLeftRadius: 40,
              borderTopRightRadius: 40,
              borderBottomLeftRadius: 40,
            }}>
            <CardItem>
              <Text>Hai</Text>
            </CardItem>
          </Card>
        </View>
      </ScrollView>
    );
  }
}
