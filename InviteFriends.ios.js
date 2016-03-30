'use strict';

var React = require('react-native');

var {
  View,
  Text,
  StyleSheet,
  Component
} = React;

class InviteFriends extends Component {
  render() {
    return(
      <View style={styles.container}>
        <Text>
          InviteFriends
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

module.exports = InviteFriends;
