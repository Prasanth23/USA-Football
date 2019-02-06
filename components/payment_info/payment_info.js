import React, { Component } from 'react';
import { Text, TextInput, View,StyleSheet,Image,ScrollView,TouchableOpacity,SafeAreaView,TouchableWithoutFeedback } from 'react-native';

import { tick_gray, calendar } from '../../assets/icons/index';
import { event_image, register_input_bg,register,logo } from '../../assets/images/index';
import { Button_add,Button_next } from "../button";
import FBFont from '../font';

export default class PaymentInfo extends Component {


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
                        <Text style={[FBFont.AlternateGot(23), styles.heading]}>Payment Information</Text>
                        <View style={[styles.shadow,styles.row,styles.card]}>
                            <TextInput placeholder="Have Promo Code?" placeholderTextColor={'#8F0026'} style={styles.txtInput} allowFontScaling={false}></TextInput>
                            <Image source={tick_gray} style={{ width: 25, height: 25}} resizeMode="cover" />
                        </View>
                        <View style={[styles.shadow,styles.card]}>
                            <TextInput placeholder="Credit Card Number" placeholderTextColor={'#000000'} style={styles.txtInput} allowFontScaling={false}></TextInput>
                            <View style={[styles.row,styles.expiry]}>
                                <View style={[styles.txtInputImage,styles.row]}>
                                    <TextInput placeholder="Expiration Date" placeholderTextColor={'#000000'} allowFontScaling={false} style={styles.creditText}></TextInput>
                                    <Image source={calendar} style={{ width: 25, height: 25}} resizeMode="cover" />
                                </View>
                                <TextInput placeholder="CVV" placeholderTextColor={'#000000'} style={styles.cardNum} allowFontScaling={false}></TextInput>
                            </View>
                        </View>
                        <Text style={[FBFont.AlternateGot(23), styles.heading]}>Billing Address</Text>
                        <View style={[styles.shadow,styles.card]}>
                            <TextInput placeholder="Street Address 1" placeholderTextColor={'#000000'} style={[styles.txtInput,styles.mart30]} allowFontScaling={false}></TextInput>
                            <TextInput placeholder="Street Address 2" placeholderTextColor={'#000000'} style={[styles.txtInput,styles.mart30]} allowFontScaling={false}></TextInput>
                            <TextInput placeholder="City" placeholderTextColor={'#000000'} style={[styles.txtInput,styles.mart30]} allowFontScaling={false}></TextInput>
                            <View style={[styles.row,styles.state]}>
                                <TextInput placeholder="State" placeholderTextColor={'#000000'} style={[styles.txtInput,styles.stateDd]} allowFontScaling={false}></TextInput>
                                <TextInput placeholder="Postal Code" placeholderTextColor={'#000000'} style={[styles.txtInput,styles.code]} allowFontScaling={false}></TextInput>
                            </View>
                        </View>
                        <View style={[styles.row,styles.buttons]}>
                            <View style={styles.btnCancel}>
                                <Button_next text="Cancel" height={39} page={()=>{this.jumpTo('Events')}}/>
                            </View>
                            <View style={styles.btnNext}>
                                <Button_next text="Next" height={39} page={()=>this.jumpTo('RegistrationReview')}/>
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
                width:"90%",
                fontFamily:"Alternategot",
                fontSize:16
            },
            expiry:{
                justifyContent:"space-between",
                marginTop:30
            },
            txtInputImage:{
                width:"60%",
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
                marginTop:12.5,
                marginBottom:25
            },
            btnNext:{
                width:101
            },
            btnCancel:{
                width:101,
                marginRight:27
            }
        })

          