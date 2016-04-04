'use strict';

var React = require('react-native');
var CashInfo = require('./CashInfo.ios');
var Store = require('./Store.ios')
var Coupons = require('./Coupons.ios')
var More = require('./More.ios')

var ScrollableTabView = require('react-native-scrollable-tab-view');

var {
  Component,
  StyleSheet,
  Text,
  View
} = React;

var Icon = require('react-native-vector-icons/Ionicons');

class Menu extends Component {
  render() {
    return (
        <ScrollableTabView
          tabBarBackgroundColor= "#000"
          tabBarActiveTextColor= "#FFE303"
          tabBarInactiveTextColor= "#fff"
          tabBarUnderlineColor= "#ffd700"
          style={styles.space}>
          <CashInfo
            tabLabel= "CashInfo"
            navigator={this.props.navigator}
            cashSum={this.props.cashSum}
            />
          <Store
            tabLabel= "Store"
            navigator={this.props.navigator}/>
          <Coupons tabLabel="Coupons"/>
          <More tabLabel="More" />
        </ScrollableTabView>
    )
  }
}


var styles = StyleSheet.create({
  space: {
    paddingTop: 20
  }
});

module.exports = Menu;
