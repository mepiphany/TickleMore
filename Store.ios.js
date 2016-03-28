'use strict';

var React = require('react-native');
var Restaurant = require('./Restaurants.ios');
var Beverage = require('./Beverages.ios');
var Eletronic = require('./Eletronics.ios');

var {
  Component,
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
} = React;

class Store extends Component {
  restaurant() {
    this.props.navigator.push({
      title: "Restaurants",
      component: Restaurant
    });
  }
  beverage() {
    this.props.navigator.push({
      title: "Beverages",
      component: Beverage
    });
  }
  eletronic() {
    this.props.navigator.push({
      title: "Eletronics",
      component: Eletronic
    })
  }

  render() {
    return(
      <View style={styles.mainContainer}>
        <View style={styles.container}>
          <TouchableHighlight
            style={styles.button}
            onPress={() => this.restaurant()}>
            <Text style={styles.buttonText}>
              Restaurant
            </Text>
          </TouchableHighlight>
        </View>
        <View style={styles.container}>
          <TouchableHighlight
            style={styles.button}
            onPress={() => this.beverage()}>
            <Text style={styles.buttonText}>
              Beverage
            </Text>
          </TouchableHighlight>
        </View>
        <View style={styles.container}>
          <TouchableHighlight
            style={styles.button}
            onPress={() => this.eletronic()}>
            <Text style={styles.buttonText}>
              Eletronics
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}


var styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: 70,
  },
  container: {
    padding: 15

  },
  button: {
    height: 50,
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

module.exports = Store;
