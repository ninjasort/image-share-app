import { Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Sharing from 'expo-sharing';
import * as ImageManipulator from 'expo-image-manipulator';

export const openImagePickerAsync = async (cb) => {
  let pickerResult = await ImagePicker.launchImageLibraryAsync();

  if (pickerResult.cancelled === true) {
    return;
  }
  return cb({
    localUri: pickerResult.uri
  });
}

export const openShareDialogAsync = async (imgUri) => {
  if (Platform.OS === 'web') {
    alert('Sharing is not available on web');
    return;
  }
  const imageTmp = await ImageManipulator.manipulateAsync(imgUri);
  await Sharing.shareAsync(imageTmp.uri);
}
