import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import React from 'react';
import {Gap} from '../../components';

const Op = ({navigation}) => {
  return (
    <ScrollView
      style={styles.wrapcontainer}
      contentContainerStyle={styles.contentContainer} // Tambahkan ini
    >
      <Image
        source={require('../../assets/icon/Grainjoy.png')}
        style={styles.image}
        resizeMode="contain"
      />
      <Gap height={25} />
      <Text style={styles.box}>
        <Text style={styles.text}>
          {`Bahan-Bahan Utama: 
1. Tepung Gandum Utuh 
2. Oatmeal 
3. Minyak Kelapa Murni 
4. Gula Kelapa 
5. Telur Organik 
6. Baking Soda 
7. Vanilla Extract 
8. Garam Laut Halus

Kandungan Gizi Per 100 Gram:
• Kalori: 150 kkal
• Protein: 4 g
• Karbohidrat: 22 g
• Serat: 5 g
• Gula: 6 g
• Lemak: 5 g
• Zat Besi: 10% dari kebutuhan harian
• Magnesium: 12% dari kebutuhan harian`}
        </Text>
      </Text>

      <Image
        source={require('../../assets/icon/Grainjoy.png')}
        style={styles.image}
        resizeMode="contain"
      />
    </ScrollView>
  );
};

export default Op;

const styles = StyleSheet.create({
  wrapcontainer: {
    flex: 1,
    backgroundColor: '#ffff',
  },
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  image: {
    width: 500,
    height: 450,
    resizeMode: 'contain',
  },
  text: {
    fontSize: 12,
    fontWeight: '600',
    color: '#000',
    textAlign: 'left',
    paddingLeft:10,
  },
  box: {
    backgroundColor: '#FFEBD0',
    width: 300,
    height: 300,
    borderRadius: 10,
    textAlign: 'left',
    justifyContent: 'center',
    paddingVertical:10,
    paddingHorizontal:20,
  },
});
