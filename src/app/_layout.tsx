import React from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'react-native';
import { Colors } from '../constants/theme';

const RootLayout = () => {
  const colorScheme = useColorScheme();

  const theme = Colors[colorScheme === 'dark' ? 'dark' : 'light'];

  return (
    <>
   <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.background,
        },
        headerTintColor: theme.text,
      }}
    >
      <Stack.Screen name="index" options={{ title: 'Home' }} />
      <Stack.Screen name="about" options={{ title: 'About' }} />
      <Stack.Screen
        name="contact"
        options={{
          title: 'Contact',
          headerShown: false,
        }}
      />
    </Stack>
    </>
  );
};

export default RootLayout;