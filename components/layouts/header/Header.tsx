import { useRouter } from 'expo-router';
import React from 'react';
import { View, Text, Pressable } from 'react-native';

export const Header = () => {
  const router = useRouter();

  return (
    <View
      style={{
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
    >
      <Pressable onPress={() => router.back()}>
        <Text>Back icon</Text>
      </Pressable>
      <Pressable>
        <Text>Close</Text>
      </Pressable>
    </View>
  );
};
