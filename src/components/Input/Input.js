import React from 'react';
import { TextInput, View, Text } from 'react-native';

const styles = {
  wrapper: {
    flexDirection: 'row',
    flex: 1,
    height: 40,
    alignItems: 'center',
  },
  label: {
    fontSize: 18,
    marginLeft: 20,
    flex: 1,
  },
  textInput: {
    color: '#000',
    flex: 2,
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
  },
};

const Input = ({ label, value, onChangeText, placeholder }) => {
  return (
    <View style={ styles.wrapper }>
      <Text style={ styles.label }>{ label }</Text>
      <TextInput
        autoCorrect={ false }
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
