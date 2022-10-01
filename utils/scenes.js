import sig_2_1 from '../assets/sigururi/sig-2-1.jpg';
import sig_2_2 from '../assets/sigururi/sig-2-2.jpg';
import sig_3_1 from '../assets/sigururi/sig-3-1.jpg';
import sig_3_2 from '../assets/sigururi/sig-3-2.jpg';
import sig_4_2 from '../assets/sigururi/sig-4-2.jpg';
import sig_5_1 from '../assets/sigururi/sig-5-1.jpg';
import sig_5_2 from '../assets/sigururi/sig-5-2.jpg';
import sig_6_1 from '../assets/sigururi/sig-6-1.jpg';
import sig_6_2 from '../assets/sigururi/sig-6-2.jpg';
import sig_8_1 from '../assets/sigururi/sig-8-1.jpg';
import sig_8_2 from '../assets/sigururi/sig-8-2.jpg';
import sig_9_1 from '../assets/sigururi/sig-9-1.jpg';
import sig_9_2 from '../assets/sigururi/sig-9-2.jpg';
import sig_10_1 from '../assets/sigururi/sig-10-1.jpg';
import sig_10_2 from '../assets/sigururi/sig-10-2.jpg';
import sig_11_1 from '../assets/sigururi/sig-11-1.jpg';

const SIGURURI_SCENES = [
  {
    title: 'アイキャッチ 2-1',
    src: sig_2_1,
  },
  {
    title: 'アイキャッチ 2-2',
    src: sig_2_2,
  },
  {
    title: 'アイキャッチ 3-1',
    src: sig_3_1,
  },
  {
    title: 'アイキャッチ 3-2',
    src: sig_3_2,
  },
  {
    title: 'アイキャッチ 4-2',
    src: sig_4_2,
  },
  {
    title: 'アイキャッチ 5-1',
    src: sig_5_1,
  },
  {
    title: 'アイキャッチ 5-2',
    src: sig_5_2,
  },
  {
    title: 'アイキャッチ 6-1',
    src: sig_6_1,
  },
  {
    title: 'アイキャッチ 6-2',
    src: sig_6_2,
  },
  {
    title: 'アイキャッチ 8-1',
    src: sig_8_1,
  },
  {
    title: 'アイキャッチ 8-2',
    src: sig_8_2,
  },
  {
    title: 'アイキャッチ 9-1',
    src: sig_9_1,
  },
  {
    title: 'アイキャッチ 9-2',
    src: sig_9_2,
  },
  {
    title: 'アイキャッチ 10-1',
    src: sig_10_1,
  },
  {
    title: 'アイキャッチ 10-2',
    src: sig_10_2,
  },
  {
    title: 'アイキャッチ 11-1',
    src: sig_11_1,
  },
];

const SCENE_GROUPS = [{
  title: '戦翼のシグルドリーヴァ',
  scenes: SIGURURI_SCENES,
}];

const ALL_IMAGES = SCENE_GROUPS.reduce((acc, cur) => acc.concat(cur.scenes.map(item => item.src)), []);

export {
  SCENE_GROUPS,
  ALL_IMAGES,
};
