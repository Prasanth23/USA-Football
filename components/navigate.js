import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image, ActivityIndicator, AsyncStorage, StatusBar, TouchableOpacity, ScrollView, Dimensions } from 'react-native';

import Login from './login/login';
import Contact from './contact/contact';
import Register from './register/register';
import EventDetails from './event_details/event_details';
import EventList from './event_list/event_list';
import Attendee from './attendee/attendee';
import PaymentInfo from './payment_info/payment_info';
import RegistrationReview from './registration_review/registration_review';
import RegistrationDone from './registration_done/registration_done';
import MyEvents from './my_events/my_events';
import AddPerson from './add_person/add_person';
import Scanner from './scanner/scanner';
import ScannerCode from './scanner_code/scanner_code';
import Profile from './profile/profile';
import MyRelationships from './my_relationships/my_relationships';
import AddRelation from './add_relation/add_relation';
import MyCertificates from './my_certificates/my_certificates';


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
    },
    Attendee: {
      screen: Attendee,
      navigationOptions: {
        header: null
    }
    },
    AddPerson: {
      screen: AddPerson,
      navigationOptions: {
        header: null
    }
    },
    PaymentInfo: {
      screen: PaymentInfo,
      navigationOptions: {
        header: null
    }
    },
    RegistrationReview: {
      screen: RegistrationReview,
      navigationOptions: {
        header: null
    }
    },
    RegistrationDone: {
      screen: RegistrationDone,
      navigationOptions: {
        header: null
    }
    }
  },
  {
    headerMode: 'none',
  }
);

const MyEventsStack = createStackNavigator(
  {
    MyEvents: {
      screen: MyEvents,
    },
    
  },
  {
    headerMode: 'none',
  }
);
const MyProfileStack = createStackNavigator(
  {
    Profile: {
      screen: Profile,
    },
    
  },
  {
    headerMode: 'none',
  }
);

const RelationshipsStack = createStackNavigator(
  {
    MyRelationships: {
      screen: MyRelationships,
    },
    AddRelation: {
      screen: AddRelation,
    },
  },
  {
    headerMode: 'none',
  }
);

const ScannerStack = createStackNavigator(
  {
    ScannerCode: {
      screen: ScannerCode,
    },
    Scanner: {
      screen: Scanner,
    },
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
    MyEventsMain: {
      screen: MyEventsStack,
    },
    MyProfileMain: {
      screen: MyProfileStack,
    },
    RelationshipsMain: {
      screen: RelationshipsStack,
    },
    ScannerMain: {
      screen: ScannerStack,
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
  

 
  let headerTitle = <Image source={require('../assets/icons/header_logo/header_logo.png')} style={{ width: 95, height: 35, flex:1, alignSelf: 'center', marginRight:40}} resizeMode="contain" /> ;
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

MyEventsStack.navigationOptions = ({ navigation }) => {
  const { routeName } = navigation.state.routes[navigation.state.index];
  

 
  let headerTitle = <Image source={require('../assets/icons/header_logo/header_logo.png')} style={{ width: 95, height: 35, flex:1, alignSelf: 'center', marginRight:40}} resizeMode="contain" /> ;
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

MyProfileStack.navigationOptions = ({ navigation }) => {
  const { routeName } = navigation.state.routes[navigation.state.index];
  

 
  let headerTitle = <Image source={require('../assets/icons/header_logo/header_logo.png')} style={{ width: 95, height: 35, flex:1, alignSelf: 'center', marginRight:40}} resizeMode="contain" /> ;
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

RelationshipsStack.navigationOptions = ({ navigation }) => {
  const { routeName } = navigation.state.routes[navigation.state.index];
  

 
  let headerTitle = <Image source={require('../assets/icons/header_logo/header_logo.png')} style={{ width: 95, height: 35, flex:1, alignSelf: 'center', marginRight:40}} resizeMode="contain" /> ;
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

ScannerStack.navigationOptions = ({ navigation }) => {
  const { routeName } = navigation.state.routes[navigation.state.index];
  

 
  let headerTitle = <Image source={require('../assets/icons/header_logo/header_logo.png')} style={{ width: 95, height: 35, flex:1, alignSelf: 'center', marginRight:40}} resizeMode="contain" /> ;
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