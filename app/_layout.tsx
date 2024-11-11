import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { Asset } from "expo-asset";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import { ALL_IMAGES } from "@/utils/images";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  const cacheResources = async () => {
    const cacheImages = ALL_IMAGES.map((image) =>
      Asset.fromModule(image).downloadAsync()
    );
    return Promise.all(cacheImages);
  };

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
      cacheResources();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={DefaultTheme}>
      <Stack>
        <Stack.Screen name="index" />
      </Stack>
    </ThemeProvider>
  );
}
