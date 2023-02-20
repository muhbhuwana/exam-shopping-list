import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  SafeAreaView,
  Pressable,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import CardView from './CardView';

const Welcome = ({ navigation }) => {
  const [text, onChangeText] = React.useState('');
  const [number, onChangeNumber] = React.useState('');

  return (
    <LinearGradient
      colors={['#5FC5BF', '#11BECE']}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 0.5, y: 0.8 }}>
      <Text numberOfLines={5} style={styles.textjudul}>
        Hi, Silahkan masukkan nama anda
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Nama"
        keyboardType="text"
      />
      <Pressable
        title="SIMPAN NAMA"
        style={styles.button}
        //Button Title
        onPress={() =>
          navigation.navigate('Home', {
            paramKey: text,
          })
        }>
        <Text style={styles.btntext}>SIMPAN NAMA</Text>
      </Pressable>
    </LinearGradient>
  ); 
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 50,
    width: 320,
    margin: 15,
    borderWidth: 0,
    padding: 10,
    backgroundColor: '#F7F7F7',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  button: {
    height: 50,
    width: 320,
    margin: 15,
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
  textjudul: {
    fontSize: 14,
    lineHeight: 21,
    fontWeight: 'normal',
    letterSpacing: 0.25,
    color: 'white',
  },
});

export default Welcome;
