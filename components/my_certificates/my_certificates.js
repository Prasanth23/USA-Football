import React, { Component } from 'react';
import { Text, TextInput, View,StyleSheet,Image,ScrollView,TouchableOpacity,SafeAreaView,TouchableWithoutFeedback } from 'react-native';

import { certificate01, add_another,check, uncheck } from '../../assets/icons/index';
import { event_image, register_input_bg,register,logo } from '../../assets/images/index';
import { Button_edit,Button_add } from "../button";
import FBFont from '../font';

export default class MyCertificates extends Component {

   
    static navigationOptions = {
      
          
        };
        constructor() {
            super();
            this.state = {};
        }

    

        jumpTo(route){
            this.props.navigation.navigate(route)
          }

          

          render() {
            return (
                <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
                <ScrollView>
                <View style={styles.container}>
                        <Text style={[FBFont.AlternateGot(23), styles.heading]}>My Certifications</Text>

                <View style={{flexDirection:'row'}}>
                    
                    <TouchableOpacity style={[styles.blue]} onPress={() => this.jumpTo('Certificate')}>
                       
                           <View style={[styles.certificate]}>
                                <Image source={certificate01} style={[styles.certImage]}/>
                                <Text  style={[styles.certHead]}>Youth Tackle Certification</Text>
                                <Text  style={[styles.certYear,styles.strong]}>2018</Text>
                                <Text  style={[styles.certExpiry]}>Expires 12/31/19</Text>
                           </View>
                        
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.red]} onPress={() => this.jumpTo('Certificate')}>
                        
                        <View style={[styles.certificate]}>
                                <Image source={certificate01} style={[styles.certImage]}/>
                                <Text  style={[styles.certHead]}>Flag Certification</Text>
                                <Text  style={[styles.certYear,styles.strong]}>2018</Text>
                                <Text  style={[styles.certExpiry]}>Expires 12/31/19</Text>
                           </View>
                        
                        </TouchableOpacity>
                        </View>
                        <View style={{flexDirection:'row', marginTop:5}}>
                    <TouchableOpacity  style={[styles.red]} onPress={() => this.jumpTo('Certificate')}>
                    <View style={[styles.certificate]}>
                                <Image source={certificate01} style={[styles.certImage]}/>
                                <Text  style={[styles.certHead]}>Youth Tackle Certification</Text>
                                <Text  style={[styles.certYear,styles.strong]}>2018</Text>
                                <Text  style={[styles.certExpiry]}>Expires 12/31/19</Text>
                           </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.blue]} onPress={() => this.jumpTo('Certificate')}>
                        <View style={[styles.certificate]}>
                                <Image source={certificate01} style={[styles.certImage]}/>
                                <Text  style={[styles.certHead]}>Flag Certification</Text>
                                <Text  style={[styles.certYear,styles.strong]}>2018</Text>
                                <Text  style={[styles.certExpiry]}>Expires 12/31/19</Text>
                           </View>
                        </TouchableOpacity>
                    
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
            certImage: {
                marginTop: 25,
                width: 50,
                height:50,
                alignSelf:'center'
            },
            certHead:{
                marginTop: 10,
                alignSelf:'center',
                color:'#ffffff',
                fontSize:11
            },
            certYear:{
                marginTop: 3,
                alignSelf:'center',
                color:'#ffffff',
                fontSize:16
            },
            certExpiry:{
                marginTop: 10,
                alignSelf:'center',
                color:'#ffffff',
                fontSize:9
            },
            row:{
                flexDirection:"row"
                },
                relationCard:{
justifyContent:'space-between'
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
                red:{
                    width: '40%',
                     height: 180, 
                     margin:15, 
                     backgroundColor:'#a11034' 
                },
                blue:{
                    width: '40%', 
                    height: 180, 
                    margin:15, 
                    backgroundColor:'#001f46' 
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
                nameText:{
                    color:'#8F0026',
                    paddingTop:5,
                   
                    paddingLeft: 5,
                    fontSize:18
                },
                subText:{
                    color:'#000000',
                    paddingBottom:5,
                    paddingLeft: 5,
                    fontSize:13
                },
            card:{
                marginVertical:12.5,
                
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