import {
  AppRegistry,
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Col, Grid, Row} from 'react-native-elements';
import React, { Component, PropTypes } from 'react';

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
  static propTypes = {
    press: PropTypes.func,
    text: PropTypes.string,
  };

  constructor(props){
    super(props);
  }

  render() {
    return (
      <View style={[styles.contentFlex, styles.flexRow]}>
      <List width={"80%"}> 
        <ListItem text="fook" onPress={() => console.log("Fick")}> </ListItem>
      </List>
      </View>
    );
  }
}
class List extends Component {
  static propTypes= {
    width: PropTypes.string.isRequired,
  }
  constructor(props){
    super(props);
  }
  render(){
    return (
    <View style={{width: this.props.width}}>
      {this.props.children}
    </View> 
    );
  }
}
  
  ListItemStyles = StyleSheet.create({
    touchedListItem: {
      shadowColor: "black",
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowRadius: 5,
      shadowOpacity: 0.75,
    },
    
    listItem: {
      backgroundColor: "red",
      borderColor: "black",
      borderStyle: "solid",
      borderRadius: 12,
      height: "5%",
    },
  });

class ListItem extends Component {
  static propTypes = {
    onPress: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
  }

  

  constructor(props){
    super(props);
    this.touchStart = this.touchStart.bind(this);
    this.touchEnd = this.touchEnd.bind(this);
    this.state = {currentStyles : [ListItemStyles.listItem]}
  }
  

  touchStart() {
    this.setState({currentStyles: [ListItemStyles.listItem, ListItemStyles.touchedListItem]});
  }

  touchEnd() {
    this.setState({currentStyles: [ListItemStyles.listItem]});
  }

  render() {
    const {
      onPress,
      text,
      width,
    } = this.props;
    
    console.log(this.state.currentStyles);

return (
    <View style={this.state.currentStyles} onTouchStart={this.touchStart} onTouchEnd={this.touchEnd}>
      <Text style={{textAlign: "center", fontFamily: "Arial", top: "20%"}}>{text}</Text>
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
  },
});

AppRegistry.registerComponent('Furni', () => Furni);
