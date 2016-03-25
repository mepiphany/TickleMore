/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
var React = require('react-native');
var Swiper = require('react-native-swiper');

var {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Image,
  ListView,
  ScrollView
} = React;

var REQUEST_URL = "http://localhost:3000/api/v1/advertisements"


class ShowAds extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ads: null,
    };
  }
  fetchData() {
    fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          ads: responseData.ads,
        });
      })
      .done();
  }
  
  componentDidMount() {
    this.fetchData();
  }
  render() {
      if (!this.state.ads) {
        return this.renderLoadingView();
      }
      var ad = this.state.ads;
      return this.renderAd(ad);
  }

  renderLoadingView() {
    return (
      <View style={styles.container}>
        <Text>
          Loading Ads...
        </Text>
      </View>
    );
  }
  renderAd(ad) {
    return (
      <View style={styles.container}>
        <View>
        <Image
          source={{uri: ad.image}}
          style={styles.image}
          />
        </View>
        <View>
          <Text style={styles.text}>Title: {ad.title}</Text>
          <Text style={styles.text}>Cash Value: {ad.cash_value}</Text>
        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  image: {
    flex: 1,
    height: 400,
    width: 250,
    justifyContent: 'center',
    alignItems: 'center'
  },
  box: {
    width: 250,
    height: 400,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'

  },
  wrapper: {

  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  text: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'center'

  }

});

module.exports = ShowAds;
