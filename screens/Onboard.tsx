import { Redirect } from 'expo-router';
import React from 'react';
import { SafeAreaView, Text } from 'react-native';

import { Button } from '@/components/ui';
import { useAuthContext } from '@/utils/providers';

export const Onboard = () => {
  const auth = useAuthContext();

  if (auth.isAuth) {
    return <Redirect href='/artist' />;
  }

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>some</Text>
      <Button>
        <Text>Continue</Text>
      </Button>
    </SafeAreaView>
  );
};
