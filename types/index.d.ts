declare module '@antv/g6' {
  namespace G6 {
    /**
     * Graph Class
     */
    export class Graph {}

    /**
     * TreeGraph Class
     */
    export class TreeGraph extends Graph {
      abc(): string;
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
