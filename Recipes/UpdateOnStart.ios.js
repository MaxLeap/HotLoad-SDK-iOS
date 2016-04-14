'use strict';

var pkg = require('./package');
var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

var HotLoad = require('react-native-hot-load');

var UpdateOnStart = React.createClass({
  componentDidMount: function() {
    HotLoad.checkForUpdate().done((update) => {
      if (update && update.downloadUrl) {
        update.download().done((newPackage) => {
          newPackage.install();
        });
      }
    });
  },
  render: function() {
    return (
      <View style={styles.container}>
        <Text>
          Welcome to {pkg.name} {pkg.version}!
        </Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

AppRegistry.registerComponent('UpdateOnStart', () => UpdateOnStart);
