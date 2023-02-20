import React, { useState, useCallback } from 'react';
import Userfront from '@userfront/core';
import {
  Text,
  SafeAreaView,
  TextInput,
  View,
  Button,
  StyleSheet,
  Pressable,
} from 'react-native';
import * as SecureStore from 'expo-secure-store';
import { useForm, Controller } from 'react-hook-form';
import Alert from './Alert';
import DropDownPicker from 'react-native-dropdown-picker';
import CardView from './CardView';
import { LinearGradient } from 'expo-linear-gradient';

const Home = ({ route }) => {
  const [kategoriOpen, setkategoriOpen] = useState(false);
  const [nama, setNama] = React.useState(null);
  const [harga, setHarga] = React.useState(null);
  const [alert, setAlert] = React.useState();
  const [kategoriSelected, setkategoriSelected] = React.useState();
  const [kategori, setkategori] = useState([
    { label: 'Makanan', value: 'Makanan' },
    { label: 'Tagihan', value: 'Tagihan' },
    { label: 'Pulsa HP', value: 'Pulsa' },
    { label: 'Belanja', value: 'Belanja' },
    { label: 'Lainnya', value: 'Other' },
  ]);

  const handleSuccess = async (res) => {
    setHarga(null);
    setHarga(null);
    setkategori(null);
    console.log(res);

    // Set the access token
    await SecureStore.setItemAsync(`access_demo1234`, res.tokens.access.value);

    // To read the access token (in the future)
    // await SecureStore.getItemAsync(`access_demo1234`);

    // Redirect as desired, see https://reactnative.dev/docs/navigation#react-navigation
  };

  // Handle the form submission by calling Userfront.signup()
  const handleSubmit = async () => {
    // Reset the alert to empty
    setAlert(null);
    // Verify that the passwords match
    try {
      // Call Userfront.signup()
      const res = await Userfront.signup({
        nama,
        kategoriSelected,
        harga,
        redirect: false,
      });
      handleSuccess(res);
    } catch (error) {
      console.log(error);
      setAlert(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Hi,{route.params.paramKey}</Text>
      <SafeAreaView>
        <LinearGradient
          colors={['#5FC5BF', '#11BECE']}
          style={styles.containerlinear}
          start={{ x: 0, y: 0 }}
          end={{ x: 0.5, y: 0.8 }}>
          <Alert message={alert} />
          <TextInput
            style={styles.input}
            onChangeText={setNama}
            value={nama}
            placeholder="Nama Item"
            keyboardType="text"
            textContentType="text"
          />
          <View style={styles.dropdown}>
            <DropDownPicker
              open={kategoriOpen}
              setOpen={setkategoriOpen}
              items={kategori}
              placeholder="Select Kategori"
              containerStyle={{ height: 40 }}
              // onChangeItem={item => console.log(item.label, item.value)}
              zIndex={9000}
              zIndexInverse={6000}
              setValue={setkategoriSelected}
            />
          </View>
          <TextInput
            style={styles.input}
            onChangeText={setHarga}
            value={harga}
            placeholder="Harga"
            textContentType="number"
          />
          <Button style={styles.button} onPress={handleSubmit }zIndex={10}>
            <Text style={styles.btntext}>TAMBAH BARANG</Text>
          </Button>
        </LinearGradient>
        <CardView title="Keramik" number="2.000.000" />
        <CardView title="Sarapan" number="15.000" />
        <CardView title="Kopi" number="21.000" />
        <CardView title="Bensin" number="50.000" />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 0,
    backgroundColor: '#FFF',
  },
  containerlinear: {
    padding: 40,
  },
  paragraph: {
    marginBottom: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textcard: {
    fontSize: 15,
    // fontWeight: 'bold',
    // textAlign: 'center',
  },
  bgcard: {
    backgroundColor: '#F7F7F7',
    // alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    marginTop: 24,
    marginBottom: 24,
  },
  input: {
    height: 40,
    marginBottom: 24,
    padding: 8,
    borderWidth: 0,
    borderRadius: 5,
    backgroundColor: '#F7F7F7',
  },
  button: {
    padding: 8,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 5,
    backgroundColor: '#0E8B8B',
  },
  btntext: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  dropdown: {
    width: '100%',
    marginBottom: 24,
    borderRadius: 5,
    borderWidth: 0,
  },
});

export default Home;
