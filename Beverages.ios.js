'use strict';

var React = require('react-native');

var {
  StyleSheet,
  View,
  TouchableHighlight,
  Component,
  Text
} = React;

class Beverages extends Component {
  render() {
    return(
      <View style={styles.container}>
        <Text>
          Beverages
        </Text>
      </View>

    )
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }

});

module.exports = Beverages;
