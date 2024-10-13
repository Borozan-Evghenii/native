import React from 'react';
import type { TextProps } from 'react-native';
import { Text, StyleSheet } from 'react-native';

const textSize = StyleSheet.create({
  sm: {
    textAlign: 'center'
  },
  lg: {
    textAlign: 'right'
  }
});
const textVariants = StyleSheet.create({
  h1: {
    fontSize: 32,
    fontWeight: 500
  },
  h2: {
    fontSize: 20,
    fontWeight: 400
  },
  h3: {
    fontSize: 18,
    fontWeight: 400
  }
});

type TextSize = typeof textSize;
type TextVariants = typeof textVariants;

interface StyledTextProps extends TextProps {
  size?: keyof TextSize;
  variants?: keyof TextVariants;
}

export const StyledText = ({
  children,
  size = 'lg',
  variants = 'h3',
  style,
  ...props
}: StyledTextProps) => {
  const styles = StyleSheet.flatten([textVariants[variants], textSize[size], style]);

  return (
    <Text style={styles} {...props}>
      {children}
    </Text>
  );
};
