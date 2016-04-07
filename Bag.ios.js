'user strict';

var React = require('react-native')
var CashInfo = require('./CashInfo.ios')

var {
  View,
  Text,
  Image,
  ListView,
  Component,
  StyleSheet,
  ScrollView,
  ActivityIndicatorIOS,
  TouchableHighlight,
  Alert
} = React;

var Icons = require('react-native-vector-icons/MaterialIcons');
var REQUEST_URL = "http://localhost:3000/api/v1/restaurant_carts"

class Bag extends Component {
  backHome(){
    this.props.navigator.pop({
      title: "Store",
      component: CashInfo
    })
  }
  constructor(props){
    super(props);
    this.renderBag = this.renderBag.bind(this)
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      }),
      loaded: false,
    };
  }
  fetchData(){
    fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseData.restaurantCarts),
          loaded: true
        });
      })
      .done();
  }
  componentDidMount(){
    this.fetchData()
  }

  render() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }
    return(
      <ScrollView>
        <View style={styles.navContainer}>
        <View style={styles.navBar}>
          <TouchableHighlight
            style={{flex: 1, width: 5}}
            onPress={() => this.backHome()}>
            <Text style={styles.navBarText}><Icons name={"keyboard-arrow-left"} size={20}/><Icons name={"store"} size={20}/></Text>
          </TouchableHighlight>
          <View style={styles.navBarRight}>
            <Text style={styles.navBarTitle}>Bag</Text>
          </View>
        </View>
      </View>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderBag}/>
      </ScrollView>
    )
  }
  renderLoadingView() {
    return (
      <View style={styles.activityContainer}>
          <ActivityIndicatorIOS hidden="true" size="large" />
      </View>
    )
  }
  renderBag(bag) {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.rowContainer}>
          <Image
            source={{uri: bag.image}}
            style={styles.image}
            />
          <View style={styles.container}>
            <Text style={{fontWeight: "200", fontSize: 10}}>{bag.title}</Text>
            <Text style={{fontWeight: "bold"}}>{bag.description}</Text>
            <Text style={{color: '#ff8c00', fontWeight: "bold"}}>
              <Image
                style={styles.coinImg}
                source={require("./img/ticklemorecoin.png")}/>
              &nbsp;{bag.cash_value}</Text>
          </View>
          <View>
            <TouchableHighlight
              underlayColor={"transparent"}>
              <Text><Icons name="credit-card" size={20} /></Text>
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
    flex: 1,
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
    right: 20
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

module.exports = Bag;
