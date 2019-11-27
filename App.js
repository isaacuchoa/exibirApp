/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {View, Text, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Container, Header, Left, Body, Right, Fab,Title, Button,Content, Tab, Tabs, Footer, FooterTab } from 'native-base';
import Tab1 from './conteudo/about.js';
import Tab2 from './conteudo/servicos.js';
import Tab3 from './conteudo/projetos.js';

export default class App extends React.Component {
	
  render() {
    return (
     <Container>
        <Header>
        
          <Left>
             <Button transparent>
              <Icon name='bars' style={styles.icon} />
            </Button>
          </Left>
          <Body>
            <Image source={require('./img/logo.png')}></Image>
          </Body>
          <Right>
           
          </Right>                      
         
        </Header>	
          <Tabs>
          <Tab heading="Home">
            <Tab3 />
          </Tab>
          <Tab heading="Quem Somos">
            <Tab1 />
          </Tab>
          <Tab heading="Serviços">
            <Tab2 />
          </Tab>
        </Tabs>  
        <Footer>
          <FooterTab>            
            <Button vertical>
              <Icon name="envelope" style={styles.icon}/>
              <Text style={styles.icon}>Fale Conosco</Text>
            </Button>
            <Button vertical>
              <Icon name="instagram" style={styles.icon} />
              <Text style={styles.icon}>Instagram</Text>
            </Button>
            <Button vertical>
              <Icon name="whatsapp"style={styles.icon}/>
              <Text style={styles.icon}>Mensagem</Text>
            </Button>
          </FooterTab>
        </Footer>         
      </Container>   
      
    );
  }
}

const styles = StyleSheet.create({
  segMenu: {
  	padding: 2,
  	margin: 2,
  	backgroundColor: '#ccc'
  },
  btnMenu: {    
    margin: 2,
    backgroundColor:'#fff',
    borderRadius: 12,
    padding: 8
  },
  content: {
  	flex: 2,
  	flexDirection: 'row', 
  	height: 50, 
  	backgroundColor: 'skyblue'
  },
  icon: {
  	color: '#ffffff'

  }
 
});