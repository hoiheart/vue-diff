declare const _default: import("vue").DefineComponent<{
    language: {
        type: StringConstructor;
        required: true;
    };
    code: {
        type: StringConstructor;
        required: true;
    };
}, {
    highlightCode: import("vue").Ref<string>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    language: string;
    code: string;
} & {}>, {}>;
export default _default;
