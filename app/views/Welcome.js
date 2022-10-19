import React from 'react'; 
import {COLORS} from '../components/Colors' 
import RBSheet from "react-native-raw-bottom-sheet";
import {Actions} from 'react-native-router-flux';
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
import buttoncomp from '../components/Buttonview'
import Buttonview from '../components/Buttonview';
import SignupDialog from '../dialogs/SignupDialog';

const Welcome = () => { 

  return (
    <SafeAreaView style={stylesheet.background}> 
      <ScrollView  > 
        <View style={{alignItems:'center'}}>
           <Image source={require('../images/logo.png')} style={{margin:30}}></Image>
           <Text style={[stylesheet.textmain_P,{fontSize:40, fontWeight:'bold'}]}>Welcome</Text>
           <Text style={[stylesheet.textCosmic]}>to Personalized Learning</Text>
           <Image source={require('../images/welcomeimage.png')} style={{margin:20}}></Image>
           <View 
           style={{width:'100%', flexDirection:'row', justifyContent:'space-between', paddingHorizontal:50, paddingVertical:30}}>
              <TouchableOpacity onPress={ () => Actions.push("Signin")}>
                <Buttonview text={"Log in"} full={false}></Buttonview>
              </TouchableOpacity> 
              <TouchableOpacity onPress={() => this.RBSheet.open()}>
                <Buttonview text={"Sign up"} full={false} filled={true}></Buttonview> 
              </TouchableOpacity>
              <RBSheet
                  ref={ref => {
                    this.RBSheet = ref;}}
                                    height={500}
                                    openDuration={450}
                                    closeDuration={500}
                                    customStyles={{
                                      container: {
                                        borderTopLeftRadius:20,
                                        borderTopEndRadius:20
                                      }
                                    }}>
                  <SignupDialog sheet={this.RBSheet}></SignupDialog>
                </RBSheet>
              </View>
          
           <Text style={[stylesheet.textCosmic, {marginTop:10, color:COLORS.P_blue}]}>Continue as Guest</Text>
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

export default Welcome;
