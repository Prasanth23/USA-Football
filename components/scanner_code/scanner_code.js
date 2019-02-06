import React, { Component } from 'react';
import { Text, TextInput, View,StyleSheet,Image,ScrollView,TouchableOpacity,SafeAreaView,TouchableWithoutFeedback } from 'react-native';

import { tick_gray, calendar,check, uncheck } from '../../assets/icons/index';
import { event_image, register_input_bg,register,logo } from '../../assets/images/index';
import { Button_add,Button_next } from "../button";
import FBFont from '../font';

export default class ScannerCode extends Component {


    static navigationOptions = {
      
          
        };
       

        jumpTo(route){
            this.props.navigation.navigate(route)
          }

         

          render() {
            return (
                <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
                <ScrollView>
                    <View style={styles.container}>
                        <Text style={[FBFont.AlternateGot(23), styles.heading]}>Enter Passcode</Text>
                        
                        
                        <View style={[styles.shadow,styles.card]}>
                        <Text>To scan for the event please enter the code given to you by the administrator of the event. </Text>
                        <TextInput placeholder="Code" placeholderTextColor={'#8F0026'} style={styles.txtInput} allowFontScaling={false}></TextInput>
                            
                            <View style={[styles.row,styles.buttons]}>
                            <View style={styles.btnCancel}>
                                <Button_next text="Back" height={39} page={()=>this.jumpTo('Events')}/>
                            </View>
                            <View style={styles.btnNext}>
                                <Button_next text="Next" height={39} page={()=>this.jumpTo('Scanner')}/>
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
                marginTop:20,
                borderWidth:1,
                paddingLeft:5,
                borderColor:'#8F0026',
                width:"100%",
                fontFamily:"Alternategot",
                fontSize:18
            },
            expiry:{
                justifyContent:"space-between",
                marginTop:30
            },
            txtInputImage:{
                width:"90%",
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