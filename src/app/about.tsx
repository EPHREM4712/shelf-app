import { StyleSheet, Text, View, useColorScheme} from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { Colors } from '../constants/theme';


const about = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme === 'dark' ? 'dark' : 'light'];
  return (
    <View style={[styles.container, { backgroundColor: theme.background}]}>
      <Text style={styles.title}>About page</Text>
      <Link href="/" style={styles.link}>Back Home</Link>
    </View>
  )
}

export default about

const styles = StyleSheet.create({container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  link: {
    marginVertical: 10,
    borderBottomWidth: 1
  }
})