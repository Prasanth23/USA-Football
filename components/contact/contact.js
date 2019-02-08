import React from 'react';
import {
  StyleSheet, TextInput, Text, View,
  SafeAreaView, ImageBackground, Image,
  KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Modal, TouchableHighlight, Alert, Platform
} from 'react-native';
import Button from 'react-native-button';
import { baseUrl } from '../config/config';
import FBFont from '../font'
import Spinner from 'react-native-loading-spinner-overlay';

import { login, register_input_bg, register, contact_input_bg, contact, logo } from '../../assets/images/index';
import { my_events } from '../../assets/icons/index';

export default class Contact extends React.Component {

  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);

    this.state = {
      firstName: '', lastName: '', email: '', dob: '',
      mobileNumber: '', spinner: false, next: false,
      userName: '', password: '', confirmPassword: '', errors: {}
    };
  }

  next() {

    //this.props.navigation.navigate('Register')
    var { errors } = this.state;
    let error = {}, _this = this;
    if (this.state.firstName == "") error.firstName = "*mandatory field";
    if (this.state.lastName == "") error.lastName = "*mandatory field";
    if (this.state.email == "") error.email = "*mandatory field";
    if (this.state.dob == "") error.dob = "*mandatory field";
    if (this.state.mobileNumber == "") error.mobileNumber = "*mandatory field";
    this.setState({ errors: error });
    if (Object.keys(error).length == 0) {
      var url = baseUrl + "/users/v1?email=" + this.state.email
      var request = new Request(url, {
        method: "GET",
        headers: {
          'Content-type': 'application/json'
        }
      })
      fetch(request).then((response) => response.json()).then((response) => {
        if (response) {
          console.log("response", response.available)
          if (response.available) _this.setState({ errors: { ...errors, email: "*Email already exists" } });
          //error.email = "*Email already exists"
          else _this.setState({ next: true })
        }
      })
    }
  }

  register() {
    var { errors, password, confirmPassword } = this.state;
    let error = {}, _this = this;
    if (this.state.userName == "") error.userName = "*mandatory field";
    if (this.state.password == "") error.password = "*mandatory field";
    if (this.state.confirmPassword == "") error.confirmPassword = "*mandatory field";
    this.setState({ errors: error })
    if (Object.keys(error).length == 0) {
      var userNameUrl = baseUrl + "/users/v1?username=" + this.state.userName
      var request = new Request(userNameUrl, {
        method: "GET",
        headers: {
          'Content-type': 'application/json'
        }
      })
      fetch(request).then((response) => response.json()).then((response) => {
        if (response) {
          console.log("response user", response)
          if (response.available) _this.setState({ errors: { ...errors, userName: "*UserName already exists" } });
        }
        if (password != confirmPassword) _this.setState({ errors: { ...errors, confirmPassword: "*Passwords does not match" } });
        else {
          if (!response.available) {
            var url = baseUrl + "/users/v1";
            var data = {
              originApp: "events-mobile",
              firstName: this.state.firstName,
              lastName: this.state.lastName,
              email: this.state.email,
              userName: this.state.userName,
              password: this.state.password,
              dob: this.state.dob,
              phone: this.state.mobileNumber
            }

            var request = new Request(url, {
              method: "POST",
              body: JSON.stringify(data),
              headers: {
                'Content-type': "application/json"
              }
            })
            fetch(request).then((response) => response.json()).then((response) => {
              if (response) {
                console.log("data,", response)
                _this.props.navigation.navigate('Login')
              } else {

              }
            })
          }
        }
      })

    }
  }

  onInputChange = (text, key) => {
    if (text != "") this.state.errors[key] = ""
    this.setState({ [key]: text })
  }


  render() {
    var { next, errors } = this.state
    if (!next) {
      return (
        <ImageBackground style={styles.screen} source={login}>
          <Image
            style={styles.headerText}
            source={contact}
          />
          {/* <View style={styles.logo}> */}
            <Image source={logo} style={styles.image}></Image>
          {/* </View> */}
          <Spinner
            visible={this.state.spinner}
            textContent={'Loading...'}
            textStyle={styles.spinnerTextStyle}
          />
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
              <SafeAreaView>
                <KeyboardAvoidingView behavior="position">

                  <View style={styles.centerContainer}>

                  </View>
                  <ImageBackground style={styles.screen2} source={contact_input_bg} >
                    <View style={styles.form}>
                      <View style={styles.txtError}>
                        <View style={styles.formField}>
                          <TextInput autoCorrect={false}
                            autoCapitalize='none' style={[styles.textField]} placeholder="First Name"
                            onChangeText={(text) => this.onInputChange(text, "firstName")}
                            value={this.state.firstName}
                            placeholderTextColor="#343741">
                          </TextInput>
                        </View>
                        <Text style={styles.error}>{errors.firstName}</Text>
                      </View>
                      <View style={styles.txtError}>
                        <View style={styles.formField}>
                          <TextInput autoCorrect={false}
                            autoCapitalize='none' style={[styles.textField]} placeholder="Last Name"
                            onChangeText={(text) => this.onInputChange(text, "lastName")}
                            value={this.state.lastName}
                            placeholderTextColor="#343741"></TextInput>

                        </View>
                        <Text style={styles.error}>{errors.lastName}</Text>
                      </View>
                      <View style={styles.txtError}>
                        <View style={styles.formField}>

                          <TextInput keyboardType="email-address" autoCorrect={false}
                            autoCapitalize='none' style={[styles.textField]} placeholder="Email Address"
                            onChangeText={(text) => this.onInputChange(text, "email")}
                            value={this.state.email}
                            placeholderTextColor="#343741"></TextInput>

                        </View>
                        <Text style={styles.error}>{errors.email}</Text>
                      </View>
                      <View style={styles.txtError}>
                        <View style={styles.formField}>

                          <TextInput keyboardType="email-address" autoCorrect={false}
                            autoCapitalize='none' style={[styles.textField]} placeholder="Birthdate"
                            onChangeText={(text) => this.onInputChange(text, "dob")}
                            value={this.state.dob}
                            placeholderTextColor="#343741"></TextInput>
                          <Image source={my_events} style={{ width: 25, height: 25 }} />

                        </View>
                        <Text style={styles.error}>{errors.dob}</Text>
                      </View>
                      <View style={styles.txtError}>
                        <View style={styles.formField}>
                          <TextInput style={[styles.textField]}
                            keyboardType="numeric"
                            autoCorrect={false}
                            onChangeText={(text) => this.onInputChange(text, "mobileNumber")}
                            value={this.state.mobileNumber}
                            placeholder="Mobile Number" placeholderTextColor="#343741"></TextInput>

                        </View>
                        <Text style={styles.error}>{errors.mobileNumber}</Text>
                      </View>
                      <Button containerStyle={styles.centerContainer} style={[styles.signIn, FBFont.FiraSansRegular(18)]} onPress={() => { this.next() }}>Next</Button>
                    </View>

                    <View style={styles.options}>

                      <Text style={[styles.optionsButtons2]}> Already have an account  </Text>

                      <Button style={[styles.optionsButtons, FBFont.FiraSansRegular(13)]} onPress={() => { this.props.navigation.navigate('Login') }}>Login Now</Button>

                    </View>
                  </ImageBackground>
                </KeyboardAvoidingView>
              </SafeAreaView >
            </View>
          </TouchableWithoutFeedback>
        </ImageBackground>
      );
    } else if (next) {
      return (
        <ImageBackground style={styles.screen} source={login}>
          <Image
            style={styles.headerText}
            source={register}
          />
          
          <Spinner
            visible={this.state.spinner}
            textContent={'Loading...'}
            textStyle={styles.spinnerTextStyle}
          />

          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
              <SafeAreaView>
                <View style={styles.logo}>
              <Image source={logo} style={styles.image}></Image>
            </View>
                <KeyboardAvoidingView behavior="position">

                  <View style={styles.centerContainer}>

                  </View>
                  <ImageBackground style={styles.screen3} source={register_input_bg} imageStyle={{borderRadius:3,overflow:"hidden"}}>
                    <View style={styles.form}>
                      <View style={styles.txtError}>
                        <View style={styles.formField}>

                          <TextInput autoCorrect={false}
                            autoCapitalize='none' style={[styles.textField]} placeholder="Username"
                            onChangeText={(text) => this.onInputChange(text, "userName")}
                            value={this.state.userName}
                            placeholderTextColor="#343741"></TextInput>

                        </View>
                        <Text style={styles.error}>{errors.userName}</Text>
                      </View>
                      <View style={styles.txtError}>
                        <View style={styles.formField}>
                          <TextInput style={[styles.textField]}
                            autoCorrect={false} secureTextEntry={true}
                            onChangeText={(text) => this.onInputChange(text, "password")}
                            value={this.state.password}
                            placeholder="Password" placeholderTextColor="#343741"></TextInput>

                        </View>
                        <Text style={styles.error}>{errors.password}</Text>
                      </View>
                      <View style={styles.txtError}>
                        <View style={styles.formField}>
                          <TextInput style={[styles.textField]}
                            autoCorrect={false} secureTextEntry={true}
                            onChangeText={(text) => this.onInputChange(text, "confirmPassword")}
                            value={this.state.confirmPassword}
                            placeholder="Confirm Password" placeholderTextColor="#343741"></TextInput>

                        </View>
                        <Text style={styles.error}>{errors.confirmPassword}</Text>
                      </View>
                      <Button containerStyle={styles.centerContainer} style={[styles.signIn, FBFont.FiraSansRegular(18)]} onPress={() => { this.register() }}>Register Now</Button>
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
}

const styles = StyleSheet.create({
  screen: {
    width: '100%',
    height: '100%',
    backgroundColor: '#143773'
  },
  screen2: {
    width: 370,
    height: 412,
    marginTop: -10,
    // flex: 1
    // backgroundColor: '#ffffff'
  },
  screen3: {
    width: 370,
    height: 286,
    marginTop: 20,
    alignSelf:'center'
    // backgroundColor: '#ffffff'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingTop: 10,
    paddingLeft: 40,
    paddingRight: 40,
    paddingBottom: 10,
  },
  image: {
    width: 223,
    height: 80,
    marginLeft: 160,
    marginRight: 10,
    marginTop: 90
  },
  image1: {
    // marginTop: 40,
    // marginRight:-20
  },
  form: {
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  formField: {
    flexDirection: 'row',
    width: 280,
    height: 40,
    marginBottom: 10,
    backgroundColor: 'rgba(255,255,255, 0.4)',
    overflow: 'hidden',
    borderRadius: 3
  },
  textField: {
    // fontFamily: FBFont.FiraSansRegular(18),
    height: 40,
    width: '100%',
    marginLeft: 15,
    color: '#343741',
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
    borderRadius: 3

  },
  centerContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  options: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  optionsButtons: {
    fontSize: 10,
    color: '#343741',
    borderBottomColor: '#343741',
    borderBottomWidth: 1
  },
  optionsButtons2: {
    fontSize: 10,
    color: '#343741'
  },
  footer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerText: {
    color: '#343741',
    textAlign: 'center'
  },
  headerText: {
    width: 119,
    height: 69,
    alignSelf: 'flex-start',
    resizeMode: 'contain',
    marginTop: 25,
    marginLeft: 5
  },
  footerTextLink: {
    textDecorationLine: 'underline'
  },
  spinnerTextStyle: {
    color: '#FFF'
  },
  txtError: {
    // marginBottom: 1
  },
  error: {
    marginTop:-5,
    fontSize: 10,
    color: "#8f0026",
    marginLeft: 15
  },
  logo: {
    alignItems: "flex-end",
    // marginRight:20
  }
});
