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
var POST_REQUEST_URL = "http://localhost:3000/api/v1/breadcrumbs"


class ShowAds extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ads: [],
      cashIncrement: 0,
      adIndex: 0
    };
    this._onMomentumScrollEnd = this._onMomentumScrollEnd.bind(this)
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
  _handleIncrement(adIndex) {
    this.setState({adIndex: adIndex, cashIncrement: this.state.cashIncrement + 1})
  }
  postData(adSwiped) {
        fetch(POST_REQUEST_URL, {
          method: "POST",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            title: adSwiped.title,
            view: true,
            cash_value: adSwiped.cash_value

          })
        })
      }



  _onMomentumScrollEnd(e, state, context) {
    this._handleIncrement(state.index)
    this.postData(this.state.ads[this.state.adIndex])
  }
  cashResult() {
    return(
      this.state.cashIncrement
    );
  }


  render() {
      if (!this.state.ads) {
        return this.renderLoadingView();
      }
        return (
          <Swiper
            showsButtons={true}
            onMomentumScrollEnd={this._onMomentumScrollEnd}
            index={this.state.adIndex}
            loop={false}
            style={{backgroundColor: '#F5F5F5' }}
            >
            {this.state.ads.map((ad, index) => {
              return(
                <View style={styles.container} key={index}>
                  <Image
                    source={{uri: ad.image}}
                    style={styles.image}
                    />
                  <Text>{ad.cash_value}</Text>
                  <Text>{this.cashResult()}</Text>
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
    },


  });

module.exports = ShowAds;
