import React from 'react';  
import {COLORS} from './Colors'
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

const Buttonview = ({text, full, filled}) => { 
  const onPress = (buttonTitle) => {
      switch(buttonTitle){
        case "Log in": break; 
        case "Sign up": break;
      }
  }
  return (
    <View style={[styles.back, full && {width:'100%', paddingVertical:5}, filled && styles.fill]}
        onPress={onPress(text)}> 
      <Text style={[styles.empty, filled && styles.fill, {backgroundColor:COLORS.transparent}]}>{text}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  back:
  {
    alignItems:'center',
    width:90,
    borderRadius: 10, 
    margin:3,
    borderColor:COLORS.main_P,
    borderWidth:1
  },
  empty: {
    paddingVertical:8,
    paddingHorizontal:5,
    fontSize:17,
    backgroundColor:COLORS.white,
    color:COLORS.main_P,
    alignItems:'center'
  },
  fill:{
    color:COLORS.white,
    backgroundColor:COLORS.main_P 
  }
});
export default Buttonview;
