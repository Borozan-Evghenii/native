import { Link } from 'expo-router';
import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { StyledText } from '@/components/ui';

const Chat = () => (
  <SafeAreaView>
    <StyledText>Chat page</StyledText>
    <Link href='/register'>
      <Text>register</Text>
    </Link>
  </SafeAreaView>
);

export default Chat;
