'use strict';

var React = require('react-native');

var {
  Component,
  View,
  Text,
  StyleSheet
} = React;

class More extends Component {
  render() {
    return(
      <View style={styles.container}>
        <Text>
          More
        </Text>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

module.exports = More;
