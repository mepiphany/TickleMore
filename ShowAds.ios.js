/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
var React = require('react-native');
var Swiper = require('react-native-swiper');
// var Swiper = require('./node_modules/react-native-swiper/src/index.js');


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
      index: 1,
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
      var ad = this.state.ads[this.state.index];
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
  _changeIndex() {
    var newIndex = this.state.index + 1;
    this.setState({index: newIndex});
  }

  _onMomentumScrollEnd(e, state, context) {
    this._changeIndex();
  }

  renderAd(ad) {
    return (
      <View style={styles.container}>
        <Swiper
          onMomentumScrollEnd={this._onMomentumScrollEnd.bind(this)}
          showsButtons={true}
          style={styles.swiper}>
          <View style={styles.slide1}>
            <Image
              source={{uri: ad.image}}
              style={styles.image}
              />
          </View>
          <Text style={styles.text}>Cash Value: {ad.cash_value}</Text>
        </Swiper>
        <Text style={styles.text}>Title: {ad.title}</Text>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  image: {
    height: 400,
    width: 250,
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'

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
