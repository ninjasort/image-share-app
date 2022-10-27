import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, TouchableOpacity, Text, View } from 'react-native';
import { styles } from './styles';
import { openImagePickerAsync } from './components/image-picker';

export default function App() {

  const [selectedImage, setImage] = React.useState(null);

  if (selectedImage !== null) {
    return (
      <View style={styles.container}>
        <Image
          source={{ uri: selectedImage.localUri }}
          style={styles.thumbnail} />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Image source={{uri: 'https://i.imgur.com/TkIrScD.png'}} style={styles.logo} />
      <Text style={styles.instructions}>
        To share a photo from your phone with a friend, just press the button below!
      </Text>
      <TouchableOpacity
        onPress={() => { openImagePickerAsync((obj) => { setImage(obj) }) } }
        style={styles.button}>
        <Text style={styles.buttonText}>Pick a photo</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}
