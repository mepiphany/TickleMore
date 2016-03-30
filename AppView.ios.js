'use strict';

var React = require('react-native');
var ShowAds = require('./ShowAdsT.ios');
var MainMenu= require('./MainMenu.ios');

var {
  TabBarIOS,
  Component

} = React;

class AppView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'ShowAds'
    };
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
          onPress={() => {this.setState({
            selectedTab: 'MainMenu'
          });
        }}>
        <MainMenu navigator={this.props.navigator} />
        </TabBarIOS.Item>
      </TabBarIOS>
    )
  }
}

module.exports = AppView;
