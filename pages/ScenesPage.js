import { StyleSheet, ScrollView } from 'react-native';
import SceneGroup from '../components/SceneGroup';
import { SCENE_GROUPS } from '../utils/scenes';

const ScenesPage = ({ selectScene }) => {
  return (
    <ScrollView style={styles.container}>
      {SCENE_GROUPS.map(({ title, scenes }) => (
        <SceneGroup key={title} title={title} scenes={scenes} selectScene={selectScene} />
      ))}
    </ScrollView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ScenesPage;
