import G6 from '@antv/g6';

G6.Util.isArray('arr');

const graph = new G6.Graph({
  container: 'root',
  width: 200,
  height: 200,
});

const treeGraph = new G6.TreeGraph({
  container: 'root',
  width: 200,
  height: 200,
});
