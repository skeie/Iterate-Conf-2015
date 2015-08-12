
'use strict';

var React = require('react-native');
var Dimensions = require('Dimensions');
var {
  width,
  height
} = Dimensions.get('window');
var {
  AppRegistry,
  StyleSheet,
  View,
  Animated
} = React;
var PICTURE_HEIGHT = 30;
var PICTURE_WIDTH = 100;
var PICTURE_OFFSET_BOTTOM = 10;
var PICTURE_OFFSET_LEFT_RIGHT = 75;

var SPRING_CONFIG = {tension: 1, friction: 6}; //Soft spring

var IterateConf = React.createClass({
  getInitialState: function() {
    return {
        pan: new Animated.ValueXY()
    };
  },
  componentDidMount: function() {
    this.startAndRepeat();
  },
  startAndRepeat: function() {
    this.triggerAnimation(this.startAndRepeat);
  },
  triggerAnimation: function(cb) {

    Animated.sequence([
      Animated.spring(this.state.pan, {
            ...SPRING_CONFIG,
            toValue: {x: PICTURE_OFFSET_BOTTOM, y: (height - PICTURE_HEIGHT) - PICTURE_OFFSET_BOTTOM } //animate to bottom left
      }),
      Animated.spring(this.state.pan, {
          ...SPRING_CONFIG,
          toValue: {x: (width - PICTURE_HEIGHT)-PICTURE_OFFSET_LEFT_RIGHT, y: (height - PICTURE_HEIGHT) - PICTURE_OFFSET_BOTTOM} // animated to bottom right
      }),
      Animated.spring(this.state.pan, {
            ...SPRING_CONFIG,
            toValue: {x: (width - PICTURE_HEIGHT)-PICTURE_OFFSET_LEFT_RIGHT, y: PICTURE_HEIGHT} //animate to top right
      }),
      Animated.spring(this.state.pan, {
          ...SPRING_CONFIG,
          toValue: {x: PICTURE_OFFSET_BOTTOM, y: PICTURE_HEIGHT} // return to start
      })
    ]).start(cb);
  },
  getStyle: function() {
    return [
              styles.square,
              {
                transform: this.state.pan.getTranslateTransform()
              }
            ];
  },
  render: function() {
    return (
      <View style={styles.container}>
        <Animated.Image  source={require('image!iterate')} style={this.getStyle()} />
      </View>
    );
  }
});
var styles = StyleSheet.create({
  container: {
    flex: 1
  },
  square: {
    width: PICTURE_WIDTH,
    height: PICTURE_HEIGHT
  }
});
//trenger ikke størrelse
//må bygge på nytt hvis man adder bilder

AppRegistry.registerComponent('IterateConf', () => IterateConf);
