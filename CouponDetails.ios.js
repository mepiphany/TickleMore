'user strict';

var React = require('react-native');
var Coupons = require('./Coupons.ios')

var {
  Text,
  Component,
  View,
  Image,
  StyleSheet,
  TouchableHighlight
} = React;

var Icon = require('react-native-vector-icons/Ionicons');
class CouponDetails extends Component {
  backToCoupon() {
    this.props.navigator.pop({
      title: "Coupons",
      component: Coupons
    })
  }
  render() {
    var coupon = this.props.coupon;
    return(
      <View style={styles.container}>
        <View style={styles.navBar}>
          <TouchableHighlight
            style={{flex: 1, width: 5}}
            onPress={() => this.backToCoupon()}>
            <Text style={styles.navBarText}><Icon name={"chevron-left"} size={17}/>&nbsp;&nbsp;<Icon name={"ios-cart-outline"} size={17}/></Text>
          </TouchableHighlight>
          <View style={styles.navBarRight}>
            <Text style={styles.navBarTitle}>Coupons</Text>
          </View>
        </View>
        <View style={styles.imageContainer}>
          <Image style={styles.image}
            source={{uri: coupon.image}} />
        </View>
        <View style={styles.heading}>
          <Text style={styles.title}>{coupon.title}</Text>
          <View style={styles.separator}></View>
        </View>
        <Text style={styles.description}>{coupon.description}</Text>
        <View style={styles.barcodeImgContainer}>
          <Image
            style={styles.barcodeImg}
            source={require("./img/barcode.png")}/>
        </View>
      </View>
    );
  }

}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20
  },
  heading: {
    backgroundColor: '#f8f8f8'
  },
  separator: {
    height: 1,
    backgroundColor: '#dddddd'
  },
  image: {
    width: 100,
    height: 58
  },
  price: {
    fontSize: 25,
    fontWeight: 'bold',
    margin: 5,
    color: '#48bbec'
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    margin: 5,
    color: '#656565'
  },
  description: {
    fontSize: 18,
    margin: 5,
    color: '#656565',
    paddingTop: 20
  },
  imageContainer: {
    paddingTop: 70,
    paddingBottom: 70,
    justifyContent: 'center',
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
  navBarTitle: {
    color: '#ddd',
    width: 110,
    fontSize: 18
  },
  navBarRight: {
    flex: 1,
    alignSelf: 'center',
    right: 38
  },
  barcodeImgContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  barcodeImg: {
    top: 70,
    width: 120,
    height: 90
  }
});

module.exports = CouponDetails;
