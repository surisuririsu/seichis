import { ScrollView } from "react-native";
import { Stack, useLocalSearchParams } from "expo-router";
import SceneRow from "@/components/SceneRow";
import { SCENES_BY_GROUP } from "@/utils/scenes";

export default function IndexScreen() {
  const local = useLocalSearchParams();

  return (
    <>
      <Stack.Screen options={{ title: `${local.group}` }} />
      <ScrollView>
        {SCENES_BY_GROUP[local.group].map(({ title, src }) => (
          <SceneRow key={src} group={local.group} title={title} src={src} />
        ))}
      </ScrollView>
    </>
  );
}
