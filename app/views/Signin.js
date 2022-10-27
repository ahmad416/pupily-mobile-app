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
import buttoncomp from '../components/Buttonview'
import Buttonview from '../components/Buttonview';
import InputTextView from '../components/InputTextView';

const Signin = () => { 

  return (
    <SafeAreaView style={stylesheet.background}> 
      <ScrollView  > 
        <View style={{alignItems:'center', backgroundColor:'#fff'}}>
          <View style={{width:'95%', flexDirection:'row', margin:15}}>
            <TouchableOpacity onPress={()=> Actions.pop()}> 
              <Image source={require('../images/arrowback.png')} style={{margin:20}}></Image>
            </TouchableOpacity>

          </View>
          <View style={{width:'90%', paddingTop:5, borderTopLeftRadius:10, borderTopRightRadius:10, backgroundColor:COLORS.backColor}}>
           <InputTextView placeholdertext={"Email or User Name"}></InputTextView>
           
          </View>
          <View style={{width:'90%', paddingTop:5, marginTop:30, borderTopLeftRadius:10, borderTopRightRadius:10, backgroundColor:COLORS.backColor}}>
           <InputTextView placeholdertext={"Password"} isPass={true}></InputTextView> 
          </View>
          <View style={{width:'90%', margin:30}}>

          <Buttonview 
          text={'Sign in'} full={true} filled={true}></Buttonview>

          </View>
          
        </View>
      </ScrollView>
      <View style={{width:'100%', flexDirection:'row', justifyContent:'space-between', padding:30}}>
        <TouchableOpacity onPress={()=> Actions.push('Forgot', { text:'Username'})}>
          <Text style={[stylesheet.textCosmic, {marginTop:10, color:COLORS.P_blue}]}>Forgot Username?</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> Actions.push('Forgot', { text:'Password'})}>
          <Text style={[stylesheet.textCosmic, {marginTop:10, color:COLORS.P_blue}]}>Forgot Password?</Text>
        </TouchableOpacity>
          
          </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    backgroundColor:'#fff'
  },
});

export default Signin;
