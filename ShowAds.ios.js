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
  Image
} = React;

class ShowAds extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Swiper showsButtons={true}>
      <View style={styles.slide1}>
        <Text style={styles.text}>Ads1</Text>
        <Image style={styles.box}
          source={{uri: this.props.image_url}} />
      </View>
      <View style={styles.slide2}>
        <Text style={styles.text}>Ads2</Text>
          <Image style={styles.box}
            source={require('./img/mac.png')} />
      </View>
      <View style={styles.slide3}>
        <Text style={styles.text}>Ads3</Text>
          <Image style={styles.box}
            source={require('./img/ads.png')} />
      </View>

      </Swiper>
    </View>
    );
  }
}

var styles = StyleSheet.create({
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
    fontSize: 30,
    fontWeight: 'bold'

  }

});

module.exports = ShowAds;
