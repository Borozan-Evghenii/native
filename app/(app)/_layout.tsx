import { Stack } from 'expo-router';
import React from 'react';

const AuthLayout = () => (
  <Stack screenOptions={{ headerShown: false }}>
    <Stack.Screen name='(root)' />
    <Stack.Screen name='index' />
    <Stack.Screen name='register' options={{ presentation: 'formSheet' }} />
    <Stack.Screen name='sign-in' options={{ presentation: 'formSheet' }} />
  </Stack>
);

export default AuthLayout;
