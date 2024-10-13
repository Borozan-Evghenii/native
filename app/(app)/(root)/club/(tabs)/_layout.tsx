import { Tabs } from 'expo-router';
import React from 'react';
import { StyleSheet } from 'react-native';

import { TabBar } from '@/components/layouts';

const styles = StyleSheet.create({
  tabBar: {
    margin: 20,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  }
});

const TabsLayout = () => (
  <Tabs
    screenOptions={{ headerShown: false, tabBarStyle: styles.tabBar }}
    tabBar={(props) => <TabBar {...props} />}
  >
    <Tabs.Screen
      name='chat'
      options={{
        title: 'Chat'
      }}
    />
    <Tabs.Screen name='profile' />
    <Tabs.Screen name='search' />
  </Tabs>
);

export default TabsLayout;
