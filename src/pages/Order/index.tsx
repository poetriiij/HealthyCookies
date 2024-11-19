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
import React, { useState } from 'react';
import { Gap } from '../../components';
import { database } from '../../../config/firebase'; 
import { ref, set } from 'firebase/database'; 

const Order = ({ navigation }) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [details, setDetails] = useState('');
  const [deliveryDate, setDeliveryDate] = useState('');
  const [phone, setPhone] = useState('');

  const handleOrder = async () => {  // Tambahkan async di sini
    try {
      const orderData = {
        name,
        address,
        details,
        deliveryDate,
        phone,
        createdAt: new Date().toISOString()
      };

      const orderRef = ref(database, `orders/${phone}`);
      await set(orderRef, orderData);
      
      alert('Pesanan Anda telah disimpan!');
      navigation.navigate('Thankyou');
    } catch (error) {
      console.error('Error saving order:', error);
      alert('Gagal menyimpan pesanan: ' + error.message);
    }
  };


  return (
    <ScrollView
      style={styles.wrapcontainer}
      contentContainerStyle={styles.contentContainer}>
      <Image
        source={require('../../assets/icon/Order.png')}
        style={styles.image}
        resizeMode="contain"
      />
      <View style={styles.box}>
        <Text style={styles.text}>Nama Lengkap</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Masukkan nama lengkap"
          value={name}
          onChangeText={setName}
        />
        <Gap height={13} />
        <Text style={styles.text}>Alamat Tempat Pengantaran</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Masukan alamat anda"
          value={address}
          onChangeText={setAddress}
        />
        <Gap height={13} />
        <Text style={styles.text}>Detail Pesanan</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Detail jam atau note tambahan"
          value={details}
          onChangeText={setDetails}
        />
        <Gap height={13} />
        <Text style={styles.text}>Tanggal Pengantaran</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Kapan akan dikirim"
          value={deliveryDate}
          onChangeText={setDeliveryDate}
        />
        <Gap height={13} />
        <Text style={styles.text}>Nomor Handphone</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Masukkan nomor hp anda"
          value={phone}
          onChangeText={setPhone}
        />
        <Gap height={25} />
        <View style={styles.buttoncontainer}>
          <TouchableOpacity style={styles.button} onPress={handleOrder}>
            <Text style={styles.textbutton}>Order</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Order;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapcontainer: {
    flex: 1,
    backgroundColor: '#ffff',
  },
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 80,
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
    width: 400,
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 10,
    bottom: 80,
  },
  textInput: {
    height: 55,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: '#D9D9D9',
  },
  button: {
    backgroundColor: '#C19F72',
    width: 135,
    height: 45,
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
    alignItems: 'center',
  },
});
