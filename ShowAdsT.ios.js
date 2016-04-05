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
                  <View style={styles.backgroundAds}>
                    <Image
                      source={{uri: ad.image}}
                      style={styles.image}
                      />
                    <Text style={styles.adText}>{"+" + ad.cash_value}</Text>
                  </View>
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
      height: 380,
      width: 230,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 10

    },
    container: {
      marginTop: 20,
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#003366'
    },
    adText: {
      color: '#000',
      fontSize: 10,
      fontWeight: 'bold',
      alignSelf: 'flex-start',
      paddingLeft: 10

    },
    backgroundAds: {
      backgroundColor: "#e7ebf0",
      justifyContent: 'center',
      alignItems: 'center',
      height: 410,
      width: 250,
      marginBottom: 50
    }


  });

module.exports = ShowAds;
