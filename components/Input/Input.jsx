import { s } from "./Input.style";

import { View, TextInput, Text } from "react-native";

export function Input({ defaultValue, onChange, unit }) {
  return (
    <View style={s.root}>
    <TextInput 
    style={s.input} 
    maxLength={4} 
    placeholder="Input temperature" 
    defaultValue={defaultValue.toString()} 
    onChangeText={function(text){
        onChange(text);
    }}
    />
    <Text style={s.unit}>{unit}</Text>
  </View>
  );
}