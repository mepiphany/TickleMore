'use strict';

var React = require('react-native');
var CashInfo = require('./CashInfo.ios')

var {
  View,
  Text,
  StyleSheet,
  Component,
  ListView,
  TouchableHighlight,
  Alert,
  ScrollView,
  ActivityIndicatorIOS
} = React;

var Icon = require('react-native-vector-icons/Ionicons');
var REQUEST_URL = "http://localhost:3000/api/v1/users"

class InviteFriends extends Component {
  backToCashInfo(){
    this.props.navigator.pop({
      title: "CashInfo",
      component: CashInfo
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
        dataSource: this.state.dataSource.cloneWithRows(responseData.users),
        loaded: true,
      });
    })
    .done();
  }
  componentDidMount() {
    this.fetchData()
  }
  render() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }
    return(
      <ScrollView>
      <View style={styles.container}>
        <View style={styles.navBar}>
            <TouchableHighlight
              style={{flex: 1, width: 5}}
              onPress={() => this.backToCashInfo()}>
              <Text style={styles.navBarText}><Icon name={"chevron-left"} size={15}/>&nbsp;&nbsp;<Icon name={"cash"} size={15}/></Text>
            </TouchableHighlight>
          <View style={styles.navBarRight}>
            <Text style={styles.navBarTitle}>Invite Friends</Text>
          </View>
        </View>
        <View>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={this.renderFriend}>
          </ListView>
        </View>
      </View>
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
  renderFriend(friends) {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.rowContainer}>
          <View style={styles.leftContainer}>
            <Text style={{fontWeight: 'bold'}}>{friends.name}</Text>
            <Text style={{fontWeight: '200'}}>{friends.email}</Text>
          </View>
          <View style={styles.rightContainer}>
            <TouchableHighlight>
            <Text><Icon name={"paper-airplane"} size={20}/></Text>
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
    alignItems: 'center'
  },
  separator: {
    height: 1,
    backgroundColor: '#dddddd'
  },
  leftContainer: {
    flex: 1,
    alignItems: 'flex-start'
  },
  navBar: {
    height: 49,
    backgroundColor: '#ddd',
    borderBottomColor: '#d5dbdb',
    borderTopColor: '#d5dbdb',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    flexDirection: 'row'
  },
  container: {
    flex: 1,
    paddingTop: 20,
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
  navBarLeft: {
    flex: 1,
    alignItems: 'flex-start',

  },
  navBarRight: {
    flex: 1,
    alignSelf: 'center',
    right: 53
  },
  activityContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }




});

module.exports = InviteFriends;
