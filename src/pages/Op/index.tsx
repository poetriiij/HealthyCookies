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
    <SafeAreaView style={styles.wrapcontainer}>
      {/* Button Home tetap statis di atas */}
      <TouchableOpacity
        style={styles.homeButton}
        onPress={() => navigation.goBack()}>
        <Text style={styles.homeButtonText}>Home</Text>
      </TouchableOpacity>

      {/* Konten Scrollable */}
      <ScrollView
        style={styles.scrollContainer}
        contentContainerStyle={styles.contentContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/icon/Grainjoy.png')}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
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
          source={require('../../assets/icon/ChocoGrainjoy.png')}
          style={styles.image}
          resizeMode="contain"
        />
        <Gap height={25} />
        <Text style={styles.box}>
          <Text style={styles.text}>
            {`Bahan-Bahan Utama: 
1. Tepung Gandum Utuh 
2. Dark Chocolate
3. Oatmeal
4. Minyak Kelapa Murni
5. Gula Kelapa
6. Telur Organik
7. Bubuk Kakao 
8. Baking Soda
9. Vanilla Extract
10. Garam Laut Halus

Kandungan Gizi Per 100 Gram:
• Kalori: 150 kkal
• Protein: 4 g
• Karbohidrat: 22 g
• Serat: 5 g
• Gula: 6 g
• Lemak: 5 g
• Antioksidan
• Zat Besi: 10% dari kebutuhan harian
• Magnesium: 12% dari kebutuhan harian`}
          </Text>
        </Text>
        <Gap height={25} />
        <Image
          source={require('../../assets/icon/PinkGrainjoy.png')}
          style={styles.image}
          resizeMode="contain"
        />
        <Gap height={25} />
        <Text style={styles.box}>
          <Text style={styles.text}>
            {`Bahan-Bahan Utama: 
1. Tepung Gandum Utuh 
2. Dark Chocolate
3. Oatmeal
4. Minyak Kelapa Murni
5. Gula Kelapa
6. Telur Organik
7. Buah Stroberi
8. Baking Soda
9. Vanilla Extract
10. Garam Laut Halus

Kandungan Gizi Per 100 Gram:
• Kalori: 150 kkal
• Protein: 4 g
• Karbohidrat: 22 g
• Serat: 5 g
• Gula: 6 g
• Lemak: 5 g
• Vitamin E & C
• Zat Besi: 10% dari kebutuhan harian
• Magnesium: 12% dari kebutuhan harian`}
          </Text>
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Op;

const styles = StyleSheet.create({
  wrapcontainer: {
    flex: 1,
    backgroundColor: '#ffff',
  },
  scrollContainer: {
    flex: 1,
  },
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 500,
    height: 450,
    resizeMode: 'contain',
  },
  homeButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: '#FFEBD0',
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    zIndex: 10, // Agar tombol berada di atas semua elemen
  },
  homeButtonText: {
    color: '#000',
    fontWeight: '600',
    fontSize: 14,
  },
  text: {
    fontSize: 12,
    fontWeight: '600',
    color: '#000',
    textAlign: 'left',
    paddingBottom: 10,
  },
  box: {
    backgroundColor: '#FFEBD0',
    width: 300,
    height: 315,
    borderRadius: 10,
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});
