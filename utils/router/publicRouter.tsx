import { Stack } from 'expo-router';
import React from 'react';

const StackScreenDefaultOptions = { headerShown: false };

export const PublicRouter = () => (
  <Stack>
    <Stack.Screen name='/artist' options={StackScreenDefaultOptions} />
  </Stack>
);
