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

const Forgot = ({text}) => { 

  return (
    <SafeAreaView style={stylesheet.background}> 
      <ScrollView  > 
        <View style={{alignItems:'center', backgroundColor:'#fff'}}>
          <View style={{width:'95%', flexDirection:'row', margin:15}}>
            <TouchableOpacity onPress={()=> Actions.pop()}> 
              <Image source={require('../images/arrowback.png')} style={{margin:20}}></Image>
            </TouchableOpacity> 
          </View>
          <View style={{flexDirection:'row', alignSelf:'center'}}>
            <TouchableOpacity> 
              <Image source={require('../images/forgot.png')} style={{margin:20}}></Image>
            </TouchableOpacity> 
          </View>
          <Text style={{fontSize:28, fontWeight:'bold', alignSelf:'center', color:COLORS.sign_up, marginTop:20}}>Forgot {text}?</Text>
          <Text style={{color:COLORS.blue, alignSelf:'center', marginHorizontal:30, textAlign:'center', marginVertical:5}}>Don’t worry! It happens. {"\n"} Please enter your credential to reset</Text>
          
          <View style={{marginTop:50, width:'90%', paddingTop:5, borderTopLeftRadius:10, borderTopRightRadius:10, backgroundColor:COLORS.backColor}}>
           <InputTextView placeholdertext={"Email or User Name"}></InputTextView> 
          </View>
           
          <View style={{marginTop:50, width:'90%', margin:30}}>
            <TouchableOpacity onPress={()=> {
              Actions.push('Success')}}>
              <Buttonview text={'Submit'} full={true} filled={true}></Buttonview> 
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

export default Forgot;
