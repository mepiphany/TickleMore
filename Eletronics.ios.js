'use strict';

var React = require('react-native');

var {
  StyleSheet,
  View,
  TouchableHighlight,
  Text,
  Component
} = React;

class Eletronics extends Component {
  render() {
    return(
      <View style={styles.container}>
        <Text>
          Eletronics
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

module.exports = Eletronics;
