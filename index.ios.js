import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  Body,
  Button,
  Container,
  Content,
  Footer,
  FooterTab,
  Header,
  Icon,
  Left,
  Right,
  Title,
} from 'native-base';
import React, { Component } from 'react';

export default class Furni extends Component {
  render() {
    return (
      <View>
      <Container>
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon name='menu' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Furni</Title>
                    </Body>
                    <Right />
                </Header>

                <Content>
                   <Text style={styles.intro}> Build the Look and Feel </Text>
                   <Text style={styles.intro}> That You Want </Text> 
                </Content>

                <Footer>
                    <FooterTab>
                        <Button full>
                            <Text>Footer</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
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
    backgroundColor: '#333333',
  }
});

AppRegistry.registerComponent('Furni', () => Furni);
