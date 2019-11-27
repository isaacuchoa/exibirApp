import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class Servicos extends React.Component {
  render() {
    return (
		<View>
			<Text h3 style={styles.txth1}>Aplicativos</Text>			
			<Text style={styles.txtAbout}>			
			Criamos aplicativos focado no usuário, com intuito de criar experiências 
			inovadoras e somos especialistas em criação de aplicativos móveis 
			para iOS e Android.
			</Text>
			<Text h3  style={styles.txth1}>Banco de Dados</Text>
			<Text style={styles.txtAbout}>Análise, projeto, modelagem e desenvolvimento de banco de dados, com o objetivo de armazenar 
			informações de forma organizada e segura.
			</Text>
			<Text h3  style={styles.txth1}>Desenvolvimento Web</Text>
			<Text style={styles.txtAbout}>Nosso objetivo é o desenvolvimento de websites responsivos, permitindo que seu serviço ou produto seja otimizado e visualizado por 
			diferentes tipos de tela de dispositivos.
			</Text>
		</View>
		);
	}
}

Servicos.navigationOptions = {
  title: 'Servicos',
}

const styles = StyleSheet.create({
  txtAbout: {  	
  	margin: 5
  },

  txth1: {
  	fontSize: 14,
  	fontWeight:'bold',
  	margin: 5 
  }
  
});