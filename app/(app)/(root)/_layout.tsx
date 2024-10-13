import { Stack } from 'expo-router';
import React from 'react';

const AppLayout = () => (
  <Stack screenOptions={{ headerShown: false }}>
    <Stack.Screen name='artist/(tabs)' options={{ headerShown: false }} />
    <Stack.Screen name='club/(tabs)' options={{ headerShown: false }} />
  </Stack>
);

export default AppLayout;
