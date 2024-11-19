import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React from 'react';
import {Gap} from '../../components';

const Thankyou = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/icon/Thanks.png')}
        style={styles.background}>
        <View style={styles.overlay} />
        <Gap height={350} />
        <View style={styles.buttoncontainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Cancel')}>
            <Text style={styles.textbutton}>Batalkan Pesan</Text>
          </TouchableOpacity>
          <Gap height={102} />
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Splash')}>
            <Text style={styles.textbutton}>Kembali ke Beranda</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Thankyou;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  button: {
    backgroundColor: '#C19F72',
    width: 265,
    height: 55,
    borderRadius: 30,
    textAlign: 'center',
    justifyContent: 'center',
  },
  textbutton: {
    fontSize: 21,
    fontWeight: '900',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  buttoncontainer: {
    paddingLeft:50,
    alignItems: 'center',
  },
});
