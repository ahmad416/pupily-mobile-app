import React from 'react'; 
import {COLORS} from '../components/Colors'
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
import RBSheet from "react-native-raw-bottom-sheet";
import Signuprow from '../components/Signuprow';
import { Actions } from 'react-native-router-flux';

const SignupDialog = ({sheet}) => {
  return (
    <SafeAreaView> 
      <ScrollView> 
      <View style={{backgroundColor:COLORS.tra, borderRadius:20, padding:10}}>
        <TouchableOpacity onPress={() => sheet.current.close()}>
          <Image source={require('../images/cross.png')} style={{alignSelf:'flex-end'}}></Image>
        </TouchableOpacity>
      <View>
          <Text style={{fontSize:35, fontWeight:'bold', alignSelf:'center', color:COLORS.sign_up}}>Sign up</Text>
          <Text style={{color:COLORS.faintText, alignSelf:'center', marginTop:10}}>A world class education for anyone, anywhere</Text>
      </View>
      <Signuprow image={require('../images/parent.png')} 
                  text={'Parent'} 
                  desc={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
                  onPress={ () => {sheet.current.close(); Actions.push("Signup") }}/>

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
export default SignupDialog;
