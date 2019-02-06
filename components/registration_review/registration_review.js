import React, { Component } from 'react';
import { Text, View,StyleSheet,Image,ScrollView,TouchableOpacity,SafeAreaView,TouchableWithoutFeedback } from 'react-native';

import { time_red, check, uncheck, back_arrow,invite, location, calendar_red, time, scanner } from '../../assets/icons/index';
import { event_image, register_input_bg,register,logo } from '../../assets/images/index';
import { Button_add,Button_next } from "../button";
import FBFont from '../font';

export default class RegistrationReview extends Component {


    static navigationOptions = {
      
          
        };
        constructor() {
            super();
            this.state = { isChecked01: true};
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
                        <Text style={[FBFont.AlternateGot(23), styles.heading]}>Event Registration Review</Text>
                        <View style={[styles.shadow,styles.card]}>
                            <Text style={[styles.heading1,styles.strong]}>THE BEST HIGH SCHOOL FOOTBALL WORLDWIDE</Text>
                            <Text>It may be America’s sport, but competition comes from all over the world. Come see the top football players from the U.S., Mexico, Japan, Canada, Panama and more compete at the tenth annual International Bowl. It may be America’s sport, but competition comes from all over the world. </Text>
                            <View style={[styles.row, styles.imgText]}>
                                <Image source={location} style={{ width: 15.2, height: 16.5 }} resizeMode="contain" />
                                <Text style={[styles.wrap, styles.txt]}>High School Training Camp - CANTON</Text>
                            </View>
                            <View style={[styles.row,styles.timeDate]}>
                                <View style={{width:"60%"}}>
                                    <View style={[styles.row,styles.imgText]}>
                                        <Image source={calendar_red} style={{width:25,height:25,marginTop:3}}/>
                                        <Text style={[styles.wrap,styles.txt,styles.txtColor,styles.strong]}>Dec 28 & 29, 2019</Text>
                                    </View>
                                    <View style={[styles.row,styles.imgText]}>
                                        <Image source={time_red} style={{width:25,height:25,marginTop:3}}/>
                                        <Text style={[styles.wrap,styles.txt,styles.txtColor,styles.strong]}>08:00 am - 02:00 pm</Text>
                                    </View>
                                </View>
                                <View style={styles.line}></View>
                                <View style={{width:"35%",justifyContent:"center",alignItems:"center"}}>
                                    <Text style={styles.attendeesText}>ATTENDEES</Text>
                                    <Text style={[styles.strong,styles.attendeesText]}>275/300</Text>
                                </View>
                            </View>
                        </View>
                        <View style={[styles.shadow,styles.card1]}>
                            <Text style={[styles.strong,styles.nameText]}>Sean Wilkening</Text>
                            <Text style={styles.horizontalLine}></Text>
                            <Text style={[styles.strong,styles.nameText]}>Dennis Wilkening</Text>
                            <View style={[styles.row,styles.agree]}>
                                <TouchableWithoutFeedback
                                    style={styles.checkBox}
                                    onPress={() => this.setState({ isChecked01: !this.state.isChecked01 })}
                                >
                                    <View style={[styles.row,{alignItems:"center"}]}>
                                        {this.renderImage(this.state.isChecked01)}
                                        <Text style={styles.agreeText}>I agree to waiver for all attendees</Text>
                                    </View>
                                </TouchableWithoutFeedback>
                                <TouchableWithoutFeedback>
                                    <Text style={styles.link}>Link To Waiver</Text>
                                </TouchableWithoutFeedback>
                            </View>
                        </View>
                        <View style={[styles.shadow,styles.card1]}>
                            <View style={styles.rate}>
                                <Text style={styles.strong}>Sub Total</Text>
                                <Text style={styles.strong}>$200.00</Text>
                            </View>
                            <View style={styles.rate}>
                                <Text style={styles.strong}>Discount</Text>
                                <Text style={styles.strong}>$10.00</Text>
                            </View>
                            <View style={styles.rate}>
                                <Text style={styles.strong}>Tax</Text>
                                <Text style={styles.strong}>$3.60</Text>
                            </View>
                            <View style={styles.horizontalLine}></View>
                            <View style={styles.rate}>
                                <Text style={styles.strong}>Total</Text>
                                <Text style={styles.strong}>$193.60</Text>
                            </View>
                        </View>
                        <View style={[styles.row,styles.buttons]}>
                            <View style={styles.btnCancel}>
                                <Button_next text="Cancel" height={39} page={()=>this.jumpTo('Events')}/>
                            </View>
                            <View style={styles.btnNext}>
                                <Button_next text="Register" height={39} page={()=>this.jumpTo('RegistrationDone')}/>
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
                alignItems:"center",
                justifyContent:"center",
                flex:1
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
                paddingVertical:15,
                paddingHorizontal:19
            },
            heading1:{
                fontSize:14,
                color:'#8F0026',
                marginBottom:3
            },
            imgText: {
                alignItems: "center",
                marginVertical: 12
            },
            txt: {
                marginLeft: 9
            },
            txtColor:{
                color:'#8F0026',
                fontSize:16
            },
            timeDate:{
                justifyContent:"space-between"
            },
            line:{
                width:1,
                height:"100%",
                backgroundColor:"#59575D"
            },
            attendeesText:{
                textAlign:"center",
                fontSize:15,
                marginTop:3
            },
            card1:{
                marginVertical:12.5,
                paddingVertical:15,
                width:"100%"
            },
            horizontalLine:{
                width:"100%",
                height:1,
                backgroundColor:"#59575D",
                marginVertical:3
            },
            nameText:{
                paddingVertical:5,
                paddingHorizontal:19,
                fontSize:16
            },
            agree:{
                flexDirection:"row",
                justifyContent:"space-between",
                alignItems:"center",
                paddingHorizontal:19,
                paddingTop:15
            },
            checkBox:{
                width:15,
                height:15
            },
            link:{
                color:'#8F0026',
                textDecorationLine:"underline",
                textDecorationColor:'#8F0026'
            },
            agreeText:{
                marginLeft:5
            },
            rate:{
                paddingHorizontal:19,
                flexDirection:"row",
                justifyContent:"space-between",
                paddingVertical:3
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