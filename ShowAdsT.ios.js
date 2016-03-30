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
      ads: [],
      counter: 0

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

  _onMomentumScrollEnd(e, state, context) {

  }
  render() {
      if (!this.state.ads) {
        return this.renderLoadingView();
      }
        return (
          <Swiper
            showsButtons={true}
            onMomentumScrollEnd={this._onMomentumScrollEnd}
            >
            {this.state.ads.map(function(ad, index){
              return(
                <View style={styles.container} key={index}>
                  <Image
                    source={{uri: ad.image}}
                    style={styles.image}
                    />
                </View>
              );
            })}
          </Swiper>
        );
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
    wrapper: {
    },
    slide1: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#9DD6EB',
    },
    slide2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#97CAE5',
    },
    slide3: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#92BBD9',
    },
    text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold',
    }

  });

module.exports = ShowAds;
