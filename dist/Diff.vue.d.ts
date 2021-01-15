import { PropType } from 'vue';
import type { Mode, Theme } from './utils';
declare const _default: import("vue").DefineComponent<{
    mode: {
        type: PropType<Mode>;
        default: string;
    };
    theme: {
        type: PropType<Theme>;
        default: string;
    };
    language: {
        type: StringConstructor;
        default: string;
    };
    prev: {
        type: StringConstructor;
        default: string;
    };
    current: {
        type: StringConstructor;
        default: string;
    };
}, {
    lines: import("vue").Ref<{
        type: "added" | "removed" | "equal" | "disabled";
        lineNum?: number | undefined;
        value?: string | undefined;
        chkWords?: boolean | undefined;
    }[][]>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    mode: Mode;
    theme: Theme;
    language: string;
    prev: string;
    current: string;
} & {}>, {
    mode: Mode;
    theme: Theme;
    language: string;
    prev: string;
    current: string;
}>;
export default _default;
