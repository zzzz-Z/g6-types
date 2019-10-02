declare module '@antv/g6' {
  namespace G6 {
    /**
     * 元素类型
     */
    type ElementType = 'node' | 'edge';

    interface GraphOptions {
      /**
       * 图的 DOM 容器，可以传入该 DOM 的 id 或者直接传入容器的 HTML 节点对象
       */
      container: string | HTMLElement;
      /**
       * 指定画布宽度，单位为 'px'
       */
      width: number;
      /**
       * 指定画布高度，单位为 'px'
       */
      height: number;
      /**
       * 渲染引擎，支持canvas和svg。
       */
      renderer?: 'canvas' | 'svg';

      /**
       * 图适应画布时，指定四周的留白。
       * 可以是一个值, 例如：fitViewPadding: 20
       * 也可以是一个数组，例如：fitViewPadding: [20, 40, 50,20]
       * 当指定一个值时，四边的边距都相等，当指定数组时，数组内数值依次对应 上，右，下，左四边的边距。
       */
      fitViewPadding?: number[] | number;
      /**
       * 各种元素是否在一个分组内，决定节点和边的层级问题，默认情况下所有的节点在一个分组中，所有的边在一个分组中，当这个参数为 false 时，节点和边的层级根据生成的顺序确定。
       * 默认值：true
       */
      groupByTypes?: boolean;

      /**
       * 当图中元素更新，或视口变换时，是否自动重绘。建议在批量操作节点时关闭，以提高性能，完成批量操作后再打开，参见后面的 setAutoPaint() 方法。
       * 默认值：true
       */
      autoPaint?: boolean;

      /**
       * 设置画布的模式。详情可见G6中的Mode文档。
       */
      modes?: any[];

      /**
       * 各个状态下节点的样式，对 G6 内置节点有效。
       */
      nodeStyle?: any;

      /**
       * 各个状态下边的样式，对 G6 内置边有效。
       */
      edgeStyle?: any;

      /**
       * 默认状态下节点的配置，比如 shape, size, color。会被写入的 data 覆盖。
       */
      defaultNode?: any;

      /**
       * 默认状态下边的配置，比如 shape, size, color。会被写入的 data 覆盖。
       */
      defaultEdge?: any;
      /**
       * 向 graph 注册插件。插件机制请见：plugin
       */
      plugins?: any[];
      /**
       * 是否启用全局动画。
       */
      animate?: boolean;

      /**
       * 动画配置项，仅在animate为true时有效。
       */
      animateCfg?: {
        /**
         * 回调函数，用于自定义节点运动路径。
         */
        onFrame?: Function | null;
        /**
         * 动画时长，单位为毫秒。
         */
        duration?: number;
        /**
         * 动画动效。
         * 默认值：easeLinear
         */
        easing?: string;
      };
      /**
       * 最小缩放比例
       * 默认值 0.2
       */
      minZoom?: number;
      /**
       * 最大缩放比例
       * 默认值 10
       */
      maxZoom?: number;
      /**
       * 像素比率
       * 默认值 1.0
       */
      pixelRatio?: number;
    }
    /**
     * Graph Class
     */
    export class Graph {
      constructor(options: GraphOptions);

      /**
       * 获取指定配置项的值
       * @param key 配置项名称，只支持第一层级
       */
      get(key: string): any;

      /**
       * 设置指定配置项的值
       * @param key
       * @param val
       */
      set(key: string, val: any): this;

      /**
       * 更新元素
       * @param {string|object} item 元素id或元素实例
       * @param {object} cfg 需要更新的数据
       */
      updateItem(item: any, cfg: any): void;

      /**
       * 设置元素状态
       * @param {string|object} item 元素id或元素实例
       * @param state 状态
       * @param enabled 是否启用状态
       */
      setItemState(item: any, state: string, enabled: boolean): void;

      /**
       * 清理元素多个状态
       * @param {string|object} item 元素id或元素实例
       * @param states 状态
       */
      clearItemStates(item: any, states: string[] | string | null): void;

      /**
       * 新增元素
       * @param type 元素类型(node | edge)
       * @param {object} model 元素数据模型
       * @return {object} 元素实例
       */
      add(type: ElementType, model: any): void;

      /**
       * 新增元素 或 节点分组
       * @param {string} type 元素类型(node | edge | group)
       * @param {object} model 元素数据模型
       * @return {object} 元素实例
       */
      addItem(type: ElementType | 'group', model: any): any;

      /**
       * 删除元素
       * @param {string|object} item 元素id或元素实例
       */
      remove(item: string | object): void;

      /**
       * 删除元素
       * @param {string|object} item 元素id或元素实例
       */
      removeItem(item: string | object): void;

      /**
       * 设置视图初始化数据
       * @param {object} data 初始化数据
       */
      data(data: any): any;

      /**
   * 设置各个节点样式，以及在各种状态下节点 keyShape 的样式。
   * 若是自定义节点切在各种状态下
   * graph.node(node => {
   *  return {
   *    {
          shape: 'rect',
          label: node.id,
          style: { fill: '#666' },
          stateStyles: {
            selected: { fill: 'blue' },
            custom: { fill: 'green' }
          }
        }
   *  }
   * });
   * @param {function} nodeFn 指定每个节点样式
   */
      node(nodeFn: Function): void;

      /**
       * 设置各个边样式
       * @param {function} edgeFn 指定每个边的样式,用法同 node
       */
      edge(edgeFn: Function): any;

      /**
       * 刷新元素
       * @param {string|object} item 元素id或元素实例
       */
      refreshItem(item: string | object): void;

      /**
       * 当源数据在外部发生变更时，根据新数据刷新视图。但是不刷新节点位置
       */
      refresh(): void;

      /**
       * 当节点位置在外部发生改变时，刷新所有节点位置，重计算边
       */
      refreshPositions(): void;

      /**
       * 根据data接口的数据渲染视图
       */
      render(): void;

      /**
       * 根据数据渲染群组
       * @param {object} data 渲染图的数据
       * @param {string} groupType group类型
       */
      renderCustomGroup(data: any, groupType: string): any;

      /**
       * 接收数据进行渲染
       * @Param {Object} data 初始化数据
       */
      read(data: any): void;

      /**
       * 更改源数据，根据新数据重新渲染视图
       * @param {object} data 源数据
       * @return {object} this
       */
      changeData(data: any): this;

      /**
       * 仅画布重新绘制
       */
      paint(): void;

      /**
       * 导出图数据
       * @return {object} data
       */
      save(): any;

      /**
       * 改变画布大小
       * @param  {number} width  画布宽度
       * @param  {number} height 画布高度
       * @return {object} this
       */
      changeSize(width: number, height: number): this;

      /**
       * 平移画布
       * @param {number} dx 水平方向位移
       * @param {number} dy 垂直方向位移
       */
      translate(dx: number, dy: number): void;

      /**
       * 平移画布到某点
       * @param {number} x 水平坐标
       * @param {number} y 垂直坐标
       */
      moveTo(x: number, y: number): void;

      /**
       * 调整视口适应视图
       * @param {object} padding 四周围边距
       */
      fitView(padding: any): void;

      /**
       * 新增行为
       * @param {string|array} behaviors 添加的行为
       * @param {string|array} modes 添加到对应的模式
       * @return {object} this
       */
      addBehaviors(behaviors: string | string[], modes: string | string[]): this;

      /**
       * 移除行为
       * @param {string|array} behaviors 移除的行为
       * @param {string|array} modes 从指定的模式中移除
       * @return {object} this
       */
      removeBehaviors(behaviors: string | string[], modes: string | string[]): this;

      /**
       * 切换行为模式
       * @param {string} mode 指定模式
       * @return {object} this
       */
      setMode(mode: string): this;

      /**
       * 获取当前的行为模式
       * @return {string} 当前行为模式
       */
      getCurrentMode(): string;

      /**
       * 获取当前视口伸缩比例
       * @return {number} 比例
       */
      getZoom(): number;

      /**
       * 获取当前图中所有节点的item实例
       * @return {array} item数组
       */
      getNodes(): any[];

      /**
       * 获取当前图中所有边的item实例
       * @return {array} item数组
       */
      getEdges(): any[];

      /**
       * 伸缩视口
       * @param {number} ratio 伸缩比例
       * @param {object} center 以center的x, y坐标为中心缩放
       */
      zoom(ratio: number, center: object): void;

      /**
       * 伸缩视口到一固定比例
       * @param {number} toRatio 伸缩比例
       * @param {object} center 以center的x, y坐标为中心缩放
       */
      zoomTo(toRatio: number, center: object): void;

      /**
       * 根据 graph 上的 animateCfg 进行视图中节点位置动画接口
       */
      positionsAnimate(): void;

      stopAnimate(): void;

      isAnimating(): boolean;

      /**
       * 将元素移动到视口中心
       * @param {string|object} item 指定元素
       */
      focusItem(item: string | object): void;

      /**
       * 将屏幕坐标转换为视口坐标
       * @param {number} clientX 屏幕x坐标
       * @param {number} clientY 屏幕y坐标
       * @return {object} 视口坐标
       */
      getPointByClient(clientX: number, clientY: number): any;

      /**
       * 将视口坐标转换为屏幕坐标
       * @param {number} x 视口x坐标
       * @param {number} y 视口y坐标
       * @return {object} 视口坐标
       */
      getClientByPoint(x: number, y: number): any;

      /**
       * 将画布坐标转换为视口坐标
       * @param {number} canvasX 屏幕x坐标
       * @param {number} canvasY 屏幕y坐标
       * @return {object} 视口坐标
       */
      getPointByCanvas(canvasX: number, canvasY: number): any;

      /**
       * 将视口坐标转换为画布坐标
       * @param {number} x 屏幕x坐标
       * @param {number} y 屏幕y坐标
       * @return {object} 画布坐标
       */
      getCanvasByPoint(x: number, y: number): any;

      /**
       * 显示元素
       * @param {string|object} item 指定元素
       */
      showItem(item: string | object): void;

      /**
       * 隐藏元素
       * @param {string|object} item 指定元素
       */
      hideItem(item: string | object): void;

      /**
       * 查找对应id的元素
       * @param {string} id 元素id
       * @return {object} 元素实例
       */
      findById(id: string): any;

      /**
       * 根据对应规则查找单个元素
       * @param {string} type 元素类型(node|edge)
       * @param {string} fn 指定规则
       * @return {object} 元素实例
       */
      find(type: ElementType, fn: Function): any;

      /**
       * 查找所有满足规则的元素
       * @param {string} type 元素类型(node|edge)
       * @param {string} fn 指定规则
       * @return {array} 元素实例
       */
      findAll(type: ElementType, fn: Function): any;

      /**
       * 查找所有处于指定状态的元素
       * @param {string} type 元素类型(node|edge)
       * @param {string} state z状态
       * @return {object} 元素实例
       */
      findAllByState(type: ElementType, state: string): any;

      /**
       * 设置是否在更新/刷新后自动重绘
       * @param {boolean} auto 自动重绘
       */
      setAutoPaint(auto: boolean): void;

      /**
       * 返回图表的 dataUrl 用于生成图片
       * @return {string/Object} 图片 dataURL
       */
      toDataURL(): string | object;
      /**
       * 画布导出图片
       * @param {String} name 图片的名称
       */
      downloadImage(name: string): void;
      /**
       * 添加插件
       * @param {object} plugin 插件实例
       */
      addPlugin(plugin: any): void;

      /**
       * 添加插件
       * @param {object} plugin 插件实例
       */
      removePlugin(plugin: any): void;

      /**
       * 更换布局配置项
       * @param {object} cfg 新布局配置项
       * 若 cfg 含有 type 字段或为 String 类型，且与现有布局方法不同，则更换布局
       * 若 cfg 不包括 type ，则保持原有布局方法，仅更新布局配置项
       */
      updateLayout(cfg: any): void;

      /**
       * 重新以当前示例中配置的属性进行一次布局
       */
      layout(): void;

      /**
       * 清除画布元素
       * @return {object} this
       */
      clear(): this;

      /**
       * 销毁画布
       */
      destroy(): void;

      // group 相关方法
      /**
       * 收起分组
       * @param {string} groupId 分组ID
       */
      collapseGroup(groupId: string): void;

      /**
       * 展开分组
       * @param {string} groupId 分组ID
       */
      expandGroup(groupId: string): void;
    }

    interface TreeGraphOptions extends GraphOptions {
      /**
       * 默认打开重布局动画开关。
       * 默认值：true
       */
      animate?: boolean;

      layout?: {
        /**
         * 布局类型
         */
        type: 'dendrogram' | 'compactBox' | 'mindmap' | 'indeted';
        /**
         * 是否进行极坐标映射
         */
        radial?: boolean;
        /**
         * 布局方向。有 LR , RL , TB , BT , H , V 可选。
         * L: 左； R: 右； T: 上； B：下； H: 垂直； V: 水平。
         */
        direction?: 'LR' | 'RL' | 'TB' | 'BT' | 'H' | 'V';
        /**
         * 定制节点 id
         */
        getId?: (node: Node) => string;
        /**
         * 返回当前节点的所有子节点
         */
        getChildren?: (node: Node) => void;

        /**
         * 指定当前节点的水平间距
         * 默认值：20
         */
        getHGap?: (node: Node) => number;

        /**
         * 指定当前节点的垂直间距
         * 默认值：20
         */
        getVGap?: (node: Node) => number;
        /**
         * 指定当前节点宽度
         */
        getWidth?: (node: Node) => number;
        /**
         * 指定当前节点高度
         */
        getHeight?: (node: Node) => number;
      };
      /**
       * Edge 是否连接到节点中间
       */
      linkCenter?: boolean;
    }
    /**
     * TreeGraph Class
     */
    export class TreeGraph extends Graph {
      getDefaultCfg(): Partial<TreeGraphOptions>;

      /**
       * 添加子树到对应 id 的节点
       * @param {object} data 子树数据模型
       * @param {string} parent 子树的父节点id
       */
      addChild(data: any, parent: string): void;

      /**
       * 更新源数据，差量更新子树
       * @param {object} data 子树数据模型
       * @param {string} parent 子树的父节点id
       */
      updateChild(data: any, parent: string): void;

      /**
       * 删除子树
       * @param {string} id 子树根节点id
       */
      removeChild(id: string): void;

      /**
       * 根据id获取对应的源数据
       * @param {string|object} id 元素id
       * @param {object} parent 从哪个节点开始寻找，为空时从根节点开始查找
       * @return {object} 对应源数据
       */
      findDataById(id: string | object, parent?: object): any;

      /**
       * 更改并应用树布局算法
       * @param {object} layout 布局算法
       */
      changeLayout(layout: object): void;

      /**
       * 根据目前的 data 刷新布局，更新到画布上。用于变更数据之后刷新视图。
       * @param {boolean} fitView 更新布局时是否需要适应窗口
       */
      refreshLayout(fitView: boolean): void;

      /**
       * 布局动画接口，用于数据更新时做节点位置更新的动画
       * @param {object} data 更新的数据
       * @param {function} onFrame 定义节点位置更新时如何移动
       */
      layoutAnimate(data: any, onFrame: Function): void;

      /**
       * 立即停止布局动画
       */
      stopLayoutAnimate(): void;

      /**
       * 是否在布局动画
       * @return {boolean} 是否有布局动画
       */
      isLayoutAnimating(): boolean;
    }

    /**
     * Util
     */
    interface Util {}
    export const Util: Util;

    export const G: any;

    /**
     * Global
     */
    interface Global {
      /**
       * 只读，版本号
       */
      readonly version: string;

      /**
       * 根容器类名
       */
      rootContainerClassName: string;

      /**
       * 节点容器类名
       */
      nodeContainerClassName: string;

      /**
       * 连接线容器类名
       */
      edgeContainerClassName: string;

      /**
       * 自定义组容器类名
       */
      customGroupContainerClassName: string;

      /**
       * 委托容器类名
       */
      delegateContainerClassName: string;
      defaultNode: {
        shape: 'circle';
        style: {
          fill: '#fff';
        };
        size: 40;
        color: '#333';
      };
      defaultEdge: {
        shape: 'line';
        style: {};
        size: 1;
        color: '#333';
      };
      nodeLabel: {
        style: {
          fill: '#595959';
          textAlign: 'center';
          textBaseline: 'middle';
        };
        offset: 5; // 节点的默认文本不居中时的偏移量
      };
      edgeLabel: {
        style: {
          fill: '#595959';
          textAlign: 'center';
          textBaseline: 'middle';
        };
      };
      // 节点应用状态后的样式，默认仅提供 active 和 selected 用户可以自己扩展
      nodeStateStyle: {
        active: {
          fillOpacity: 0.8;
        };
        selected: {
          lineWidth: 2;
        };
      };
      edgeStateStyle: {
        active: {
          strokeOpacity: 0.8;
        };
        selected: {
          lineWidth: 2;
        };
      };
      loopPosition: 'top';
      delegateStyle: {
        fill: '#F3F9FF';
        fillOpacity: 0.5;
        stroke: '#1890FF';
        strokeOpacity: 0.9;
        lineDash: [5, 5];
      };
    }
    export const Global: Global;

    /**
     * Sharp
     */
    interface Sharp {}
    export const Sharp: Sharp;

    export function registerNode(): any;

    export function registerEdge(): any;

    export function registerBehavior(): any;

    /**
     * Version Number
     */
    export const version: string;
  }

  export default G6;
}
