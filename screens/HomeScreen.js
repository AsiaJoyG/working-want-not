import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,

} from 'react-native';

import {Header} from 'react-native-elements'

import { MonoText } from '../components/StyledText';
import { requireNativeViewManager } from '@unimodules/core';


export default class HomeScreen extends React.Component {
  render(){
    const {navigate} = this.props.navigation
    return (
      <View style= {styles.container}>
        <View style={styles.headerContainer}>
        <Header
        statusBarProps={{ barStyle: 'light-content' }}
        barStyle="dark-content" // or directly
        centerComponent={{ text: 'WANT NOT', style: { color: '#fff' } }}
        containerStyle={{
          backgroundColor: '#191970',
          justifyContent: 'space-around',
        }}
      />
        </View>



      <View style={styles.body}>
      <ImageBackground source={require('../assets/images/chefpattern.png')} style = {styles.backgroundPic}>

      <TouchableOpacity onPress={() => navigate('Ingredients')}>
      <Image  style={styles.image}
       source={require('../assets/images/LetsGetCookingicon.png')}></Image>
      </TouchableOpacity>



      </ImageBackground>
      </View>


      </View>
        );
    return (
      <View style= {styles.container}>
        <View style={styles.headerContainer}>
        <Header
        statusBarProps={{ barStyle: 'light-content' }}
        barStyle="dark-content" // or directly
        centerComponent={{ text: 'WANT NOT', style: { color: '#fff' } }}
        containerStyle={{
          backgroundColor: '#191970',
          justifyContent: 'space-around',
        }}
      />
        </View>



      <View style={styles.body}>
      <ImageBackground source={require('../assets/images/chefpattern.png')} style = {styles.backgroundPic}>

      {/* <Text  style={styles.text}>WANT NOT</Text> */}
      <Image onPress={() => console.log('hey')} style={styles.image}
       source={require('../assets/images/LetsGetCookingicon.png')}></Image>

      </ImageBackground>
      </View>


      </View>
        );

  }

}

HomeScreen.navigationOptions = {
  header: null,
};



function handleLearnMorePress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/development-mode/'
  );
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/up-and-running/#cant-see-your-changes'
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#f0fff0',
  },
  body: {
    alignItems: 'center',
  },
  headerContainer:{
    flex: 1,
   width: '100%',
   height: '50%'

  },
  text: {
    fontSize: 50,
    fontWeight: "bold",
    color: 'black',
    backgroundColor: "#f0fff0"
  },
  image: {
    width: 200,
    height: 200,
    borderWidth: 2,
  },
  backgroundPic:{
   width: 380,
   height: 710,
   alignItems: 'center',
   justifyContent: 'center',


  },


  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },

});
