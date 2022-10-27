import React from 'react';  
import { useState } from 'react';
import {COLORS} from './Colors'
import { TextInput } from 'react-native-paper';
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

const InputTextView = ({placeholdertext, isPass}) => { 
  
  const [passwordVisible, setPasswordVisible] = useState(true);
  return (
    <View> 
      <TextInput style={{fontSize:17, backgroundColor:COLORS.transparent}}
              secureTextEntry={isPass && passwordVisible} 
              right={isPass && <TextInput.Icon icon={passwordVisible ? require('../images/eye.png') : require('../images/eyeoff.png')} onPress={() => setPasswordVisible(!passwordVisible)} />}
              activeUnderlineColor={COLORS.main_P }
              backgroundColor={COLORS.backColor}
              padding={5} 
              multiline={false}
              placeholderTextColor={COLORS.S_black}
              selectionColor={COLORS.main_P}
              outlineColor={COLORS.main_P} 
              label={placeholdertext}
              mode={'flat'}
          />
    </View>
  );
};
const styles = StyleSheet.create({
  back:
  { 
  }
});
export default InputTextView;
