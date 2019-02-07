import React from 'react';
import { Platform } from 'react-native';
import { Font } from 'expo';
import RF from "react-native-responsive-fontsize"

const getSize = (size) => {
  return RF(size / (Platform.OS === 'android' ? 8 : 6.5))
};

var FBFont = {
  async loadFonts() {
    await Font.loadAsync({
      'Alternategot': require('../assets/fonts/AlternateGotNo3DOT/AlternateGotNo3DOT.otf'),
      'FiraSans_Medium': require('../assets/fonts/FiraSans/FiraSans-Medium.ttf'),
      'FiraSans_Bold': require('../assets/fonts/FiraSans/FiraSans-Bold.ttf'),
      'FiraSans_BoldItalic': require('../assets/fonts/FiraSans/FiraSans-BoldItalic.ttf'),
      'FiraSans_Italic': require('../assets/fonts/FiraSans/FiraSans-Italic.ttf'),
      'FiraSans_Light': require('../assets/fonts/FiraSans/FiraSans-Light.ttf'),
      'FiraSans_LightItalic': require('../assets/fonts/FiraSans/FiraSans-LightItalic.ttf'),
      // 'FiraSans_Medium': require('../assets/fonts/FiraSans/FiraSans-Medium.ttf'),
      'FiraSans_MediumItalic': require('../assets/fonts/FiraSans/FiraSans-MediumItalic.ttf'),
      'FiraSans_Regular': require('../assets/fonts/FiraSans/FiraSans-Regular.ttf')
    });
  },

  AlternateGot(size: Number) {
    return {
      fontFamily : 'Alternategot',
      fontSize : getSize(size)
    };
  },
  FiraSansMedium(size: Number) {
    return {
      fontFamily : 'FiraSans_Medium',
      fontSize : getSize(size)
    };
  },
  FiraSansRegular(size: Number) {
    return {
      fontFamily : 'FiraSans_Regular',
      fontSize : getSize(size)
    };
  },
  FiraSansBold(size: Number) {
    return {
      fontFamily : 'FiraSans_Bold',
      fontSize : getSize(size)
    };
  },
  FiraSansBoldItalic(size: Number) {
    return {
      fontFamily : 'FiraSans_BoldItalic',
      fontSize :  getSize(size)
    };
  },
  FiraSansItalic(size: Number) {
    return {
      fontFamily : 'FiraSans_Italic',
      fontSize :  getSize(size)
    };
  },
  FiraSansLight(size: Number) {
    return {
      fontFamily : 'FiraSans_Light',
      fontSize :  getSize(size)
    };
  },
  FiraSansLightItalic(size: Number) {
    return {
      fontFamily : 'FiraSans_LightItalic',
      fontSize : getSize(size)
    };
  },
  
  FiraSansMediumItalic(size: Number) {
    return {
      fontFamily : 'FiraSans_MediumItalic',
      fontSize : getSize(size)
    };
  }
  
};

export default FBFont;
