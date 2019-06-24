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

import {Header, CheckBox, Card, ListItem, Button, Icon} from 'react-native-elements'

import { MonoText } from '../components/StyledText';
import { requireNativeViewManager } from '@unimodules/core';


export default class IngredientsScreen extends React.Component{
  constructor(props) {
    super(props);

    this.state = {

    }
  }

 render(){
  const users = [
    {
       name: 'brynn',
       avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
    },

   ]
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
    <Card >
  {
    users.map((u, i) => {
      return (
        <View key={i} style={styles.user}>
          <Image
            style={styles.image}
            resizeMode="cover"
            source={{ uri: u.avatar }}
          />
          <Text style={styles.name}>{u.name}</Text>
        </View>
      );
    })
  }
</Card>
    </View>
   <View>

   </View>
   <Button
  raised
  icon={{name: 'restaurant'}}
  title='GET GROCERY LIST!'
  onPress={() => navigate('Home')} />
    </View>
      );
 }

}

IngredientsScreen.navigationOptions = {
  header: null,
};

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

});
