import { PropType } from 'vue';
import type { Mode, Lines, Line } from './utils';
declare const _default: import("vue").DefineComponent<{
    mode: {
        type: PropType<Mode>;
        required: true;
    };
    language: {
        type: StringConstructor;
        required: true;
    };
    data: {
        type: PropType<Lines>;
        required: true;
    };
}, {
    setCode: (line: Line, data?: Lines | undefined, index?: number | undefined) => string;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    mode: Mode;
    language: string;
    data: Lines;
} & {}>, {}>;
export default _default;
