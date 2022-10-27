import React from 'react'; 
import {COLORS} from '../components/Colors' 
import { TextInput } from 'react-native-paper'; 
import {Actions} from 'react-native-router-flux';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import stylesheet from '../css/Stylesheet' 
import Buttonview from '../components/Buttonview';
import InputTextView from '../components/InputTextView';

const Success = ({text}) => { 

  return (
    <SafeAreaView style={stylesheet.background}> 
      <ScrollView  > 
        <View style={{alignItems:'center', backgroundColor:'#fff'}}>
          <View style={{width:'95%', flexDirection:'row', margin:15}}>
            <TouchableOpacity onPress={()=> Actions.pop()}> 
              <Image source={require('../images/arrowback.png')} style={{margin:20}}></Image>
            </TouchableOpacity> 
          </View>
          <View style={{flexDirection:'row', alignSelf:'center', margin:20}}>
            <TouchableOpacity> 
              <Image source={require('../images/mailsent.png')} style={{margin:20}}></Image>
            </TouchableOpacity> 
          </View>
          <Text style={{fontSize:30, fontWeight:'bold', alignSelf:'center', color:COLORS.main_P, margin:30}}>Successful!</Text>
          <Text style={{color:COLORS.faintText, alignSelf:'center', marginHorizontal:70, textAlign:'center'}}>Reset password request email sent on your email</Text> 
          <View style={{marginTop:50, width:'90%', margin:30}}> 
            <TouchableOpacity onPress={()=> { 
              Actions.reset('Signin')}}>
              <Buttonview text={'Sign in'} full={true} filled={true}></Buttonview> 
            </TouchableOpacity>
          </View>
          
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    backgroundColor:'#fff'
  },
});

export default Success;
