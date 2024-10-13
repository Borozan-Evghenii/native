import React from 'react';
import type { PressableProps, ViewProps } from 'react-native';
import { Pressable, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: 15,
    paddingHorizontal: 90,
    backgroundColor: '#3333',
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20
  },
  variant: {}
});

interface ButtonPops extends PressableProps {
  icon?: ViewProps['children'];
  children: React.ReactNode;
}

export const Button = ({ icon, children, ...props }: ButtonPops) => (
  <Pressable style={styles.container} {...props}>
    {icon && <View>{icon}</View>}
    {children}
    {icon && <View>{icon}</View>}
  </Pressable>
);
