import React from 'react';
import { TextInput, View, Text } from 'react-native';

const styles = {
  wrapper: {
    flexDirection: 'row',
  },
  textInput: {
    width: 100,
    height: 20,
  },
};

const Input = ({ label, value, onChangeText, placeholder }) => {
  return (
    <View style={ styles.wrapper }>
      <Text>{ label }</Text>
      <TextInput
        style={ styles.textInput }
        value={ value }
        onChangeText={ onChangeText }
        placeholder={ placeholder }
      />
    </View>
  );
};

Input.displayName = 'Input';

export default Input;
