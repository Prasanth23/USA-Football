import React, { Component } from 'react';
import { Text, View,StyleSheet,Image,ScrollView,TouchableOpacity,SafeAreaView,TouchableWithoutFeedback } from 'react-native';

import { add_another, check, uncheck, back_arrow,invite, location, calendar, time, scanner } from '../../assets/icons/index';
import { event_image, register_input_bg,register,logo } from '../../assets/images/index';
import { Button_add,Button_next } from "../button";
import FBFont from '../font';

export default class Attendee extends Component {


    static navigationOptions = {
      
          
        };
        constructor() {
            super();
            this.state = { isChecked01: false, isChecked02: true};
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
                        <Text style={[FBFont.AlternateGot(23), styles.heading]}>Who's Attending</Text>
                        <View style={styles.addButton}>
                            <Button_add text="Add Another Person" height={35} image={add_another} page={()=>this.jumpTo('AddPerson')}/>
                        </View>
                        <View style={styles.member}>
                            <View style={[styles.shadow, styles.memberCard]}>
                                <View style={[styles.name, styles.row]}>
                                    <Text style={[styles.txtColor,styles.strong]}>Myself - Sean Wilkening</Text>
                                    <TouchableWithoutFeedback
                                        style={styles.checkBox}
                                        onPress={() => this.setState({ isChecked01: !this.state.isChecked01 })}
                                    >
                                        {this.renderImage(this.state.isChecked01)}
                                    </TouchableWithoutFeedback>
                                </View>
                                <View style={[styles.row, styles.imgText, styles.date]}>
                                    <Image source={calendar} style={{ width: 15.2, height: 15.2 }} resizeMode="contain" />
                                    <Text style={[styles.wrap, styles.txt]}>Dec 28 & 29, 2019</Text>
                                </View>
                                <View style={[styles.row, styles.imgText]}>
                                    <Image source={location} style={{ width: 15.2, height: 16.5 }} resizeMode="contain" />
                                    <Text style={[styles.wrap, styles.txt]}>High School Training Camp - CANTON</Text>
                                </View>
                            </View>
                            <View style={styles.border}></View>
                        </View>
                        <View style={styles.member}>
                            <View style={[styles.shadow, styles.memberCard]}>
                                <View style={[styles.name, styles.row]}>
                                    <Text style={[styles.txtColor,styles.strong]}>Dennis Wilkening - Child</Text>
                                    <TouchableWithoutFeedback
                                        style={styles.checkBox}
                                        onPress={() => this.setState({ isChecked02: !this.state.isChecked02 })}
                                    >
                                        {this.renderImage(this.state.isChecked02)}
                                    </TouchableWithoutFeedback>
                                </View>
                                <View style={[styles.row, styles.imgText, styles.date]}>
                                    <Image source={calendar} style={{ width: 15.2, height: 15.2 }} resizeMode="contain" />
                                    <Text style={[styles.wrap, styles.txt]}>Dec 28 & 29, 2019</Text>
                                </View>
                                <View style={[styles.row, styles.imgText]}>
                                    <Image source={location} style={{ width: 15.2, height: 16.5 }} resizeMode="contain" />
                                    <Text style={[styles.wrap, styles.txt]}>High School Training Camp - CANTON</Text>
                                </View>
                            </View>
                            <View style={styles.border}></View>
                        </View>
                        
                    </View>
                    <View style={[styles.row,styles.buttons]}>
                        <View style={styles.Button_next}>
                            <Button_next text="Next" height={39} page={()=>this.jumpTo('PaymentInfo')}/>
                        </View>
                        <View style={styles.btnCancel}>
                            <Button_next text="Cancel" height={39} page={()=>this.jumpTo('Events')}/>
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
                paddingHorizontal: 35
            },
            heading: {
                marginTop: 31,
                marginBottom: 22,
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
            addButton: {
                marginBottom: 12.5
            },
            name: {
                justifyContent: "space-between"
            },
            member: {
                marginVertical: 12.5
            },
            memberCard: {
                padding: 10
            },
            checkBox: {
                width: 30,
                height: 30
            },
            imgText: {
                alignItems: "center",
                marginVertical: 12
            },
            txt: {
                marginLeft: 9
            },
            date: {
                marginVertical: 0
            },
            border:{
                width:"100%",
                height:3,
                backgroundColor:'#8F0026'
            },
            txtColor:{
                color:'#8F0026',
                fontSize:17
            },
            buttons:{
                justifyContent:"center",
                marginTop:12.5,
                marginBottom:25
            },
            Button_next:{
                width:101,
                marginRight:27
            },
            btnCancel:{
                width:101,
                
            }
        });