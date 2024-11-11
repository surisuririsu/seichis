import { Stack } from "expo-router";
import { StyleSheet, ScrollView } from "react-native";
import SceneGroup from "@/components/SceneGroup";
import { SCENE_GROUPS } from "@/utils/scenes";

export default function IndexScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "セイチズ" }} />
      <ScrollView style={styles.container}>
        {SCENE_GROUPS.map((group) => (
          <SceneGroup key={group} group={group} />
        ))}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});
