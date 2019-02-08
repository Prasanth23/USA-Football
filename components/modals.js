import React, { Component } from 'react';
import { Text, StyleSheet,View,ImageBackground} from 'react-native';

import Button from 'react-native-button';
import Modal from 'react-native-modalbox';

import { Button_add,Button_next } from "./button";
import FBFont from './font';

import { register_input_bg } from '../assets/images/index';



export default class Contact extends Component {

  constructor() {
    super();
    this.state = {
      isOpen: false,
      isDisabled: false
    };
  }



  render() {
    

    return (
      <View style={styles.wrapper}>
        
        <Button onPress={() => this.refs.modal2.open()} style={styles.btn}>Logout</Button>
        <Button onPress={() => this.refs.modal3.open()} style={styles.btn}>Failure</Button>
        <Button onPress={() => this.refs.modal4.open()} style={styles.btn}>Scan Code</Button>    
        <Button onPress={() => this.refs.modal5.open()} style={styles.btn}>Register</Button> 

        

        <Modal  style={[styles.modal, styles.modal2]} position={"center"} ref={"modal2"}>
        <View>
        <Button onPress={() => this.setState({isOpen: false})} style={[ styles.clsModal]}>X</Button>
        <Text style={[FBFont.AlternateGot(40),styles.text1]}>Do you want to Logout</Text>
          <View style={[styles.row,styles.buttons]}>
                            <View style={styles.btnCancel}>
                                <Button_next text="Ok" height={39} page={()=>{}}/>
                            </View>
                        </View>
          
          </View>
        </Modal>


        <Modal style={[styles.modal, styles.modal3]} position={"center"} ref={"modal3"}>
        <View>
        <Button onPress={() => this.setState({isOpen: false})} style={[ styles.clsModal]}>X</Button>
        <Text style={[FBFont.AlternateGot(35),styles.text2]}>Your session is timeout</Text>
        <Text style={[FBFont.AlternateGot(35),styles.text2]}>Please try again later</Text>
          <View style={[styles.row,styles.buttons]}>
                            <View style={styles.btnCancel}>
                                <Button_next text="Ok" height={39} page={()=>{}}/>
                            </View>
                        </View>
          </View>
        </Modal>


        <Modal style={[styles.modal, styles.modal4]} position={"center"} ref={"modal4"}>
        <View>
        <Button onPress={() => this.setState({isOpen: false})} style={[ styles.clsModal2]}>X</Button>
        <Text style={[FBFont.AlternateGot(22),styles.text3]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </Text>
         
          </View>
        </Modal>


        <Modal style={[styles.modal, styles.modal5]} position={"center"} ref={"modal5"}>
        <ImageBackground style={styles.screen2} source={register_input_bg}>
        <View>
        <Button onPress={() => this.setState({isOpen: false})} style={[ styles.clsModal3]}>X</Button>
          <Text style={styles.text4}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</Text>
          </View>
          </ImageBackground>
        </Modal>


        </View>
        
    );
  }

}

const styles = StyleSheet.create({

  wrapper: {
    paddingTop: 50,
    flex: 1
  },
  screen2: {
    width: 370,
    height:286,
  },
  row:{
    flexDirection:"row"
    },
  modal: {
    borderRadius:10
  },

  modal2: {
    height: 180,
    width: 300
  },

  modal3: {
    height: 200,
    width: 300
  },

  modal4: {
    height: 200,
    width:300,
    backgroundColor: "#032957"
  },

  modal5: {
    width: 370,
    height:286,
    backgroundColor: "transparent"
  },

  btn: {
    margin: 10,
    backgroundColor: '#8F0026',
    color: "white",
    padding: 10
  },

  clsModal: {
    position: 'absolute',
    right: 10,
    top: 5,
    backgroundColor: "transparent",
    color: "black"
  },
  clsModal2: {
    position: 'absolute',
    right: 10,
    top: 5,
    backgroundColor: "transparent",
    color: "white"
  },
  clsModal3: {
    position: 'absolute',
    right: 15,
    top: 5,
    backgroundColor: "transparent",
    fontSize: 25,
    color: '#8F0026'
  },

  text1: {
    top:50,
    color: "black",
    alignSelf: 'center'
  },
  text2: {
    top:50,
    color: "black",
    justifyContent:'center',
    alignSelf: 'center'
  },
  text3: {
    top:20,
    color: "white",
    padding:20,
    alignSelf: 'center'
  },
  text4: {
    top:30,
    color: "black",
    padding:30,
    alignSelf: 'center'
  },
  buttons:{
    justifyContent:"center",
    marginTop:80,
    marginBottom:10
},
btnCancel:{
    width:101,
}

});