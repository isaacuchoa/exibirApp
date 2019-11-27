import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export default class About extends React.Component {
  render() {
    return (
		<View>
			<Image style={styles.imgSobre} source={require('../img/sobre.jpg')}/> 
			<Text h2 style={styles.txth1}>Quem Somos</Text>
			<Text style={styles.txtAbout}>Somos uma equipe que nasceu apaixonada por tecnologia, criatividade e inovação;</Text>
			<Text style={styles.txtAbout}>Temos o objetivo de criar e desenvolver produtos e serviços de qualidade.</Text>
			<Text style={styles.txtAbout}>Somos especializados em desenvolvimento de aplicativos, sistemas, banco de dados e websites.</Text>
			<Text style={styles.txtAbout}>Nossa missão é prover soluções de tecnologia da informação aos nossos clientes, colaboradores e parceiros.</Text>
		</View>
		);
	}
}

About.navigationOptions = {
  title: 'About',
}

const styles = StyleSheet.create({
  txtAbout: {  	 	
  	margin: 7

  },

  txth1: {
  	fontSize: 14,
  	fontWeight:'bold',
  	margin: 10 
  },

  imgSobre: {
  	margin: 20,

  }
  
});