'use strict';

var React = require('react-native');
var Store = require('./Store.ios')

var {
  StyleSheet,
  View,
  TouchableHighlight,
  Component,
  Text,
  ListView,
  Image,
  ScrollView,
  ActivityIndicatorIOS
} = React;

var Icon = require('react-native-vector-icons/Ionicons');
var REQUEST_URL = 'http://localhost:3000/api/v1/beverages'

class Beverages extends Component {
  backToStore(){
    this.props.navigator.pop({
      title: "Store",
      component: Store
    })
  }
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false,
    };
  }
  fetchData() {
    fetch(REQUEST_URL)
    .then((response) => response.json())
    .then((responseData) => {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(responseData.beverages),
        loaded: true,
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
    return (
      <ScrollView>
        <View style={styles.navContainer}>
          <View style={styles.navBar}>
            <TouchableHighlight
              style={{flex: 1, width: 5}}
              onPress={() => this.backToStore()}>
              <Text style={styles.navBarText}><Icon name={"chevron-left"} size={17}/>&nbsp;&nbsp;<Icon name={"ios-cart-outline"} size={17}/></Text>
            </TouchableHighlight>
            <View style={styles.navBarRight}>
              <Text style={styles.navBarTitle}>Beverages</Text>
            </View>
          </View>
        </View>
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderBeverage}/>
      </ScrollView>
    )
  }
  renderLoadingView() {
    return (
      <View style={styles.activityContainer}>
          <ActivityIndicatorIOS hidden="true" size="large" />
      </View>
    );
  }
  renderBeverage(beverage) {
      return (
        <View style={styles.mainContainer}>
          <View style={styles.rowContainer}>
            <Image
              source={{uri: beverage.image}}
              style={styles.image}
              />
            <View style={styles.container}>
              <Text style={{fontWeight: "200", fontSize: 10}}>{beverage.title}</Text>
              <Text style={{fontWeight: "bold"}}>{beverage.description}</Text>
              <Text style={{color: '#ff8c00', fontWeight: "bold"}}>
                <Image
                  style={styles.coinImg}
                  source={require("./img/ticklemorecoin.png")}/>
                &nbsp;{beverage.c}</Text>
            </View>
            <View>
              <Text><Icon name="plus-circled" size={17}/></Text>
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
  navBarTitle: {
    color: '#ddd',
    width: 110,
    fontSize: 18
  },
  navBarRight: {
    flex: 1,
    alignSelf: 'center',
    right: 40
  },
  navContainer: {
    flex: 1,
    paddingTop: 20
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

module.exports = Beverages;
