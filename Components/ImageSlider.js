import React from 'react';

import axios from 'axios';

//import {SliderBox} from 'react-native-image-slider-box';

export default class ImageSliderComponent extends React.Component {
  state = {
    images: [],
  };
  componentDidMount() {
    axios
      .get('https://www.sustowns.com/Sustownsservice/banner_images')
      .then((response) => {
        let images = [];
        response.data['slider_image'].map((item) => {
          images.push(response.data['image_path'] + item.image);
        });
        this.setState({images: images});
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return {/* <SliderBox images={this.state.images} /> */};
  }
}
