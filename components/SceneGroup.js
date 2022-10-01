import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import SceneRow from './SceneRow';

const SceneGroup = ({ title, scenes, selectScene }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.expander} onPress={() => setExpanded(!expanded)}>
        <Text style={styles.title}>{title}</Text>
        {expanded ? (
          <View style={styles.expanderContent}>
            {scenes.map(({ title, src }) => (
              <SceneRow key={src} title={title} src={src} selectScene={selectScene} />
            ))}
          </View>
        ) : null}
      </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  expander: {
    backgroundColor: '#efefef',
    padding: 20,
    borderRadius: 10,
    zIndex: 1,
  },
  expanderContent: {
    marginTop: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default SceneGroup;
