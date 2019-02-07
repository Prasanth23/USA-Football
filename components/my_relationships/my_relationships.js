import React, { Component } from 'react';
import { Text, TextInput, View,StyleSheet,Image,ScrollView,TouchableOpacity,SafeAreaView,TouchableWithoutFeedback } from 'react-native';

import { edit, add_another,check, uncheck } from '../../assets/icons/index';
import { event_image, register_input_bg,register,logo } from '../../assets/images/index';
import { Button_edit,Button_add } from "../button";
import FBFont from '../font';

export default class MyRelationships extends Component {

   
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
                        <Text style={[FBFont.AlternateGot(23), styles.heading]}>My Relationships</Text>
                       
                        
                        <View style={[styles.shadow,styles.card]}>
                            
                            <View style={[styles.row,styles.relationCard]}>
                            <View style={{ backgroundColor: '#FFFFFF', marginLeft:5 }}>
                                    <Text style={styles.nameText}>Sean Wilkening</Text>
                                    <Text style={styles.subText}>Spouse</Text>
                                    </View>
                                    
                                    <Button_edit height={60} image={edit} page={()=>this.jumpTo('AddRelation')}/>
                                    
                                </View>
                            
                        </View>
                        <View style={[styles.shadow,styles.card]}>
                            
                            <View style={[styles.row,styles.relationCard]}>
                            <View style={{ backgroundColor: '#FFFFFF', marginLeft:5 }}>
                                    <Text style={styles.nameText}>Gretchen Wilkening</Text>
                                    <Text style={styles.subText}>Child</Text>
                                    </View>
                                    
                                    <Button_edit height={60} image={edit} page={()=>this.jumpTo('AddRelation')}/>
                                    
                                </View>
                            
                        </View>
                        <View style={[styles.shadow,styles.card]}>
                            
                            <View style={[styles.row,styles.relationCard]}>
                            <View style={{ backgroundColor: '#FFFFFF', marginLeft:5 }}>
                                    <Text style={styles.nameText}>Denis Wilkening</Text>
                                    <Text style={styles.subText}>Child</Text>
                                    </View>
                                    
                                    <Button_edit height={60} image={edit} page={()=>this.jumpTo('AddRelation')}/>
                                    
                                </View>
                            
                        </View>
                        <View style={[styles.row,styles.buttons]}>
                            <Button_add text="Add More" height={60} image={add_another} page={()=>this.jumpTo('AddRelation')}/>
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