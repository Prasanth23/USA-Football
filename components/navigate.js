import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image, ActivityIndicator, AsyncStorage, StatusBar, TouchableOpacity, ScrollView, Dimensions } from 'react-native';

import Login from './login/login';
import Contact from './contact/contact';
import Register from './register/register';
import EventDetails from './event_details/event_details';
import EventList from './event_list/event_list';


import { createStackNavigator, createSwitchNavigator, NavigationActions, DrawerActions, createDrawerNavigator, createNavigationContainer,SafeAreaView, DrawerItems} from 'react-navigation';
import Button from 'react-native-button'
import Drawer from './drawer'
import FBFont from './font'



const EventStack = createStackNavigator(
  {
    Events: {
      screen: EventList,
    },
    EventDetail: {
      screen: EventDetails,
      navigationOptions: {
        header: null
    }
    }
  },
  {
    headerMode: 'none',
  }
);

let getTitle = (routerName, navigation) => {
  console.log(routerName);
  switch (routerName) {
    case 'Events':
      return EventList.navigationOptions.title;
    default:
      return ''
  }
};



const AuthStack = createStackNavigator(
  {
    Login: {
      screen: Login,
    },
    Contact: {
      screen: Contact,
    },
    Register: {
      screen: Register,
    },
  }
);

const RootStack = createStackNavigator(
  {
    Login: {
      screen: AuthStack,
      navigationOptions: {
        header: null
    }
    },
    Home: {
      screen: EventStack,
    },
  },
  {
    mode: 'modal',
  }
);


const EventDrawer = createDrawerNavigator({
  Event: {
    screen: RootStack,
  }
}, {
  drawerPosition: 'left',
  contentComponent: Drawer,
  drawerWidth:300,
  drawerBackgroundColor: "transparent",
 
  drawerLockMode: 'locked-closed'
});

const AppContainer = createNavigationContainer(EventDrawer);

EventStack.navigationOptions = ({ navigation }) => {
  const { routeName } = navigation.state.routes[navigation.state.index];
  

 
  let headerTitle = <Image source={require('../assets/icons/header_logo/header_logo.png')} style={{ width: 95, height: 35, flex:1, alignSelf: 'center', marginRight:60}} resizeMode="contain" /> ;
  const drawerAction = DrawerActions.openDrawer()
  const backAction = NavigationActions.back()

   const headerRight =<View></View>
  const headerLeft=navigation.state.index > 0 ? (<TouchableOpacity style={{marginLeft: 5}} onPress={() => navigation.dispatch(backAction) }><Image source={require('../assets/icons/back_arrow/Back_Arrow.png')}
  resizeMode='cover' style={{width:17.8, height:13.2}}/></TouchableOpacity>) : <TouchableOpacity style={{marginLeft: 10}} onPress={() => navigation.dispatch(drawerAction) }><Image source={require('../assets/icons/hamburguer/hamburguer.png')}
  resizeMode='contain' style={{width:25, height:16.5}}/></TouchableOpacity>

  return {
    headerRight: headerRight,
    headerTitle: headerTitle,
    headerLeft: headerLeft,
    headerStyle: {
      backgroundColor: '#001F46',
      borderBottomColor: '#e2e2e2'
    },
    headerTitleStyle: { 
      
    },
    headerTintColor: '#333333',
    
    gesturesEnabled: false
  };
}

export default AppContainer;