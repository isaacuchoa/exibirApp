import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body } from 'native-base';


export default class Projetos extends React.Component {
  render() {
    return (
		<Container>
        <Header />
        <Content>
          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Body>
                 <Text style={styles.txth1}>Planejamento e Inovação</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
               <Image source={require('../img/about.png')}/> 
                              
              </Body>
            </CardItem>
            <CardItem>
              <Left>
               <Text>Conheça os nossos métodos de desenvolvimento de sistemas e aplicativos, permitindo
               a criação de serviços e produtos de qualidade.</Text>
              </Left>
            </CardItem>
          </Card>
        </Content>
      </Container>
		);
	}
}

Projetos.navigationOptions = {
  title: 'Projetos',
}

const styles = StyleSheet.create({
  txtAbout: {
  	fontSize: 18,
  	color: '#000000',
  	fontFamily: 'Correio',
  	margin: 5

  },

  txth1: {
  	fontSize: 20,
  	fontWeight:'bold',
  	margin: 5 
  }
  
});