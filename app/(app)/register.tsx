import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { StyledText } from '@/components/ui';

const Register = () => (
  <SafeAreaView>
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'column',
        padding: 20
      }}
    >
      <StyledText size='sm' variants='h1'>
        Register
      </StyledText>
    </View>
  </SafeAreaView>
);

export default Register;
