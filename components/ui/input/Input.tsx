import React from 'react';
import type { TextInputProps } from 'react-native';
import { View, TextInput, Text, StyleSheet, Pressable } from 'react-native';

interface InputProps extends TextInputProps {
  label?: string;
  helper?: string;
  onClear?: () => void;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    width: '100%'
  },
  input: {
    fontSize: 20,
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

export const Input = ({ label, helper, onClear, ...props }: InputProps) => (
  <View style={styles.container}>
    {label && <Text>{label}</Text>}
    <View style={styles.input}>
      <TextInput placeholder='some' {...props} />
      <Pressable onPress={onClear}>
        <Text>clear</Text>
      </Pressable>
    </View>
    {helper && <Text>{helper}</Text>}
  </View>
);
