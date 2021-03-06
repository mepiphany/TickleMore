'use strict';

var React = require('react-native');
var Store = require('./Store.ios')

var {
  StyleSheet,
  View,
  TouchableHighlight,
  Text,
  Component,
  ListView,
  Image,
  ScrollView,
  ActivityIndicatorIOS,
  Alert,
} = React;

var Icons = require('react-native-vector-icons/MaterialIcons');
var Icon = require('react-native-vector-icons/Ionicons');
var REQUEST_URL = 'http://localhost:3000/api/v1/restaurants'
var POST_REQUEST_URL = 'http://localhost:3000/api/v1/restaurant_carts'

class Restaurants extends Component {
  backToStore(){
    this.props.navigator.pop({
      title: "Store",
      component: Store
    })
  }
  constructor(props) {
  super(props);
  index: 0,
  this.renderRestaurant = this.renderRestaurant.bind(this)
  this.state = {
    dataSource: new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1.id !== row2.id

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
        dataRestaurant: responseData.restaurants,
        loaded: true,
      });
    })
    .done();
  }
  componentDidMount(){
    this.fetchData();
  }

  postData(restaurant) {
        fetch(POST_REQUEST_URL, {
          method: "POST",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            title: restaurant.title,
            image: restaurant.image,
            description: restaurant.description,
            cash_value: restaurant.c
          })
        })
      }

      onClick(restaurant) {
        Alert.alert(
          'Add it to your Bag?',
          'Go to Home for more info',
          [
            {text: "Yes!", onPress: () =>
              (this.postData(this.state.dataRestaurant.filter(res => res.id === restaurant)[0]))
              },
            {text: "No!"}
          ]
        )
      }

  render() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }
    return(
      <View style={styles.navContainer}>
        <View style={styles.navBar}>
          <TouchableHighlight
            style={{flex: 1, width: 5}}
            onPress={() => this.backToStore()}>
            <Text style={styles.navBarText}><Icons name={"keyboard-arrow-left"} size={20}/><Icons name={"store"} size={20}/></Text>
          </TouchableHighlight>
          <View style={styles.navBarRight}>
            <Text style={styles.navBarTitle}>Restaurants</Text>
          </View>
        </View>
      <ScrollView>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRestaurant}/>
      </ScrollView>
    </View>
    )
  }
  renderLoadingView() {
    return (
      <View style={styles.activityContainer}>
          <ActivityIndicatorIOS hidden="true" size="large" />
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
            <Text style={{fontWeight: "200", fontSize: 10}}>{restaurant.title}</Text>
            <Text style={{fontWeight: "bold"}}>{restaurant.description}</Text>
            <Text style={{color: '#ff8c00', fontWeight: "bold"}}>
              <Image
                style={styles.coinImg}
                source={require("./img/ticklemorecoin.png")}/>
              &nbsp;{restaurant.c}</Text>
          </View>
          <View>
            <TouchableHighlight
              index={this.state.index}
              underlayColor={"transparent"}
              onPress={() => this.onClick(restaurant.id)}>
              <Text><Icon name="plus-circled" size={20} /></Text>
            </TouchableHighlight>
          </View>
        </View>
        <View style={styles.separator}></View>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginBottom: 5
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
  navContainer: {
    flex: 1,
    paddingTop: 20
  },
  container: {
    flex: 1,
    alignItems: 'center'
  },
  navBar: {
    height: 49,
    borderBottomColor: '#d5dbdb',
    borderTopColor: '#d5dbdb',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    backgroundColor: '#000',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  navBarText: {
    flex: 1,
    color: '#fff',
    textAlign: 'left',
    width: 50,
    paddingLeft: 10
  },
  navBarRight: {
    flex: 1,
    alignSelf: 'center',
    right: 50
  },
  navBarTitle: {
    color: '#ddd',
    width: 110,
    fontSize: 18
  },
  coinImg: {
    width: 11,
    height: 11
  },
  activityContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

module.exports = Restaurants;
