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

var REQUEST_URL = 'http://localhost:3000/api/v1/restaurants'

class Restaurants extends Component {
  constructor(props) {
  super(props);
  this.state = {
    dataSource: new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    }),
      loaded: false,
    };
  }
  fetchData(){
    fetch(REQUEST_URL)
    .then((response) => response.json())
    .then((responseData)=> {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(responseData.restaurants),
        loaded: true,
      });
    })
    .done();
  }
  componentDidMount(){
    this.fetchData();
  }
  render() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }
    return(
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderRestaurant}/>

    )
  }
  renderLoadingView() {
    return (
      <View style={styles.container}>
        <Text>
          Loading Restaurants...
        </Text>
      </View>
    )
  }
  renderRestaurant(restaurant) {
    return (

      <View style={styles.mainContainer}>
        <View style={styles.rowContainer}>
          <Image
            source={{uri: restaurant.image}}
            style={styles.image}
            />
          <View style={styles.container}>
            <Text>{restaurant.title}</Text>
          </View>
        </View>
        <View style={styles.separator}></View>
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

module.exports = Restaurants;
