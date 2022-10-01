import { Camera } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import { useEffect, useRef } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const CameraPage = ({ src, onBack }) => {
  const cameraRef = useRef(null);
  const [permission, requestPermission] = Camera.useCameraPermissions();

  useEffect(() => {
    if (permission && !permission.granted) {
      requestPermission();
    }
  })

  if (!permission) {
    return <Text>Nope</Text>;
  }

  const takePicture = async () => {
    const { uri } = await cameraRef.current.takePictureAsync();
    MediaLibrary.saveToLibraryAsync(uri);
  }

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} ref={cameraRef}>
        <TouchableOpacity onPress={takePicture}>
          <Image source={src} style={styles.image} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.back} onPress={onBack}>
          <Text style={styles.arrow}>←</Text>
        </TouchableOpacity>
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  container:  {
    flex: 1,
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
  },
  back: {
    position: 'absolute',
    bottom: 0,
    width: 60,
    height: 60,
    margin: 10,
    borderRadius: 30,
    backgroundColor: '#fff',
    opacity: 0.7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrow: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  image: {
    width: '100%',
    height: '100%',
    opacity: 0.4,
    resizeMode: 'contain',
  },
});

export default CameraPage;
