import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Link } from "expo-router";

export default function SceneGroup({ group }: { group: string }) {
  return (
    <Link href={`/scenes/${group}`} asChild>
      <TouchableOpacity style={styles.group}>
        <Text style={styles.title}>{group}</Text>
      </TouchableOpacity>
    </Link>
  );
}

const styles = StyleSheet.create({
  group: {
    backgroundColor: "#fafafa",
    padding: 20,
    borderRadius: 10,
    marginBottom: 8,
  },
  title: {
    fontSize: 20,
    color: "#223",
    fontWeight: "bold",
  },
});
