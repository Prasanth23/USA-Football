import React, { Component } from 'react';
import { Text, TextInput, View,StyleSheet,Image,ScrollView,TouchableOpacity,SafeAreaView,TouchableWithoutFeedback } from 'react-native';

import { tick_gray, calendar,check, uncheck } from '../../assets/icons/index';
import { event_image, register_input_bg,register,logo } from '../../assets/images/index';
import { Button_add,Button_next } from "../button";
import FBFont from '../font';

export default class Profile extends Component {


    static navigationOptions = {
      
          
        };
        constructor() {
            super();
            
        }

        jumpTo(route){
            this.props.navigation.navigate(route)
          }

          renderImage = (isChecked) => {
            let imageSrc = isChecked ? uncheck : check;
            return (
                <Image
                    style={styles.checkBox}
                    source={imageSrc}
                />
            );
        }

          render() {
            return (
                <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
                <ScrollView>
                    <View style={styles.container}>
                        <Text style={[FBFont.AlternateGot(23), styles.heading]}>My Profile</Text>
                        
                        
                        <View style={[styles.shadow,styles.card]}>
                            
                            <TextInput placeholder="First Name" placeholderTextColor={'#000000'} style={[styles.txtInput,styles.mart30]} allowFontScaling={false}></TextInput>
                            <TextInput placeholder="Last Name" placeholderTextColor={'#000000'} style={[styles.txtInput,styles.mart30]} allowFontScaling={false}></TextInput>
                            <TextInput placeholder="Email Address" placeholderTextColor={'#000000'} style={[styles.txtInput,styles.mart30]} allowFontScaling={false}></TextInput>
                            <View style={[styles.expiry,styles.txtInputImage,styles.row]}>
                                    <TextInput placeholder="Birthdate" placeholderTextColor={'#000000'} allowFontScaling={false} style={styles.creditText}></TextInput>
                                    <Image source={calendar} style={{ width: 25, height: 25}} resizeMode="cover" />
                                </View>
                                <TextInput placeholder="Mobile Number" placeholderTextColor={'#000000'} style={[styles.txtInput,styles.mart30]} allowFontScaling={false}></TextInput>
                                
                            <View style={[styles.row,styles.buttons]}>
                            <View style={styles.btnNext}>
                                <Button_next text="Continue" height={39} page={()=>this.jumpTo('Events')}/>
                            </View>
                        </View>
                        </View>
                        
                    </View>
                </ScrollView>
            </SafeAreaView>
                );
            }
          }

          const styles = StyleSheet.create({
            container: {
                backgroundColor: '#FFFFFF',
                paddingHorizontal: 14.5
            },
            heading: {
                marginTop: 31,
                marginBottom: 12.5,
                textAlign: "center"
            },
            row:{
                flexDirection:"row"
                },
                wrap:{
                flexWrap:'wrap'
                },
                shadow:{
                shadowColor:'#000000',
                shadowOffset:{width:0,height:8},
                shadowOpacity:0.4,
                shadowRadius:6,
                elevation:6,
                backgroundColor:'#FFFFFF'
                },
                strong:{
                fontWeight:"bold",
                },
                agree:{
                    flexDirection:"row",
                    alignItems:'flex-start',
                    paddingHorizontal:0,
                    paddingTop:15
                },
                checkBox:{
                    width:15,
                    height:15
                },
                agreeText:{
                    marginLeft:5
                },
                expiry:{
                    justifyContent:"space-between",
                    marginTop:30
                },
            card:{
                marginVertical:12.5,
                paddingTop:17,
                paddingBottom:25,
                paddingHorizontal:39
            },
            txtInput:{
                borderBottomWidth:0.3,
                paddingBottom:3.2,
                borderColor:'#343741',
                width:"100%",
                fontFamily:"Alternategot",
                fontSize:16
            },
            expiry:{
                justifyContent:"space-between",
                marginTop:30
            },
            txtInputImage:{
                width:"100%",
                borderBottomWidth:0.3,
                paddingBottom:3.2,
                borderColor:'#343741'
            },
            creditText:{
                width:"80%",
                fontFamily:"Alternategot",
                fontSize:16
            },
            cardNum:{
                borderBottomWidth:0.3,
                paddingBottom:3.2,
                borderColor:'#343741',
                width:"30%",
                fontFamily:"Alternategot",
                fontSize:16
            },
            state:{
                justifyContent:"space-between",
                marginTop:30
            },
            mart30:{
                marginTop:30
            },
            stateDd:{
                width:"60%",
                borderBottomWidth:0.3,
                paddingBottom:3.2,
                borderColor:'#343741',
                fontFamily:"Alternategot",
                fontSize:16
            },
            code:{
                width:"30%",
                borderBottomWidth:0.3,
                paddingBottom:3.2,
                borderColor:'#343741',
                fontFamily:"Alternategot",
                fontSize:16
            },
            buttons:{
                justifyContent:"center",
                marginTop:25,
                marginBottom:10
            },
            btnNext:{
                width:101
            },
            btnCancel:{
                width:101,
                marginRight:27
            }
        })