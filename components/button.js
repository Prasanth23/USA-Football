import React, { Component } from "react";
import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native';

export class Button_add extends Component {
    render() {
        return (
            <TouchableOpacity onPress={this.props.page}>
                <View style={[styles.row,styles.btn_add]} height={this.props.height}>
                    <Image source={this.props.image} style={{width:15,height:19}} resizeMode="cover"/>
                    <Text style={[styles.btn_add_text,styles.btn_text]}>{this.props.text}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}
export class Button_next extends Component{
    render(){
        return(
            <TouchableOpacity onPress={this.props.page}>
                <View style={styles.btn_next} height={this.props.height}>
                    <Text style={styles.btn_text}>{this.props.text}</Text>
                </View>
            </TouchableOpacity> 
        );
    }
}

const styles=StyleSheet.create({
    row:{
        flexDirection:"row"
      },
   btn_text:{
        fontSize:16,
        textAlign:"center",
        color:'#FFFFFF'
    },
    btn_add:{
        backgroundColor:'#8F0026',
        width:"100%",
        // height:35,
        borderRadius:5,
        justifyContent:"center",
        alignItems:"center"
    },
    btn_add_text:{
        fontSize:12,
        marginLeft:5.7
    },
    btn_next:{
        backgroundColor:'#8F0026',
        width:101,
        borderRadius:5,
        justifyContent:"center",
        alignItems:"center"
    }
})