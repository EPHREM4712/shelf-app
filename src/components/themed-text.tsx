
import React from 'react';
import { Text, type TextProps, useColorScheme } from 'react-native';
import { Colors } from '../constants/theme';

type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
};

const ThemedText = ({
  style,
  lightColor,
  darkColor,
  ...props
}: ThemedTextProps) => {

  // Detect system theme
  const colorScheme = useColorScheme();

  const color =
    colorScheme === 'dark'
      ? darkColor ?? Colors.dark.text
      : lightColor ?? Colors.light.text;

  return (
    <Text
      style={[{ color }, style]}
      {...props}
    />
  );
};

export default ThemedText;
