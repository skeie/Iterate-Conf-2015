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
} = React;

var IterateConf = React.createClass({
  render: function() {
    return (
      <View>
        <Text>
          WOOP WOOP
        </Text>
      </View>
    );
  }
});

AppRegistry.registerComponent('IterateConf', () => IterateConf);
