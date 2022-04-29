import type { PropType } from 'vue';
import type { VirtualScroll } from './types';
declare const _sfc_main: import("vue").DefineComponent<{
    language: {
        type: StringConstructor;
        required: true;
    };
    code: {
        type: StringConstructor;
        required: true;
    };
    scrollOptions: {
        type: PropType<false | VirtualScroll>;
        default: boolean;
    };
}, {
    highlightCode: import("vue").Ref<string>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "rendered"[], "rendered", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    language: {
        type: StringConstructor;
        required: true;
    };
    code: {
        type: StringConstructor;
        required: true;
    };
    scrollOptions: {
        type: PropType<false | VirtualScroll>;
        default: boolean;
    };
}>> & {
    onRendered?: ((...args: any[]) => any) | undefined;
}, {
    scrollOptions: false | VirtualScroll;
}>;
export default _sfc_main;
