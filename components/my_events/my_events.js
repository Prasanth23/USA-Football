import React, { Component } from 'react';
import { Text, View,StyleSheet,Image,ScrollView,TouchableOpacity,SafeAreaView,TouchableWithoutFeedback } from 'react-native';

import { add_another, check, uncheck, back_arrow,invite, location, calendar, time, scanner } from '../../assets/icons/index';
import { event_image, register_input_bg,register,logo } from '../../assets/images/index';
import { Button_add,Button_next } from "../button";
import FBFont from '../font';

export default class MyEvents extends Component {

    render() {
        return (
            <View style={styles.mainContainer}>
                <Text style={[FBFont.AlternateGot(23),styles.headerStyle]}>My Upcoming Events</Text>
                <View style={{flex:1}}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <TouchableOpacity onPress={()=>{}}>
                            <View style={[styles.eventCard,styles.shadow]}>
                                <View style={styles.imageContainer}>
                                    <Image source={event_image} style={{width:"100%",height:130,flex:1,overflow:'hidden'}} borderRadius={5} resizeMode="cover"/>
                                </View>
                                <View style={styles.eventDetails}>
                                    <View style={styles.nameLocation}>
                                        <View>
                                            <Text style={[styles.wrap,styles.eventName]}>THE BEST HIGH SCHOOL FOOTBALL WORLDWIDE</Text>
                                        </View>
                                        <View style={styles.row}>
                                            <Image source={location} style={{marginTop:3,width:10,height:16}} resizeMode="contain"/>
                                            <Text style={[styles.wrap,styles.txt]}>AT&T Stadium, Arlington, United States</Text>
                                        </View>
                                    </View>
                                    <View style={styles.dateTime}>
                                        <View style={[styles.row,styles.imgText]}>
                                            <Image source={calendar} style={{width:15.2,height:15.2,marginTop:3}}/>
                                            <Text style={[styles.wrap,styles.txt]}>Dec 28 & 29, 2019</Text>
                                        </View>
                                        <View style={[styles.row,styles.imgText]}>
                                            <Image source={time} style={{width:15.2,height:15.2,marginTop:3}}/>
                                            <Text style={[styles.wrap,styles.txt]}>08:00 am - 02:00 pm</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
            </View>
        );
    }
}
const styles=StyleSheet.create({
    mainContainer:{
        flex:1,
        alignItems:"center"
    },
    headerStyle:{
        marginTop:15,
        marginBottom:17
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
    eventCard:{
        marginBottom:30,
        marginHorizontal:13,
        paddingBottom:7
    },
    eventDetails:{
        flex:1,
        width:"100%",
        flexDirection:"row",
        justifyContent:"space-between",
        paddingTop:7,
        paddingHorizontal:10
    },
    nameLocation:{
        width:'55%'
    },
    eventName:{
        fontSize:18
    },
    dateTime:{
        width:'42%'
    },
    txt:{
        marginLeft:6
    },
    imgText:{
        marginTop:10
    }
})