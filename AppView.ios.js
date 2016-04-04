'use strict';

var React = require('react-native');
var ShowAds = require('./ShowAdsT.ios');
var MainMenu= require('./MainMenu.ios');

var {
  TabBarIOS,
  Component
} = React;
var Icon = require('react-native-vector-icons/Ionicons');



var REQUEST_URL = "http://localhost:3000/api/v1/breadcrumbs"

class AppView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'ShowAds',
      cashSum: ""
    };
  }
  fetchData() {
    fetch(REQUEST_URL)
    .then((response) => response.json())
    .then((responseData) => {
      this.setState({
        cashSum: responseData.cash.sum,
        selectedTab: 'MainMenu'
      });
    })
    .done();
  }

  render() {
    return (
      <TabBarIOS
        barTintColor= "#dcdcdc"
        selectedTab={this.state.selectedTab}
        navigationBarHidden={true}>
        <Icon.TabBarItem
          selected={this.state.selectedTab === 'ShowAds'}
          title= 'Ads'
          iconName= 'easel'
          selectedIconName= "easel"
          onPress={() => {this.setState({
            selectedTab: 'ShowAds'
          });
        }}>
        <ShowAds />
        </Icon.TabBarItem>
        <Icon.TabBarItem
          selected={this.state.selectedTab === 'MainMenu'}
          title= 'Menu'
          iconName= 'grid'
          selectedIconName="grid"
          onPress={() => this.fetchData()}>
        <MainMenu navigator={this.props.navigator}
                  cashSum={this.state.cashSum}
                  />
        </Icon.TabBarItem>
      </TabBarIOS>
    )
  }
}

module.exports = AppView;
