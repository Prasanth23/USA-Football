import React from 'react';
import { StyleSheet, TextInput, Text, View,
  SafeAreaView, ImageBackground, Image,
  KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Modal, TouchableHighlight, Alert, Platform } from 'react-native';
import Button from 'react-native-button';

import FBFont from '../font'
import Spinner from 'react-native-loading-spinner-overlay';

import { login, login_input_bg,welcome,logo } from '../../assets/images/index';

export default class Login extends React.Component {

  static navigationOptions = {
    header: null,
  };
  
  constructor(props) {
    super(props);
    
    this.state = {email: '', password: '', spinner: false};
  }

  login(){
    
    this.props.navigation.navigate('Home')
    

  }

  componentDidMount() {
    
  }

  render() {
    return (
      <ImageBackground style={styles.screen} source={login}>
      <Image
      style={styles.headerText}
      source={welcome}
        />
        <Image source={logo} style={styles.image}></Image>
      <Spinner
            visible={this.state.spinner}
            textContent={'Loading...'}
            textStyle={styles.spinnerTextStyle}
          />
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <SafeAreaView  style={styles.container}>
              <KeyboardAvoidingView behavior="position">
              
              <View style={styles.centerContainer}>
                 
                </View>
                <ImageBackground style={styles.screen2} source={login_input_bg}>
              <View style={styles.form}>
              <View style={styles.formField}>
             
                    <TextInput keyboardType="email-address" autoCorrect={false}
                    autoCapitalize='none' style={[styles.textField]} placeholder="Email Address"
                    onChangeText={(text) => this.setState({email: text})}
                    value={this.state.email}
                    placeholderTextColor="#343741"></TextInput>
                  </View>
                  <View style={styles.formField}>
                    <TextInput style={[styles.textField]} autoCorrect={false} secureTextEntry={true} placeholder="Password" placeholderTextColor="#343741"></TextInput>
                  </View>
                  <Button containerStyle={styles.centerContainer} style={[styles.signIn, FBFont.FiraSansRegular(18)]} onPress={() => { this.login() }}>Login</Button>
                  </View>
        
                <View style={styles.options}>
                 
                  <Button style={[styles.optionsButtons,FBFont.FiraSansRegular(13)] } onPress={() => {this.props.navigation.navigate('Contact')}}>Register Now</Button>
                </View>
                </ImageBackground>
                </KeyboardAvoidingView>
            </SafeAreaView >
            </View>
            </TouchableWithoutFeedback>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    width: '100%',
    height:'100%',
    backgroundColor: '#143773'
  },
  screen2: {
    width: 370,
    height:290,
    marginTop: -50,
    // backgroundColor: '#ffffff'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop:40,
    paddingLeft:40,
    paddingRight:40,
    paddingBottom:40,
  },
  image: {
    width:223,
    height: 80,
    marginTop: 160,
    marginLeft:160,
    marginRight:10
  },
  form: {
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  formField: {
    flexDirection: 'row',
    width: 280,
    height:40,
    marginBottom: 20,
    backgroundColor: 'rgba(255,255,255, 0.4)',
    overflow:'hidden',
    borderRadius:3
  },
  textField: {
    // fontFamily: FBFont.FiraSansRegular(18),
    height : 40,
    width: '100%',
    marginLeft: 15,
    color:'#343741',
    borderBottomColor: '#343741',
    borderBottomWidth: 1
  },
  signIn: {
     width: 100,
     height: 42.5,
     backgroundColor: "#8f0026",
     marginTop: 10,
     color: '#ffffff',
     padding: (Platform.OS === 'android' ? 11 : 12),
     borderRadius:3

  },
  centerContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  options: {
    marginTop:10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  optionsButtons: {
    fontSize:10,
    color: '#343741',
    borderBottomColor: '#343741',
    borderBottomWidth: 1
  },
  footer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerText: {
    color: '#343741',
    textAlign:'center'
  },
  headerText:{
    width:119,
    height:69,
    alignSelf: 'flex-start',
    marginTop: 25,
    marginLeft: 5
  },
  footerTextLink: {
    textDecorationLine: 'underline'
  },
  spinnerTextStyle: {
    color: '#FFF'
  }
});
