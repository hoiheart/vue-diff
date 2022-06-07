import type { Diff } from 'diff-match-patch';

export interface PluginOptions {
  componentName: string;
}

export type Mode = 'split' | 'unified';
export type Theme = 'dark' | 'light' | `custom${string}`;
export type Role = 'prev' | 'current' | 'unified';

export interface Line {
  type?: string;
  lineNum?: number;
  value?: string;
  chkWords?: boolean;
  [key: string]: unknown;
}

export type Lines = Array<Line>;
export type Diffs = Array<Diff>;

export interface Meta {
  index: number;
  foldable: boolean;
  visible: boolean;
  top?: number;
  height?: number;
}

export interface VirtualScroll {
  height: number;
  lineMinHeight: number;
  delay: number;
}
