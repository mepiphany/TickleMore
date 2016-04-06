'use strict';

var React = require('react-native');
var CashInfo = require('./CashInfo.ios');
var Store = require('./Store.ios')
var Coupons = require('./Coupons.ios')
var More = require('./More.ios')

var ScrollableTabView = require('react-native-scrollable-tab-view');
var DefaultTabBar = require('./node_modules/react-native-scrollable-tab-view/DefaultTabBar')

var {
  Component,
  StyleSheet,
  Text,
  View,
  ScrollView
} = React;

var Icon = require('react-native-vector-icons/Ionicons');


class Menu extends Component {
  render() {
    return (
        <View style={styles.container}>
          <ScrollableTabView
            tabBarUnderlineColor="#ffd700"
            initialPage={0} renderTabBar={() => <DefaultTabBar />}>
            <ScrollView tabLabel="home" style={styles.tabView}>
              <CashInfo
                navigator={this.props.navigator}
                cashSum={this.props.cashSum}/>
            </ScrollView>
            <ScrollView tabLabel="store" style={styles.tabView}>
              <Store
                tabLabel="Store"
                navigator={this.props.navigator}/>
            </ScrollView>
            <ScrollView tabLabel="label-outline" style={styles.tabView}>
              <Coupons
                tabLabel="Coupons"
                navigator={this.props.navigator}/>
            </ScrollView>
            <ScrollView tabLabel="settings" style={styles.tabView}>
              <More />
            </ScrollView>
          </ScrollableTabView>
        </View>
    )
  }
}


var styles = StyleSheet.create({
  space: {
    paddingTop: 20
  },
  tabView: {
   flex: 1,
 },
 container: {
   flex: 1,
   marginTop: 20,
   backgroundColor: "#F5F5F5"
 },
});

module.exports = Menu;
