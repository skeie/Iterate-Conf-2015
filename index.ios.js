/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} = React;

var IterateConf = React.createClass({

  _textPressed: function() {
      console.log('textPressed');
  },

  render: function() {
    return (
      <View style={styles.container}>
          <TouchableHighlight onPress={this._textPressed} underlayColor="green">
              <Text style={styles.woop}>
                  Woop woop
              </Text>
          </TouchableHighlight>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  woop: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

AppRegistry.registerComponent('IterateConf', () => IterateConf);
