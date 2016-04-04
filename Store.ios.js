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

var Icon = require('react-native-vector-icons/Ionicons');

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
            underlayColor="#1e90ff"
            style={styles.button}
            onPress={() => this.restaurant()}>
            <Text style={styles.buttonText}>
              <Icon name="fork" size={50}/><Icon name="knife" size={50}/>
            </Text>
          </TouchableHighlight>
        </View>
        <View style={styles.container}>
          <TouchableHighlight
            underlayColor="#1e90ff"
            style={styles.button}
            onPress={() => this.beverage()}>
            <Text style={styles.buttonText}>
              <Icon name="coffee" size={50}/>
            </Text>
          </TouchableHighlight>
        </View>
        <View style={styles.container}>
          <TouchableHighlight
            underlayColor="#1e90ff"
            style={styles.button}
            onPress={() => this.eletronic()}>
            <Text style={styles.buttonText}>
              <Icon name="monitor" size={50}/>
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
    paddingTop: 20,
    backgroundColor: "#F5F5F5"
  },
  container: {
    paddingRight: 70,
    paddingLeft: 70,
    paddingTop: 50,
  },
  button: {
    height: 80,
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignSelf: 'stretch',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#d5dbdb'
  },
  buttonText: {
    fontSize: 15,
    color: 'black',
    alignSelf: 'center'

  }
});

module.exports = Store;
