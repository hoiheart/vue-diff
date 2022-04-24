import type { PropType } from 'vue';
import type { Meta, Mode, Lines, Line, VirtualScroll } from './types';
declare const _sfc_main: import("vue").DefineComponent<{
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
        readonly position: "absolute";
        readonly left: 0;
        readonly top: 0;
        readonly transform: "translate3d(0, undefinedpx, 0)" | `translate3d(0, ${number}px, 0)`;
        readonly minHeight: string;
    } | undefined>;
    setCode: (line: Line, render?: Lines | undefined, index?: number | undefined) => string;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
}>>, {
    scrollOptions: false | VirtualScroll;
    folding: boolean;
}>;
export default _sfc_main;
