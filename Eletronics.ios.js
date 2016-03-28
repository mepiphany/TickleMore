'use strict';

var React = require('react-native');

var {
  StyleSheet,
  View,
  TouchableHighlight,
  Text,
  Component,
  ListView,
  Image
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
  mainContainer: {
    flex: 1
  },
  rowContainer: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center'
  },
  image: {
    width: 50,
    height: 50
  },
  rightContainer: {
    flexDirection: 'row',
    flex: 1
  },
  separator: {
    height: 1,
    backgroundColor: '#dddddd'
  },
  container: {
    flex: 1,
    alignItems: 'center'
  }

});

module.exports = Eletronics;
