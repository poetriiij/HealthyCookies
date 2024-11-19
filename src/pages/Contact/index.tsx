import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import React from 'react';
import { Gap } from '../../components';
import { SplashLogo } from '../../assets';

const Contact = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.wrapcontainer}>
      <SplashLogo width={488} height={500}style={{ marginRight: '17%',}}/>
      <Gap height={40} />
      <Text style={styles.textTitle}>Contact Us!</Text>
      <Gap height={30} />
      <TouchableOpacity style={styles.button}>
      <Image
            source={require('../../assets/Logo/Instagram.png')}
            style={styles.image}/>
        <Text style={styles.text}>@healthycookiesss_</Text>
      </TouchableOpacity>
      <Gap height={10} />
      <TouchableOpacity style={styles.button}>
      <Image
            source={require('../../assets/Logo/Whatsapp.png')}
            style={styles.image}/>
        <Text style={styles.text}>089656562960</Text>
      </TouchableOpacity>
      <Gap height={10} />
      <TouchableOpacity style={styles.button}>
      <Image
            source={require('../../assets/Logo/EmailContact.png')}
            style={styles.image}/>
        <Text style={styles.text}>healthycookies@gmail.com</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Contact;

const styles = StyleSheet.create({
  wrapcontainer: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
    bottom: '10%',
  },
  text: {
    fontSize: 18,
    fontWeight: "700",
    color: '#000', 
    textAlign: 'left',
    marginLeft: 10, // Memberi jarak antara ikon dan teks
  },
  textTitle: {
    fontSize: 30,
    fontWeight: "bold",
    color: '#000',
  },
  button: {
    backgroundColor: '#C19F72',
    width: 360,
    height: 50,
    borderRadius: 20, 
    flexDirection: 'row',
    justifyContent: 'flex-start', // Menempatkan konten ke kiri
    alignItems: 'center', 
    paddingLeft: 15, 
  },
  image: {
    width: 30, 
    height: 30,
    resizeMode: 'contain',
  },
});
