import type { ComputedRef, Ref } from 'vue';
import type { Mode, Theme, Meta, VirtualScroll } from './types';
interface Props {
    mode: Mode;
    theme: Theme;
    language: string;
    prev: string;
    current: string;
    folding: boolean;
    inputDelay: number;
    virtualScroll: boolean | VirtualScroll;
}
export declare const useRender: (props: Props, viewer: Ref<null | HTMLElement>, scrollOptions: ComputedRef<false | VirtualScroll>) => {
    meta: Ref<{
        index: number;
        foldable: boolean;
        visible: boolean;
        top?: number | undefined;
        height?: number | undefined;
    }[]>;
    render: Ref<{
        [x: string]: unknown;
        type?: string | undefined;
        lineNum?: number | undefined;
        value?: string | undefined;
        chkWords?: boolean | undefined;
    }[][]>;
    list: ComputedRef<{
        index: number;
        foldable: boolean;
        visible: boolean;
        top?: number | undefined;
        height?: number | undefined;
    }[]>;
};
export declare const useVirtualScroll: (props: Props, viewer: Ref<null | HTMLElement>, scrollOptions: ComputedRef<false | VirtualScroll>, meta: Ref<Array<Meta>>) => {
    minHeight: ComputedRef<string | undefined>;
};
export {};
