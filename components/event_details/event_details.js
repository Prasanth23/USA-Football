import React, { Component } from 'react';
import { Text, View,StyleSheet,Image,ScrollView,TouchableOpacity,SafeAreaView,TouchableWithoutFeedback } from 'react-native';

import { back_arrow,invite, location, calendar, time, scanner } from '../../assets/icons/index';
import { event_image, register_input_bg,register,logo } from '../../assets/images/index';

export default class EventDetails extends Component {


static navigationOptions = {
  
      
    };

    registerEvent(){
        this.props.navigation.navigate('Attendee')
    }

  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#FFFFFF'}}>
                <ScrollView>
                    <View>
                        <View style={styles.image}>
                            <Image source={event_image} style={styles.image2} borderRadius={10} resizeMode="cover"/>
                            
                        </View>
                        <Text style={[styles.eventName,styles.strong]}>THE BEST HIGH SCHOOL FOOTBALL WORLDWIDE</Text>
                        <Text style={styles.eventDesc}>
                            It may be America’s sport, but competition comes from all over the world. Come see the top football players from the U.S.,Mexico, Japan, Canada, Panama and more compete at the tenth annual International Bowl. It may be America’s sport, but competition comes from all over the world. 
                        </Text>
                        <View style={[styles.shadow,styles.venue]}>
                            <View style={[styles.row,styles.imageText]}>
                                <Image source={location} style={{width:15.2,height:16.5}} resizeMode="contain"/>
                                <Text style={[styles.wrap,styles.txt]}>High School Training Camp - CANTON</Text>
                            </View>
                            <View style={[styles.row,styles.imageText,styles.date]}>
                                <Image source={calendar} style={{width:15.2,height:15.2}} resizeMode="contain"/>
                                <Text style={[styles.wrap,styles.txt,styles.strong]}>Dec 28 & 29, 2019</Text>
                            </View>
                            <View style={[styles.row,styles.imageText]}>
                                <Image source={time} style={{width:15.2,height:15.2}} resizeMode="contain"/>
                                <Text style={[styles.wrap,styles.txt,styles.strong]}>08:00 am - 02:00 pm</Text>
                            </View>
                        </View>
                        <View style={[styles.row,styles.total]}>
                            <View>
                                <Text>ATTENDEES</Text>
                                <Text style={[styles.strong, styles.center]}>300</Text>
                            </View>
                            <View style={[styles.row,styles.cost]}>
                                <Text style={[styles.strong,styles.athelete]}>$ 80</Text>
                                <Text style={[styles.bg]}>PER ATHELETE</Text>
                            </View>
                        </View>
                        <View style={styles.mapStyle}>
                            <Text style={{color:'#FFFFFF',textAlign:'center'}}>Map Comes here</Text>
                        </View>
                        <Text style={[styles.eventName,styles.strong]}>Additional Notes</Text>
                        <Text style={styles.eventDesc}>
                            It may be America’s sport, but competition comes from all over the world. Come see the top football players from the U.S.,Mexico, Japan, Canada, Panama and more compete at the tenth annual International Bowl. It may be America’s sport, but competition comes from all over the world. 
                        </Text>
                        <TouchableOpacity onPress={()=>this.registerEvent()}>
                            <View>
                                <Text style={styles.register}>Register Now</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </SafeAreaView>
    );
  }
}

const styles=StyleSheet.create({
  image:{
      position:"relative"
  },
  imageAlpha:{
      position:"absolute",
      width:"100%",
      height:"100%",
      backgroundColor:'rgba(0,0,0,0.44)',
      borderRadius:10,
      overflow:"hidden"
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
  center:{
      textAlign:'center'
  },
  image2:{
      width:"100%",
      height:180,
      flex:1
  },
  backArrow:{
      width:17.8,
      height:13.2,
      margin:11.5
  },
  eventName:{
      fontSize:18,
      marginHorizontal:28,
      marginVertical:10
  },
  eventDesc:{
      marginHorizontal:10
  },
  venue:{
      paddingHorizontal:17,
      marginHorizontal:13,
      marginTop:10,
      marginBottom:25
  },
  imageText:{
      alignItems:"center",
      marginVertical:12
  },
  txt:{
      marginLeft:9
  },
  date:{
      marginVertical:0
  },
  cost:{
      alignItems:'center'
  },
  total:{
      justifyContent:"space-around",
      marginBottom:25
  },
  athelete:{
      paddingHorizontal:10,
      paddingVertical:9,
      alignSelf:"center",
      borderWidth:1,
      borderColor:'#8F0026'
  },
  bg:{
      borderWidth:1,
      borderColor:'#8F0026',
      backgroundColor:'#8F0026',
      paddingHorizontal:10,
      paddingVertical:9,
      color:'#FFFFFF'
  },
  mapStyle:{
      height:221,
      marginBottom:15,
      backgroundColor:'#FF0000',
      alignItems:"center",
      justifyContent:"center"
  },
  register:{
      backgroundColor:'#8F0026',
      paddingVertical:10,
      color:'#FFFFFF',
      fontSize:20,
      textAlign:"center",
      marginTop:30
  }
});
