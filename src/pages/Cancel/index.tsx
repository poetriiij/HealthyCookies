import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {Gap} from '../../components';

const Cancel = ({navigation}) => {
  const [name, setName] = useState('');

  return (
    <ScrollView
      style={styles.wrapcontainer}
      contentContainerStyle={styles.contentContainer}>
      <Gap height={100} />
      <Image
        source={require('../../assets/icon/Batal.png')}
        style={styles.image}
        resizeMode="contain"
      />
      <Gap height={135} />
      <View style={styles.box}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Splash')}>
          <Text style={styles.textbutton}>Kembali ke Beranda</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Cancel;

const styles = StyleSheet.create({
  wrapcontainer: {
    flex: 1,
    backgroundColor: '#ffff',
  },
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 420,
    height: 450,
    resizeMode: 'contain',
  },
  text: {
    fontSize: 17,
    fontWeight: '600',
    color: '#000',
    marginBottom: 10,
  },
  box: {
    paddingLeft: '20%',
    width: 400,
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 10,
    bottom: 80,
  },
  button: {
    backgroundColor: '#C19F72',
    width: 250,
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
    paddingLeft: 50,
    alignItems: 'center',
  },
});
