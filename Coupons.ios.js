'use strict';

var React = require('react-native');

var {
  Component,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
  ListView,
  ScrollView
} = React;

var REQUEST_URL = 'http://localhost:3000/api/v1/coupons'

class Coupons extends Component {
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
    .then((responseData) => {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(responseData.coupons),
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
    return (
      <ScrollView>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderCoupon}/>
    </ScrollView>
  )
  }
  renderLoadingView() {
    return (
      <View style={styles.container}>
        <Text>
          Loading Coupons...
        </Text>
      </View>
    );
  }
  renderCoupon(coupon) {
    return (
      <View>
        <View style={styles.rowContainer}>
          <Image
            source={{uri: coupon.image}}
            style={styles.image}
            />
          <View style={styles.container}>
            <Text>{coupon.title}</Text>
          </View>
        </View>
        <View style={styles.separator}></View>
      </View>
    )
  }

}

var styles = StyleSheet.create({
  rowContainer: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center'
  },
  image: {
    width: 100,
    height: 58
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

module.exports = Coupons;
