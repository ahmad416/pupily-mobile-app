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

const Signuprow = ({image, text, desc, onPress}) => {  
  return (
    <TouchableOpacity style={{backgroundColor:COLORS.white, margin:10, elevation:5, paddingHorizontal:5,
            borderRadius:15, borderWidth:1,borderColor:COLORS.white, paddingVertical:3}}
            onPress={onPress}> 
        <View style={{flexDirection:'row', alignItems:'center', padding:15}}>
          <Image source={image} style={{marginHorizontal:10, alignSelf:'center'}}></Image> 

          <Text style={{color:COLORS.black, fontSize:20}} numberOfLines={1} >{text}</Text> 
          {/* <View>
            <Text style={{color:COLORS.descColor, fontSize:18, paddingEnd:10}} numberOfLines={2} >{desc}</Text>
          </View> */}
        </View> 
    </TouchableOpacity>
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
export default Signuprow;
