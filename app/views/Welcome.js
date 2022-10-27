import React from 'react'; 
import { useRef } from "react";
import {COLORS} from '../components/Colors' 
import RBSheet from "react-native-raw-bottom-sheet";
import {Actions} from 'react-native-router-flux';
import Signuprow from '../components/Signuprow';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  Button,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import stylesheet from '../css/Stylesheet' 
import Buttonview from '../components/Buttonview'; 

const Welcome = (index) => { 
  const refRBSheet = useRef({});
  return (
    <SafeAreaView style={stylesheet.background}> 
      <ScrollView  > 
        <View style={{alignItems:'center'}}>
           <Image source={require('../images/logo.png')} style={{margin:60}}></Image>
           <Text style={[stylesheet.textmain_P,{fontSize:40, fontWeight:'bold'}]}>Welcome</Text>
           <Text style={{color:COLORS.blue}}>to Personalized Learning</Text>
           <Image source={require('../images/welcomeimage.png')} style={{margin:20}}></Image>
           <View 
           style={{width:'100%', flexDirection:'row', justifyContent:'space-between', paddingHorizontal:50, paddingVertical:30}}>
              <TouchableOpacity onPress={ () => Actions.push("Signin")}>
                <Buttonview text={"Log in"} full={false}></Buttonview>
              </TouchableOpacity> 
              <RBSheet
                ref={refRBSheet}
                index={index}
                height={500}
                openDuration={500}
                closeDuration={400}
                customStyles={{
                  container: { 
                    borderRadius:10
                  }
                }}
                >
                   <SafeAreaView> 
                    <ScrollView> 
                    <View style={{backgroundColor:COLORS.transparent, borderRadius:20, padding:10}}>
                      <TouchableOpacity onPress={() => refRBSheet.current.close()}>
                        <Image source={require('../images/cross.png')} style={{alignSelf:'flex-end'}}></Image>
                      </TouchableOpacity>
                    <View>
                        <Text style={{fontSize:35, fontWeight:'bold', alignSelf:'center', color:COLORS.sign_up}}>Sign up</Text>
                        <Text style={{color:COLORS.faintText, alignSelf:'center', marginTop:10}}>A world class education for anyone, anywhere</Text>
                    </View>
                    <Signuprow image={require('../images/parent.png')} 
                                text={'Parent'} 
                                desc={''}
                                onPress={ () => {refRBSheet.current.close(); Actions.push("Signup") }}/>
                    <Signuprow image={require('../images/teacher.png')} 
                                text={'Teacher'} 
                                desc={''}/>
                    <Signuprow image={require('../images/school.png')} 
                                text={'School and District'} 
                                desc={''}/>
                              
                   
                              
                  </View>
                    </ScrollView>
                  </SafeAreaView>
              </RBSheet>
              <TouchableOpacity onPress={() => refRBSheet.current.open()}>
                <Buttonview text={"Sign up"} full={false} filled={true}></Buttonview> 
              </TouchableOpacity>
              
              </View>
          
        </View>
      </ScrollView> 
      <Text style={[stylesheet.textCosmic, {marginTop:10, color:COLORS.P_blue, padding:30, alignSelf:'center'}]}>Continue as Guest</Text>
       
    </SafeAreaView>
  );
};

const SignupDialogs = ({sheet}) => {   
  return (
    <SafeAreaView> 
      <ScrollView> 
      <View style={{backgroundColor:COLORS.transparent, borderRadius:20, padding:10}}>
        <TouchableOpacity onPress={() => sheet.close()}>
          <Image source={require('../images/cross.png')} style={{alignSelf:'flex-end'}}></Image>
        </TouchableOpacity>
      <View>
          <Text style={{fontSize:35, fontWeight:'bold', alignSelf:'center', color:COLORS.sign_up}}>Sign up</Text>
          <Text style={{color:COLORS.faintText, alignSelf:'center', marginTop:10}}>A world class education for anyone, anywhere</Text>
      </View>
      <Signuprow image={require('../images/parent.png')} 
                  text={'Parent'} 
                  desc={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
                  onPress={ () => {sheet.close(); Actions.push("Signup") }}/>

      <Signuprow image={require('../images/school.png')} 
                 text={'School and District'} 
                 desc={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}/>
                 
      <Signuprow image={require('../images/teacher.png')} 
                 text={'Teacher'} 
                 desc={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}/>
                 
    </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Welcome;
