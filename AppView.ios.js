'use strict';

var React = require('react-native');
var ShowAds = require('./ShowAdsT.ios');
var MainMenu= require('./MainMenu.ios');

var {
  TabBarIOS,
  Component

} = React;

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
      <TabBarIOS selectedTab={this.state.selectedTab}>
        <TabBarIOS.Item
          selected={this.state.selectedTab === 'ShowAds'}
          title= 'Ads'
          onPress={() => {this.setState({
            selectedTab: 'ShowAds'
          });
        }}>
        <ShowAds />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          selected={this.state.selectedTab === 'MainMenu'}
          title= 'Menu'
          onPress={() => this.fetchData()}>
        <MainMenu navigator={this.props.navigator}
                  cashSum={this.state.cashSum}/>
        </TabBarIOS.Item>
      </TabBarIOS>
    )
  }
}

module.exports = AppView;
