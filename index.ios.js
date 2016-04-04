'use strict';

var React = require('react-native');
var AppView = require('./AppView.ios');

var {
  AppRegistry,
  StyleSheet,
  NavigatorIOS,
  Component,
  ScrollView
} = React;

class TickleMore extends Component {
  render() {
    return(
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: "TickleMore",
          component: AppView
        }}
        navigationBarHidden={true}>
      </NavigatorIOS>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

AppRegistry.registerComponent('TickleMore', () => TickleMore);
