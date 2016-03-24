'use strict';

var React = require('react-native');

var {
  Component,
  Text,
  View,
  StyleSheet,
  TouchableHighlight
} = React;

class CashInfo extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.container1}>
          <Text style={styles.text}>
            Cash
            Amount
          </Text>
        </View>
        <View style={styles.container}>
          <TouchableHighlight style={styles.button}>
            <Text style={styles.buttonText}>Invite Friends</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.container}>
          <TouchableHighlight style={styles.button}>
            <Text style={styles.buttonText}>History</Text>
          </TouchableHighlight>
        </View>
      </View>

    )
  }
}

var styles = StyleSheet.create({
  mainContainer: {
    paddingTop: 10
  },
  container: {
    paddingTop: 20,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    textAlign: 'left'
  },
  background: {
    flex: 3,
    backgroundColor: '#000',
  },
  container1: {
    height: 160,
    backgroundColor: '#000'
  },
  container2: {
    height: 200,
  },
  text: {
    color: '#fff',
    fontSize: 20,
    padding: 10,
  },
  button: {
    height: 50,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#d5dbdb',
    justifyContent: 'center',
    alignSelf: 'stretch',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#d5dbdb'
  },
  buttonText: {
    fontSize: 15,
    color: 'white',
    alignSelf: 'center'

  }
});

module.exports = CashInfo;