import { Slot } from 'expo-router';
import React from 'react';

import { AuthProvider } from '@/utils/providers';

const RootLayout = () => (
  <AuthProvider>
    <Slot />
  </AuthProvider>
);

export default RootLayout;
