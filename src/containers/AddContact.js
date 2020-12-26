import React,{Component} from 'react';
import {
    View, Text, StyleSheet,Image, TextInput, TouchableOpacity
} from 'react-native';


export default class AddContact extends React.Component {
   
    render() {
        let icon = require('../icons/plus.png')
      return (
    <View style={{flexDirection: 'row', paddingTop: 100}}>
         <TextInput
         placeholder='Name'
         style={{borderWidth:1, borderColor: 'red', 
        backgroundColor: '#eaeaea', height: 60,
        fontSize: 25,
        flex: 0.93, padding: 5, marginLeft: 10}}
         />
         <TouchableOpacity
         onPress={() => alert('contact added')}>
             <Image source={icon}
             style={{marginLeft: 10,width:60, height:60,
                }}/>
         
         </TouchableOpacity>

      
        </View>
  
      )
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
     
    },
  })