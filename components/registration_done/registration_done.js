import React, { Component } from 'react';
import { Text, TextInput, View,StyleSheet,Image,ScrollView,TouchableOpacity,SafeAreaView,TouchableWithoutFeedback } from 'react-native';

import { time, calendar, my_events, location } from '../../assets/icons/index';
import { qr_code, register_input_bg,register,logo } from '../../assets/images/index';
import { Button_add,Button_next } from "../button";
import FBFont from '../font';

export default class RegistrationDone extends Component {


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
                        <Text style={[FBFont.AlternateGot(23), styles.heading]}>THE BEST HIGH SCHOOL FOOTBALL WORLDWIDE</Text>
                        <View style={{width:"100%"}}>
                            <Button_add text="Back To My Events" height={35} image={my_events} page={()=>this.jumpTo('MyEventsMain')}/>
                        </View>
                        <View style={[styles.shadow,styles.card]}>
                            <View style={[styles.row, styles.imgText]}>
                                <Image source={location} style={{ width: 15.2, height: 16.5 }} resizeMode="contain" />
                                <Text style={[styles.wrap, styles.txt]}>High School Training Camp - CANTON</Text>
                            </View>
                            <View style={[styles.row,styles.imgText]}>
                                <Image source={calendar} style={{width:25,height:25,marginTop:3}}/>
                                <Text style={[styles.wrap,styles.txt,styles.strong]}>Dec 28 & 29, 2019</Text>
                            </View>
                            <View style={[styles.row,styles.imgText]}>
                                <Image source={time} style={{width:25,height:25,marginTop:3}}/>
                                <Text style={[styles.wrap,styles.txt,styles.strong]}>08:00 am - 02:00 pm</Text>
                            </View>
                        </View>
                        <View style={styles.qrScan}>
                            <View style={styles.head}>
                                <Text style={[styles.txtColor,styles.strong]}>Sean Wilkening</Text>
                                <Text style={styles.passport}>Add To Passport</Text>
                            </View>
                            <View style={{alignItems:"center"}}>
                                <Image source={qr_code} resizeMode="contain"/>
                            </View>
                        </View>
                        <View style={styles.qrScan}>
                            <View style={styles.head}>
                                <Text style={[styles.txtColor,styles.strong]}>Dennis Wilkening</Text>
                                <Text style={styles.passport}>Add To Passport</Text>
                            </View>
                            <View style={{alignItems:"center"}}>
                                <Image source={qr_code} resizeMode="contain"/>
                            </View>
                        </View>
                        <View style={styles.horizontalLine}></View>
                        <View>
                            <Text style={[styles.txtColor,{marginBottom:3}]}>Directors</Text>
                            <View style={styles.head}>
                                <Text>Name 1</Text>
                                <Text>Name 2</Text>
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
                paddingHorizontal: 14.5,
                justifyContent:"center",
                flex:1,
                marginBottom:25
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
            heading: {
                marginTop: 31,
                marginBottom: 12.5,
                textAlign: "center"
            },
            card:{
                marginVertical:12.5,
                paddingVertical:15,
                paddingHorizontal:19,
                width:"100%"
            },
            imgText: {
                alignItems: "center",
                marginVertical: 12
            },
            txt: {
                marginLeft: 9
            },
            head:{
                flexDirection:"row",
                justifyContent:"space-between"
            },
            txtColor:{
                color:'#8F0026',
                fontSize:20
            },
            qrScan:{
                width:"100%",
                marginBottom:22
            },
            passport:{
                textDecorationLine:"underline"
            },
            horizontalLine:{
                width:"100%",
                height:1,
                backgroundColor:"#59575D",
                marginVertical:3
            }
        })