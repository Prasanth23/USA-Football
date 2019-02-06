import React, { Component } from 'react';
import { Text, View,StyleSheet,Image,TextInput,ScrollView,TouchableOpacity } from 'react-native';

import { event_image, register_input_bg,register,logo } from '../../assets/images/index';

import { search,invite, location, calendar, time, scanner } from '../../assets/icons/index';
import FBFont from '../font';

export default class EventList extends Component {

static navigationOptions = {
//   title:"Events",
  drawerLockMode: 'unlocked'
};

eventDetails(){
  this.props.navigation.navigate('EventDetail')
}

registerEvent(){
    this.props.navigation.navigate('Attendee')
}

  render() {
    return (
      <View style={styles.container}>
                <Text style={[FBFont.AlternateGot(23),styles.headerText]}>Upcoming Events</Text>
                <View style={styles.searchContainer}>
                    <View style={styles.iconText}>
                        <Image source={search} style={{width:17,height:17}}/>
                        <TextInput style={styles.txtInput}/>
                    </View>
                    <View style={styles.searchBtn}>
                        <Text style={styles.txtColor}>Search</Text>
                    </View>
                </View>
                <View style={{flex:1}}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <TouchableOpacity onPress={()=>this.eventDetails()}>
                            <View style={[styles.event,styles.shadow]}>
                                <View style={styles.image}>
                                    <Image source={event_image} style={{width:"100%",height:130,flex:1,overflow:'hidden'}} borderRadius={5} resizeMode="cover"/>
                                    <View style={styles.invite}>
                                        <View style={styles.inviteOnly}>
                                            <Image source={invite} style={{width:16.2,height:15.6}}/>
                                            <Text style={styles.inviteText}>Invite only</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.eventStyle}>
                                    <View style={styles.nameLocation}>
                                        <View>
                                            <Text style={[styles.wrap,styles.eventName]}>MIDDLE SCHOOL BOWL GAME SERIES</Text>
                                        </View>
                                        <View style={styles.row}>
                                            <Image source={location} style={{marginTop:3,width:10,height:16}} resizeMode="contain"/>
                                            <Text style={[styles.wrap,styles.txt]}>High School Training Camp - Canton</Text>
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
                                <View style={[styles.row,styles.bottom]}>
                                    <View style={styles.bgColor}>
                                        <View style={[styles.row,{alignItems:"center"}]}>
                                            <Text style={[styles.bottomText,{fontSize:25}]}>$ 80 </Text>
                                            <Text style={styles.bottomText}>PER ATHLETE</Text>
                                        </View>
                                    </View>
                                    <View style={styles.line}></View>
                                    <TouchableOpacity onPress={()=>this.registerEvent()} style={styles.bgColor}>
                                        <View>
                                            <Text style={styles.bottomText}>Register Now</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>this.eventDetails()}>
                            <View style={[styles.event,styles.shadow]}>
                                <View style={styles.image}>
                                    <Image source={event_image} style={{width:"100%",height:130,flex:1,borderTopLeftRadius:5,borderTopRightRadius:5}} resizeMode="cover"/>
                                   
                                </View>
                                <View style={styles.eventStyle}>
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
                                <View style={[styles.row,styles.bottom]}>
                                    <View style={styles.bgColor}>
                                        <View style={[styles.row,{alignItems:"center"}]}>
                                            <Text style={[styles.bottomText,{fontSize:25}]}>$ 80 </Text>
                                            <Text style={styles.bottomText}>PER ATHLETE</Text>
                                        </View>
                                    </View>
                                    <View style={styles.line}></View>
                                    <TouchableOpacity onPress={()=>this.registerEvent()} style={styles.bgColor}>
                                        <View>
                                            <Text style={styles.bottomText}>Register Now</Text>
                                        </View>
                                    </TouchableOpacity>
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
  container:{
      flex:1,
      alignItems:"center"
  },
  headerText:{
      marginTop:15,
      marginBottom:17
  },
  searchContainer:{
      height:35,
      marginBottom:25,
      flexDirection:"row",
      justifyContent:"space-between",
      marginHorizontal:13
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
  iconText:{
      flexDirection:"row",
      borderWidth:1,
      borderColor:'#8F0026',
      borderTopLeftRadius:25,
      borderBottomLeftRadius:25,
      flex:1,
      alignItems:"center",
      paddingLeft:14.5
  },
  searchBtn:{
      width:101,
      backgroundColor:'#8F0026',
      alignItems:"center",
      justifyContent:"center",
      borderTopRightRadius:25,
      borderBottomRightRadius:25
  },
  txtColor:{
      color:'#FFFFFF'
  },
  txtInput:{
     flex:1
  },
  event:{
      marginBottom:30,
      marginHorizontal:13,
      paddingBottom:7
  },
  image:{
      position:"relative",
      overflow:"hidden"
  },
  invite:{
      position:"absolute",
      right:0
  },
  inviteOnly:{
      flexDirection:"row",
      padding:7,
      backgroundColor:'#FFFFFF',
      alignItems:"center"
  },
  inviteText:{
      paddingLeft:5.8
  },
  eventStyle:{
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
  },
  bottom:{
      marginTop:10
  },
  bgColor:{
      backgroundColor:'#8F0026',
      padding:3,
      width:"49.5%",
      alignItems:"center",
      justifyContent:"center"
  },
  line:{
      width:1,
      height:"100%",
      backgroundColor:"#FFFFFF"
  },
  bottomText:{
      color:"#FFFFFF"
  }
});
