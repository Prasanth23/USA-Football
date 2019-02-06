import React from 'react';
import { StyleSheet, TextInput, Text, View,
  SafeAreaView, ImageBackground, Image,
  KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Modal, TouchableHighlight, Alert, Platform } from 'react-native';
import Button from 'react-native-button';

import FBFont from '../font'
import Spinner from 'react-native-loading-spinner-overlay';

import { login, contact_input_bg,contact, logo } from '../../assets/images/index';
import { my_events } from '../../assets/icons/index';

export default class Contact extends React.Component {

  static navigationOptions = {
    header: null,
  };
  
  constructor(props) {
    super(props);
    
    this.state = {firstName: '', lastName: '', email:'', birthDate:'',mobNumber:'',spinner: false};
  }

  next(){
    
    this.props.navigation.navigate('Register')
    

  }

  componentDidMount() {
    
  }

  render() {
    return (
      <ImageBackground style={styles.screen} source={login}>
      <Image
      style={styles.headerText}
      source={contact}
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
                <ImageBackground style={styles.screen2} source={contact_input_bg}>
              <View style={styles.form}>
              <View style={styles.formField}>
             
                    <TextInput autoCorrect={false}
                    autoCapitalize='none' style={[styles.textField]} placeholder="First Name"
                    onChangeText={(text) => this.setState({firstName: text})}
                    value={this.state.firstName}
                    placeholderTextColor="#343741"></TextInput>
                    
                  </View>
                  <View style={styles.formField}>
             
                    <TextInput autoCorrect={false}
                    autoCapitalize='none' style={[styles.textField]} placeholder="Last Name"
                    onChangeText={(text) => this.setState({lastName: text})}
                    value={this.state.lastName}
                    placeholderTextColor="#343741"></TextInput>
                  </View>
                  <View style={styles.formField}>
             
                    <TextInput keyboardType="email-address" autoCorrect={false}
                    autoCapitalize='none' style={[styles.textField]} placeholder="Email Address"
                    onChangeText={(text) => this.setState({email: text})}
                    value={this.state.email}
                    placeholderTextColor="#343741"></TextInput>
                  </View>
                  <View style={styles.formField}>
             
                    <TextInput keyboardType="email-address" autoCorrect={false}
                    autoCapitalize='none' style={[styles.textField]} placeholder="Birthdate"
                    onChangeText={(text) => this.setState({birthDate: text})}
                    value={this.state.birthDate}
                    placeholderTextColor="#343741"></TextInput>
                    <Image source={my_events} style={{width:25,height:25}}/>
                  </View>
                  <View style={styles.formField}>
                    <TextInput style={[styles.textField]} autoCorrect={false} secureTextEntry={true} placeholder="Password" placeholderTextColor="#343741"></TextInput>
                  </View>
                  <Button containerStyle={styles.centerContainer} style={[styles.signIn, FBFont.FiraSansRegular(18)]} onPress={() => { this.next() }}>Next</Button>
                  </View>
        
                <View style={styles.options}>
                 
                  <Text style={[styles.optionsButtons2] }> Already have an account  </Text>
                  
                  <Button style={[styles.optionsButtons,FBFont.FiraSansRegular(13)] } onPress={() => {this.props.navigation.navigate('Login')}}>Login Now</Button>
                  
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
    width: 358,
    height:412,
    marginTop: -10,
    // backgroundColor: '#ffffff'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop:10,
    paddingLeft:40,
    paddingRight:40,
    paddingBottom:10,
  },
  image: {
    width:223,
    height: 80,
    marginTop: 90,
    marginLeft:160,
    marginRight:10
  },
  form: {
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  formField: {
    flexDirection: 'row',
    width: 280,
    height:40,
    marginBottom: 15,
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
  optionsButtons2: {
    fontSize:10,
    color: '#343741'
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
    resizeMode:'contain',
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
