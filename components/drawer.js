import React from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList, Image, TouchableOpacity,ImageBackground, Dimensions } from 'react-native';
import Button from 'react-native-button';

import FBFont from './font'
import { NavigationActions,DrawerItems, SafeAreaView, StackActions } from 'react-navigation';
import { Avatar } from 'react-native-elements'
import { find_events,my_events, my_profile, my_relationships, my_certifications, scanner } from '../assets/icons/index';

export default class Drawer extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    
    this.state = {
      
    }
  }

  jumpTo(route){
    this.props.navigation.navigate(route)
  }



  render() {
    return (
      <View style={styles.container}>
      <ImageBackground style={{flex: 1 , position : 'absolute' , top : 0 , height :'100%'  , width : '100%'}}source={require('../assets/images/drawer_bg/drawer_bg.png')}>
        
<View style={[styles.menuHolder]}>
<TouchableOpacity onPress={()=>this.jumpTo('Events')} >
                                            <View style={[styles.menuItem]}>
                                              <Image source={find_events} style={{width:25,height:25}}/>
                                              <Text style={[styles.menuText]}>Find Events</Text> 
                                            </View>
                                            </TouchableOpacity>
                                            <TouchableOpacity onPress={()=>this.jumpTo('MyEventsMain')} >
                                        <View style={[styles.menuItem]}>
                                            <Image source={my_events} style={{width:25,height:25}}/>
                                            <Text style={[styles.menuText]}>My Events</Text> 
                                        </View>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={()=>this.jumpTo('MyProfileMain')} >
                                        <View style={[styles.menuItem]}>
                                            <Image source={my_profile} style={{width:25,height:25}}/>
                                            <Text style={[styles.menuText]}>My Profile</Text> 
                                        </View>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={()=>this.jumpTo('RelationshipsMain')} >
                                        <View style={[styles.menuItem]}>
                                            <Image source={my_relationships} style={{width:25,height:25}}/>
                                            <Text style={[styles.menuText]}>My Relationships</Text> 
                                        </View>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={()=>{}} >
                                        <View style={[styles.menuItem]}>
                                            <Image source={my_certifications} style={{width:25,height:25}}/>
                                            <Text style={[styles.menuText]}>My Certifications</Text> 
                                        </View>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={()=>this.jumpTo('ScannerMain')} >
                                        <View style={[styles.menuItem]}>
                                            <Image source={scanner} style={{width:25,height:25}}/>
                                            <Text style={[styles.menuText]}>Scanner</Text> 
                                        </View>
                                        </TouchableOpacity>
                                        </View>
          
        </ImageBackground>
       
      </View>
    )
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: 999
  },
  menuHolder:{
    // flexDirection:'row',
marginTop:65,
marginLeft:20
  },
  menuItem:{
flexDirection:'row',
marginTop:25
  },
  menuText:{

    marginLeft:25,
    fontSize: 18,
    color:'#ffffff'
  },
  avatarContainer: {
    width:'100%',
    height: 207.5,
    backgroundColor:'#284b75',
    alignItems: 'center'
  },
  cardAvatar: {
    marginTop: 40
  },
  username: {
    color:"#ffffff",
    textAlign:'left',
    marginTop:10
  },
  email: {
    color:"#d9d9d9",
    textAlign:'left',
  },
  textContainer:{
marginTop:60,
marginLeft:20
  },
  itemContainer: {
    marginTop:40,
    marginLeft:20,
    marginRight:20,
    marginBottom:20,
  },
  item: {
    paddingTop:20,
    paddingLeft:20,
    paddingRight:20,
    paddingBottom:20,
    borderBottomWidth: 2,
    borderBottomColor:'#e7e7e7',
    flexDirection:'row'
  },
  itemText: {
    color:'#515151',
    width: 200
  },
  itemArrow: {
    width:25,
    height:16.5
  }
});
