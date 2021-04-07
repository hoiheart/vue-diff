import type { PropType } from 'vue';
import type { Meta, Mode, Lines, Line, VirtualScroll } from './types';
declare const _default: import("vue").DefineComponent<{
    mode: {
        type: PropType<Mode>;
        required: true;
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
    mode: Mode;
    language: string;
    meta: Meta;
    render: Lines;
    scrollOptions: false | VirtualScroll;
} & {}>, {
    scrollOptions: false | VirtualScroll;
}>;
export default _default;
