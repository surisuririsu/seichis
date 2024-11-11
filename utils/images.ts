import SCENE_GROUPS from "@/scenes/imports";

const ALL_IMAGES = Object.values(SCENE_GROUPS).reduce((acc, cur) => {
  return acc.concat(Object.values(cur));
}, []);

export { ALL_IMAGES };