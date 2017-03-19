import {
  AppRegistry,
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Icon, Tab, Tabs} from 'react-native-elements';
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
      <List style={{width:"80%", marginLeft: "10%"}}> 
        <ListItem text="Analyze Room" onPress={() => console.log("Fick")}> </ListItem>
        <ListItem text="Find Cool Furniture" onPress={() => console.log("Fick")}> </ListItem>
      </List>
      </View>
    );
  }
}
class List extends Component {
  static propTypes= {
    style: PropTypes.object
  }
  constructor(props){
    super(props);
  }
  render(){
    return (
    <View style={this.props.style}>
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
      borderWidth: 1,
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

return (
    <View style={this.state.currentStyles} onTouchStart={this.touchStart} onTouchEnd={this.touchEnd} onTouchEnd={onPress}>
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

class Feed extends Component {

}

class Profile extends Component {
  
}

class Footer extends Component {
  
  constructor() {
  super()
  this.state = {
    selectedTab: 'profile',
  }
}

changeTab (selectedTab) {
  this.setState({selectedTab})
}

render() {

  const { selectedTab } = this.state

    return (
      <View style={[styles.header, styles.footerFlex]}>
   

<Tabs>
  <Tab
    //titleStyle={{fontWeight: 'bold', fontSize: 10}}
    //selectedTitleStyle={{marginTop: -1, marginBottom: 6}}
    //selected={selectedTab === 'feed'}
    //title={selectedTab === 'feed' ? 'FEED' : null}
    renderIcon={() => <Icon containerStyle={{justifyContent: 'center', alignItems: 'center', marginTop: 12}} color={'#5e6977'} name='whatshot' size={33} />}
    renderSelectedIcon={() => <Icon color={'#6296f9'} name='whatshot' size={30} />}
    onPress={() => this.changeTab('feed')}>
    <Feed />
  </Tab>
  <Tab
    //titleStyle={{fontWeight: 'bold', fontSize: 10}}
    //selectedTitleStyle={{marginTop: -1, marginBottom: 6}}
    //selected={selectedTab === 'profile'}
    //title={selectedTab === 'profile' ? 'PROFILE' : null}
    renderIcon={() => <Icon containerStyle={{justifyContent: 'center', alignItems: 'center', marginTop: 12}} color={'#5e6977'} name='person' size={33} />}
    renderSelectedIcon={() => <Icon color={'#6296f9'} name='person' size={30} />}
    onPress={() => this.changeTab('profile')}>
    <Profile />
  </Tab>
</Tabs>
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
    //alignItems: "center"
  },
});

AppRegistry.registerComponent('Furni', () => Furni);
