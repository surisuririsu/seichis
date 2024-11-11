import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { Link } from "expo-router";

const SceneRow = ({
  title,
  src,
}: {
  title: string;
  src: ImageSourcePropType;
}) => {
  return (
    <Link
      href={{
        pathname: "./[title]",
        params: { title },
      }}
      asChild
    >
      <TouchableOpacity style={styles.scene}>
        <Image source={src} style={styles.image} />
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    </Link>
  );
};

const styles = StyleSheet.create({
  scene: {
    height: 60,
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    height: "100%",
    width: undefined,
    aspectRatio: 16 / 9,
  },
  title: {
    fontWeight: "bold",
    flex: 1,
    flexWrap: "wrap",
    marginHorizontal: 8,
  },
});

export default SceneRow;
