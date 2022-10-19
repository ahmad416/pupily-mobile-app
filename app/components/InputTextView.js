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
      <TextInput style={{fontSize:17}}
                 
              secureTextEntry={isPass && passwordVisible} 
              right={isPass && <TextInput.Icon icon={passwordVisible ? "eye" : "eye-off"} onPress={() => setPasswordVisible(!passwordVisible)} />}
  
              activeUnderlineColor={COLORS.main_P }
              backgroundColor={COLORS.backColor}
              padding={5} 
              multiline={false}
              placeholderTextColor={COLORS.S_black}
              selectionColor={COLORS.main_P}
              outlineColor={COLORS.main_P} 
              label={placeholdertext}
              mode={'flat'}
              // onChangeText={text => setText(text)}
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
