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
      readonly version: string;
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
