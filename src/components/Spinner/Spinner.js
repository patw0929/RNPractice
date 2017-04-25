import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const styles = {
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
};

const Spinner = ({ size = 'large' }) => {
  return (
    <View style={ styles.wrapper }>
      <ActivityIndicator size={ size } />
    </View>
  );
};

Spinner.displayName = 'Spinner';

export default Spinner;
