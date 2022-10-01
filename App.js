import * as ScreenOrientation from 'expo-screen-orientation';
import { useEffect } from 'react';
import CameraPage from './pages/CameraPage';

export default function App() {
  useEffect(() => {
    async function init() {
      await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT);
    }
    init();
  }, []);

  return (
    <CameraPage />
  );
};
