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
      'FiraSans-Bold': require('../assets/fonts/FiraSans/FiraSans-Bold.ttf'),
      'FiraSans-BoldItalic': require('../assets/fonts/FiraSans/FiraSans-BoldItalic.ttf'),
      'FiraSans-Italic': require('../assets/fonts/FiraSans/FiraSans-Italic.ttf'),
      'FiraSans-Light': require('../assets/fonts/FiraSans/FiraSans-Light.ttf'),
      'FiraSans-LightItalic': require('../assets/fonts/FiraSans/FiraSans-LightItalic.ttf'),
      'FiraSans-Medium': require('../assets/fonts/FiraSans/FiraSans-Medium.ttf'),
      'FiraSans-MediumItalic': require('../assets/fonts/FiraSans/FiraSans-MediumItalic.ttf'),
      'FiraSans-Regular': require('../assets/fonts/FiraSans/FiraSans-Regular.ttf')
    });
  },

  AlternateGot(size: Number) {
    return {
      fontFamily : 'Alternategot',
      fontSize : getSize(size)
    };
  },
  FiraSansBold(size: Number) {
    return {
      fontFamily : 'FiraSans-Bold',
      fontSize : getSize(size)
    };
  },
  FiraSansBoldItalic(size: Number) {
    return {
      fontFamily : 'FiraSans-BoldItalic',
      fontSize :  getSize(size)
    };
  },
  FiraSansItalic(size: Number) {
    return {
      fontFamily : 'FiraSans-Italic',
      fontSize :  getSize(size)
    };
  },
  FiraSansLight(size: Number) {
    return {
      fontFamily : 'FiraSans-Light',
      fontSize :  getSize(size)
    };
  },
  FiraSansLightItalic(size: Number) {
    return {
      fontFamily : 'FiraSans-LightItalic',
      fontSize : getSize(size)
    };
  },
  FiraSansMedium(size: Number) {
    return {
      fontFamily : 'FiraSans-Medium',
      fontSize : getSize(size)
    };
  },
  FiraSansMediumItalic(size: Number) {
    return {
      fontFamily : 'FiraSans-MediumItalic',
      fontSize : getSize(size)
    };
  },
  FiraSansRegular(size: Number) {
    return {
      fontFamily : 'FiraSans-Regular',
      fontSize : getSize(size)
    };
  }
};

export default FBFont;
