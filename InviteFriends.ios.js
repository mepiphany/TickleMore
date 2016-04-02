'use strict';

var React = require('react-native');

var {
  View,
  Text,
  StyleSheet,
  Component,
  ListView,
  TouchableHighlight
} = React;

var REQUEST_URL = "http://localhost:3000/api/v1/users"

class InviteFriends extends Component {
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
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderFriend}/>

    )
  }
  renderLoadingView() {
    return (
      <View style={styles.container}>
        <Text>
          Loading Friends...
        </Text>
      </View>
    )
  }
  renderFriend(friends) {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.rowContainer}>
          <View style={styles.leftContainer}>
            <Text>{friends.name}</Text>
          </View>
          <View style={styles.rightContainer}>
            <Text>Invite</Text>
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

});

module.exports = InviteFriends;
