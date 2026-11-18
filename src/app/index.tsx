
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {Link} from 'expo-router'
import Logo from '../../assets/images/images (1).jpg';


const Home = () => {
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.img} />

      <Text style={[styles.title, { color: 'purple' }]}>The Number 1</Text>

      <Text style={{ marginTop: 10, marginBottom: 30 }}>
        Reading List App
      </Text>
      <Link href="/about"style={styles.link}> About Page</Link>
     
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  img: {
    width: 150,
    height: 150,
    marginVertical: 20,
    resizeMode: 'contain',
  },
   link: {
    marginVertical: 10,
    borderBottomWidth: 1
  }
  
});
