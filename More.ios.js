'use strict';

var React = require('react-native');


var {
  Component,
  View,
  Text,
  StyleSheet,
  Switch,
  ScrollView,
  Image
} = React;
var Icon = require('react-native-vector-icons/Ionicons');

class More extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exampleOneTrue: true,
      exampleOneFalse: false,
      trueSwitchOn2: true,
      falseSwitchOn2: false,
      trueSwitchOn3: true,
      falseSwitchOn3: false,

    }
  }

  renderAppSetting() {
    return (
      <View style={styles.container}>
        <View style={styles.header}><Text style={styles.headerText}>App Settings</Text></View>
        <View style={styles.content}>
          <Text style={styles.contentText}><Icon name="unlocked" size={18}/>&nbsp;&nbsp;Enable App on LockScreen</Text>
          <View style={styles.switch}>
            <Switch
              onValueChange={(value) => this.setState({exampleOneFalse: value})}
              value={this.state.exampleOneFalse}
              />
          </View>
        </View>
        <View style={styles.content}>

          <Text style={styles.contentText}>&nbsp;<Icon name="iphone" size={22}/>&nbsp;&nbsp;&nbsp;Enable Vibration After Unlock</Text>
          <View style={styles.switch}>
            <Switch
              onValueChange={(value) => this.setState({falseSwitchOn2: value})}
              value={this.state.falseSwitchOn2} />
          </View>
        </View>
        <View style={styles.content}>
          <Text style={styles.contentText}>
            <Image
              style={{width: 16, height: 16}}
              source={require('./img/ticklemorecoin.png')}
              />
            &nbsp;Enable Cash Notification</Text>
          <View style={styles.switch}>
            <Switch
              onValueChange={(value) => this.setState({falseSwitchOn3: value})}
              value={this.state.falseSwitchOn3} />
          </View>
        </View>
      </View>
    )
  }

  renderInfo() {
    return(
      <View>
        <View style={styles.headerInfo}><Text style={styles.headerText}>Infomation</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.contentText}>Account</Text>
          <View style={styles.icon}>
          <Icon name="person" size={22} />
          </View>
      </View>
      <View style={styles.content}>
        <Text style={styles.contentText}>Announcement</Text>
        <View style={styles.icon}>
        <Icon name="speakerphone" size={22}/>
        </View>
      </View>
      <View style={styles.content}>
        <Text style={styles.contentText}>Feedback</Text>
        <View style={styles.icon}>
          <Icon name="chatbox-working" size={22}/>
        </View>
      </View>
      <View style={styles.content}>
        <Text style={styles.contentText}>Terms</Text>
        <View style={styles.icon}>
          <Icon name="ios-paper" size={22}/>
        </View>
      </View>
      <View style={styles.content}>
        <Text style={styles.contentText}>Privacy</Text>
          <View style={styles.icon}>
          <Icon name="lock-combination" size={22}/>
          </View>
      </View>
      <View style={styles.content}>
        <Text style={styles.contentText}>Version</Text>
        <View style={styles.icon}>
          <Icon name="information-circled" size={22}/>
        </View>
      </View>
    </View>
  )
}


  render() {
    return(
      <ScrollView style={{marginBottom: 55}}>
        {this.renderAppSetting()}
        {this.renderInfo()}
      </ScrollView>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    paddingTop: 0.1,
    flex: 1,
    backgroundColor: "black"
  },
  header: {
    backgroundColor: "#F5F5F5",
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopColor: "#d5dbdb",
    borderBottomColor: "#d5dbdb",
    borderBottomWidth: 1,
    borderTopWidth: 1
  },
  headerInfo: {
    backgroundColor: "#F5F5F5",
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopColor: "#d5dbdb",
    borderBottomColor: "#d5dbdb",
    borderBottomWidth: 1,
  },
  headerText: {
    color: "#000",
    fontSize: 20,
    fontWeight: "400"
  },
  content: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderBottomColor: "#d5dbdb"
  },
  switch: {
    flex: 1,
    alignItems: 'flex-end'
  },
  contentText: {
    fontWeight: 'bold'
  },
  icon: {
    flex: 2,
    alignItems: 'flex-end'
  }

});

module.exports = More;
