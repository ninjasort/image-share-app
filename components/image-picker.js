import * as ImagePicker from 'expo-image-picker';

export const openImagePickerAsync = async (cb) => {
  let pickerResult = await ImagePicker.launchImageLibraryAsync();

  if (pickerResult.cancelled === true) {
    return;
  }
  return cb({
    localUri: pickerResult.uri
  });
}
