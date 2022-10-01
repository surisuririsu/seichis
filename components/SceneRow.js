import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const SceneRow = ({ title, src, selectScene }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => selectScene(src)}>
      <Image source={src} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    height: '100%',
    width: undefined,
    aspectRatio: 16 / 9,
    marginRight: 10,
  },
  title: {
    fontWeight: 'bold',
  },
});

export default SceneRow;
