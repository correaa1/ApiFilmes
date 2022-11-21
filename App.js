import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet,ActivityIndicator } from 'react-native';
import api from './src/services/api'
import Filmes from './src/Filmes/index';
export default class App extends Component {

constructor (props){
  super(props);
  this.state = {
    filmes:[],
    loading: true
  }
}

 async componentDidMount(){
  const response = await api.get('r-api/?api=filmes');
  this.setState({
    filmes: response.data,
    loading: false
  });
}

  render() {
    if(this.state.loading){
      return(
        <View style={{alignItems: 'center',justifyContent:'center'}}>
          <Text><ActivityIndicator color="#09A6FF" size={40}/></Text>
        </View>
      )
    }else{
      return (
        <View style={styles.container}>
          
          <FlatList
            data={this.state.filmes}
            keyExtractor={item => item.id.toString() }
            renderItem={ ({item}) => <Filmes data={item} /> }
            />
        </View>
      );
    }
    return (
      <View style={styles.container}>
        
        <FlatList
          data={this.state.filmes}
          keyExtractor={item => item.id.toString() }
          renderItem={ ({item}) => <Filmes data={item} /> }
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  }
});