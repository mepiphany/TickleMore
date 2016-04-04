'use strict';

var React = require('react-native');

var {
  Component,
  View,
  Text,
  StyleSheet,
  Switch,
  ScrollView
} = React;

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
          <Text>Example 1</Text>
          <View style={styles.switch}>
            <Switch
              onValueChange={(value) => this.setState({exampleOneFalse: value})}
              value={this.state.exampleOneFalse}
              />
          </View>
        </View>
        <View style={styles.content}>
          <Text>Example 2</Text>
          <View style={styles.switch}>
            <Switch
              onValueChange={(value) => this.setState({falseSwitchOn2: value})}
              value={this.state.falseSwitchOn2} />
          </View>
        </View>
        <View style={styles.content}>
          <Text>Example 3</Text>
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
        <View style={styles.header}><Text style={styles.headerText}>Info</Text>
      </View>
      <View style={styles.content}>
        <Text>Exmaple 1</Text>
      </View>
      <View style={styles.content}>
        <Text>Exmaple 2</Text>
      </View>
      <View style={styles.content}>
        <Text>Exmaple 3</Text>
      </View>
      <View style={styles.content}>
        <Text>Exmaple 4</Text>
      </View>
    </View>
  )
}


  render() {
    return(
      <ScrollView>
        {this.renderAppSetting()}
        {this.renderInfo()}
      </ScrollView>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    flex: 1
  },
  header: {
    backgroundColor: "#000",
    height: 50,
  },
  headerText: {
    color: "#fff",
    fontSize: 20
  },
  content: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: "#ddd"
  },
  switch: {
    flex: 1,
    alignItems: 'flex-end'
  },

});

module.exports = More;
