import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { StyledText } from '@/components/ui';

const SignInScreen = () => (
  <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <StyledText>Sign inm Screen</StyledText>
  </SafeAreaView>
);

export default SignInScreen;
