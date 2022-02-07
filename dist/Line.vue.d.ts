import type { PropType } from 'vue';
import type { Meta, Mode, Lines, Line, VirtualScroll } from './types';
declare const _default: import("vue").DefineComponent<{
    mode: {
        type: PropType<Mode>;
        required: true;
    };
    folding: {
        type: BooleanConstructor;
        default: boolean;
    };
    language: {
        type: StringConstructor;
        required: true;
    };
    meta: {
        type: PropType<Meta>;
        required: true;
    };
    render: {
        type: PropType<Lines>;
        required: true;
    };
    scrollOptions: {
        type: PropType<false | VirtualScroll>;
        default: boolean;
    };
}, {
    line: import("vue").Ref<HTMLElement | null>;
    isFoldLine: import("vue").ComputedRef<boolean>;
    rendered: () => void;
    rowStyle: import("vue").ComputedRef<{
        position: string;
        left: number;
        top: number;
        transform: string;
        minHeight: string;
    } | undefined>;
    setCode: (line: Line, render?: Lines | undefined, index?: number | undefined) => string;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    mode?: unknown;
    folding?: unknown;
    language?: unknown;
    meta?: unknown;
    render?: unknown;
    scrollOptions?: unknown;
} & {
    mode: Mode;
    folding: boolean;
    language: string;
    meta: Meta;
    render: Lines;
    scrollOptions: false | VirtualScroll;
} & {}>, {
    folding: boolean;
    scrollOptions: false | VirtualScroll;
}>;
export default _default;
