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
  TouchableHighlight,
  Image
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

              <Image
                  source={require('image!iterate')}>
              </Image>
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

//trenger ikke størrelse
//må bygge på nytt hvis man adder bilder

AppRegistry.registerComponent('IterateConf', () => IterateConf);
