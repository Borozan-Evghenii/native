import { Link, Redirect } from 'expo-router';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { StyledText } from '@/components/ui';
import { useAuthContext } from '@/utils/providers';

const SignIn = () => {
  const auth = useAuthContext();
  if (auth.isAuth) {
    <Redirect href='/(app)/(root)/artist' />;
  }

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', gap: 20 }}>
      <StyledText>Onboard</StyledText>
      <Link href='/register'>
        <StyledText>Register</StyledText>
      </Link>
      <Link href='/sign-in'>
        <StyledText>Sign In</StyledText>
      </Link>
      <Link href='/(app)/(root)/artist'>
        <StyledText>Artist</StyledText>
      </Link>
    </SafeAreaView>
  );
};

export default SignIn;
