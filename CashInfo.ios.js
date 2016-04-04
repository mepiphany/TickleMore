'use strict';

var React = require('react-native');
var InviteFriends = require('./InviteFriends.ios')
var History = require('./History.ios')
var ShowAds = require('./ShowAdsT.ios');


var {
  Component,
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  Image,
  Alert,
} = React;

var Icon = require('react-native-vector-icons/Ionicons');



class CashInfo extends Component {
  inviteFriend(){
    this.props.navigator.push({
      title: "InviteFriends",
      component: InviteFriends
    })
  }
  history(){
    this.props.navigator.push({
      title: 'History',
      component: History
    })
  }
  cashSumAlert(){
    return (
      this.props.cashSum
    )
  }
  _showAlert(){
    Alert.alert("Would you like to withdraw? " + "$" + this.cashSumAlert())
  }
  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.container1}>
          <View>
            <Text
              style={{paddingTop: 9,
                      paddingLeft: 9,
                      paddingRight: 9,
                      fontSize: 15,
                    }}>TickleMore</Text>
          </View>
          <View style={{alignItems: "flex-end", paddingRight: 15}}>
            <TouchableHighlight
              style={styles.ImageBorder}
              underlayColor= "#fff"
              onPress={() => this._showAlert()}
              >
            <Image
              style={styles.cashOutImg}
              source={require('./img/cash_out.png')}
              />
            </TouchableHighlight>
          </View>
          <View style={styles.cashResult}>
            <Text style={styles.text}>
              <Image
                style={styles.cashCoinImg}
                source={require('./img/ticklemorecoin.png')}
                />
              &nbsp;{this.props.cashSum}</Text>
          </View>
        </View>
        <View style={styles.container}>
          <TouchableHighlight
            AppView={this.props.AppView}
            underlayColor= "#1e90ff"
            style={styles.button}
            onPress={() => this.inviteFriend()}>
                <Text style={{alignSelf: 'center'}}><Icon name="person-add" size={50}/></Text>
          </TouchableHighlight>
        </View>
        <View style={styles.container}>
          <TouchableHighlight
            underlayColor="#1e90ff"
            style={styles.button}
            onPress={() => this.history()}>
              <Text style={{alignSelf: 'center'}}><Icon name="ios-list-outline" size={50}/></Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    paddingTop: 0.1
  },
  container: {
    paddingTop: 46,
    paddingRight: 60,
    paddingLeft: 60,
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    textAlign: 'left'
  },
  background: {
    flex: 3,
    backgroundColor: '#000',
  },
  container1: {
    height: 150,
    backgroundColor: '#FFE303',
    borderBottomColor: '#d5dbdb',
    borderTopColor: '#d5dbdb',
    borderBottomWidth: 1,
    borderTopWidth: 1,
  },
  container2: {
    height: 200,
  },
  text: {
    color: 'black',
    fontSize: 40,
    padding: 5,
    paddingLeft: 25
  },
  button: {
    height: 80,
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignSelf: 'stretch',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#d5dbdb'
  },
  buttonText: {
    fontSize: 19,
    color: 'black',
    alignSelf: 'center',
    justifyContent: 'center'
  },
  cashOutImg: {
    width: 45,
    height: 45,
  },
  cashCoinImg: {
    width: 20,
    height: 20,
  },
  ImageBorder: {
    borderColor: '#000',
    borderWidth: 1,
    padding: 5

  }



});

module.exports = CashInfo;
