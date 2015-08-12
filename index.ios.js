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
        <View style={styles.container}>
            <Text style={styles.woop}>
                Woop woop
            </Text>
        </View>
      );
    }
  });

  var styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#F5FCFF',
      alignItems: 'center'
    },
    woop: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
  });

AppRegistry.registerComponent('IterateConf', () => IterateConf);
