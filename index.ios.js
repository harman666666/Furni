import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {Col, Grid, Row} from 'react-native-elements';
import React, { Component } from 'react';

import Camera from 'react-native-camera';

export default class Furni extends Component {
  render() {
    return (
      <View style={[styles.background, styles.size, styles.flexCol]}>
            <Header />
            <Content />
            <Footer />
      </View>
    );
  }
}
class Content extends Component {
  render() {
    return (
      <View style={[styles.contentFlex, styles.flexRow]}>
        <Text style={styles.headerText}> Fook </Text>
      </View>
    );
  }
}
class Header extends Component {
  render() {
    return (
      <View style={[styles.header, styles.flexRow, styles.headerFlex]}>
        <View style={{flex:4}}> 
          <Text> FURNI </Text>
        </View> 
        <View style={{flex:4}}>
          <Text> FURNI </Text>
        </View> 
        <View style={{flex:4}}>
          <Text> FURNI </Text>
        </View> 
      </View>
    );
  }
}

class Footer extends Component {
  render() {
    return (
      <View style={[styles.header, styles.footerFlex]}>
        <Text> Footer </Text>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  intro: {
    textAlign: 'center',
  },
  background: {
    backgroundColor: 'grey',
  },
  size: {
    width: '100%',
    height: '100%'
  },

  header: {
    width: '100%',
    backgroundColor: "white",
  },

  footer: {
    width: '100%',
    backgroundColor: "white",
  },

  headerText: {
    textAlign: "center",
    fontSize: 18,
  },
  flexCol: {
    flexDirection: 'column' 
  }, 
  flexRow: {
    flexDirection: 'row' 
  },
  headerFlex: {
    flex: 1,
    alignItems: "center",
  },
  footerFlex: {
    flex: 1,
  },
  contentFlex: {
    flex: 10,
  }

});

AppRegistry.registerComponent('Furni', () => Furni);
