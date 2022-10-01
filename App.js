import { Asset } from 'expo-asset';
import * as ScreenOrientation from 'expo-screen-orientation';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback, useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import CameraPage from './pages/CameraPage';
import ScenesPage from './pages/ScenesPage';
import { ALL_IMAGES } from './utils/scenes';

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [scene, setScene] = useState(null);

  const cacheResources = async () => {
    const cacheImages = ALL_IMAGES.map(image => Asset.fromModule(image).downloadAsync());
    return Promise.all(cacheImages);
  };

  useEffect(() => {
    const lockOrientation = async () => {
      await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT);
    };
    const loadResources = async () => {
      await SplashScreen.preventAutoHideAsync();
      await cacheResources();
      setIsLoaded(true);
    };

    lockOrientation();
    loadResources();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (isLoaded) await SplashScreen.hideAsync();
  }, [isLoaded]);

  if (!isLoaded) return null;

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      {scene ? (
        <CameraPage src={scene} onBack={() => setScene(null)} />
      ) : (
        <ScenesPage selectScene={setScene} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
