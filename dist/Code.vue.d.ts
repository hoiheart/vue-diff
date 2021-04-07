import type { PropType } from 'vue';
import type { VirtualScroll } from './types';
declare const _default: import("vue").DefineComponent<{
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
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "rendered"[], "rendered", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    language: string;
    code: string;
    scrollOptions: false | VirtualScroll;
} & {}>, {
    scrollOptions: false | VirtualScroll;
}>;
export default _default;
