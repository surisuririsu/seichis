import { ScrollView } from "react-native";
import { Stack, useLocalSearchParams } from "expo-router";
import SceneRow from "@/components/SceneRow";
import SCENE_GROUPS from "@/scenes/imports";

export default function IndexScreen() {
  const local = useLocalSearchParams();
  const group = SCENE_GROUPS[local.group];

  return (
    <>
      <Stack.Screen options={{ title: `${local.group}` }} />
      <ScrollView>
        {Object.keys(group).map((title) => (
          <SceneRow key={title} title={title} src={group[title]} />
        ))}
      </ScrollView>
    </>
  );
}
