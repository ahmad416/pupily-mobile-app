import React from 'react'; 
import {COLORS} from '../components/Colors' 
import { TextInput } from 'react-native-paper';
import RBSheet from "react-native-raw-bottom-sheet";
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

const Signup = () => { 

  return (
    <SafeAreaView style={stylesheet.background}> 
      <ScrollView  > 
        <View style={{alignItems:'center', backgroundColor:'#fff'}}>
          <View style={{width:'95%', flexDirection:'row', margin:15}}>
            <TouchableOpacity onPress={()=> Actions.pop()}> 
              <Image source={require('../images/arrowback.png')} style={{margin:20}}></Image>
            </TouchableOpacity>
          </View>
          <View style={{width:'90%'}}>
          <Text style={{fontSize:40, fontWeight:'bold', alignSelf:'center', color:COLORS.sign_up}}>Sign up</Text>
          <Text style={{color:COLORS.faintText, alignSelf:'center', marginTop:10}}>A world class education for anyone, anywhere</Text>
           
            <View style={stylesheet.inputback}>
            <InputTextView placeholdertext={"Name"}></InputTextView>
            
            </View>
            <View style={stylesheet.inputback}>
            <InputTextView placeholdertext={"Email"}></InputTextView> 
            </View>
            <View style={stylesheet.inputback}>
            <InputTextView placeholdertext={"User Name"}></InputTextView> 
            </View>
            <View style={stylesheet.inputback}>
            <InputTextView placeholdertext={"Password"} isPass={true}></InputTextView> 
            </View>
            <View style={stylesheet.inputback}>
            <InputTextView placeholdertext={"Confirm Password"} isPass={true}></InputTextView> 
            </View>
          </View>
          
          <View style={{width:'90%', margin:30}}>

          <Buttonview 
          text={'Sign up'} full={true} filled={true}></Buttonview>
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

export default Signup;
