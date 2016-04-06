'use strict';

var React = require('react-native');
var CouponDetails = require('./CouponDetails.ios')

var {
  Component,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
  ListView,
  ScrollView,
  ActivityIndicatorIOS
} = React;

var Icon = require('react-native-vector-icons/Ionicons');
var REQUEST_URL = 'http://localhost:3000/api/v1/coupons'

class Coupons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1.id !== row2.id,
      }),
      loaded: false,
    };
  }
  fetchData() {
    fetch(REQUEST_URL)
    .then((response) => response.json())
    .then((responseData) => {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(responseData.coupons),
        responseData: responseData.coupons,
        loaded: true,
      });
    })
    .done();
  }

  rowPressed(couponsDetail) {
    var coupon = this.state.responseData.filter(prop => prop.id === couponsDetail)[0];

    this.props.navigator.push({
      title: "Coupons",
      component: CouponDetails,
      passProps: {coupon: coupon}
    });
  }

  componentDidMount(){
    this.fetchData();
  }
  render() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }
    return (
      <ScrollView style={{marginBottom: 55}}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow.bind(this)}/>
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
  renderRow(rowData, sectionID, rowID) {
    return (
      <View style={styles.mainContainer}>
        <TouchableHighlight
          underlayColor= "#1e90ff"
          onPress={() => this.rowPressed(rowData.id)}>
          <View style={styles.rowContainer}>
            <Image
              source={{uri: rowData.image}}
              style={styles.image}
              />
            <View style={styles.container}>
              <View style={{flexDirection: 'row'}}>
                <Text style={{fontWeight: 'bold', fontSize: 15, left: 80}}>{rowData.title}</Text>
              </View>
                <View style={styles.icon}>
                  <Icon name="arrow-right-b" size={17}/>
                </View>
            </View>
          </View>
        </TouchableHighlight>
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
    alignSelf: 'center',
    flexDirection: 'row',
  },
  icon: {
    flex: 2,
    alignItems: 'flex-end',
  },
  activityContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }

});

module.exports = Coupons;
