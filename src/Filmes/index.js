import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity,StyleSheet } from 'react-native';

export default class Filmes extends Component {
  
  render() {
     const {nome, foto} = this.props.data;
    return (
      <View>
          <View style={styles.card}>

        <Text style={styles.title}>{nome}</Text>
        <Image 
        source={{uri: foto}}
        style={styles.capa}
        />
</View>

          <View style={styles.Areabotao}>
               <TouchableOpacity style={styles.botao} onPress={() => alert(nome)}>
                    <Text style={styles.botaoTexto}>Leia mais</Text>
               </TouchableOpacity>
          </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
     title:{
      fontSize:18,
      padding:15,
     },
     card:{
          shadowColor:'#000',
          backgroundColor:'#FFF',
          shadowOffset:{width:0, heigth:1},
          shadowOpacity: 0.8,
          margin:15,
          shadowRadius: 5,
          borderRadius: 5,
          elevation:3,
     },
     capa:{
          height: 250,
          zIndex: 2,
        },
        Areabotao:{
          alignItems: 'flex-end',
          marginTop: -40,
          zIndex: 9
        },
        botao:{
          width: 100,
          backgroundColor: '#09A6FF',
          opacity: 1,
          padding: 8,
          borderTopLeftRadius: 5,
          borderBottomLeftRadius: 5,
      
        },
        botaoTexto:{
          textAlign: 'center',
          color: '#FFF'
        }
   });