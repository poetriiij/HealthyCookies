import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import React from 'react';
import { Gap } from '../../components';
import { SplashLogo } from '../../assets';

const Splash = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.wrapcontainer}>
      <SplashLogo width={555} height={500}style={{ marginRight: '15%',}}/>
      <Gap height={50} />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Op')}>
        <Text style={styles.text}>Our Product</Text>
      </TouchableOpacity>
      <Gap height={10} />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Order')}>
        <Text style={styles.text}>Order</Text>
      </TouchableOpacity>
      <Gap height={10} />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Contact')}>
        <Text style={styles.text}>Contact Us</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Splash; 

const styles = StyleSheet.create({
    wrapcontainer: {
      flex: 1, 
      justifyContent: 'center',
      alignItems: 'center',
      bottom:'10%',
    },
    text: {
      fontSize: 28,
      fontWeight: "900",
      color: '#FFFFFF', 
      textAlign: 'center',
    },
    button: {
      backgroundColor: '#C19F72',
      width:300,
      height: 65,
      borderRadius: 10, 
      textAlign: 'center',
      justifyContent: 'center',
    },
  });
  
