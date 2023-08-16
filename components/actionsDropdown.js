import tippy from "tippy.js";

export function actionsDropdown() {
    return {
        init() {
            tippy(this.$refs.button, {
                content: this.$refs.template.innerHTML,
                allowHTML: true,
                theme: 'custom',
                interactive: true,
                trigger: 'click',
                placement: 'bottom-end',
                arrow: false,
                offset: [5, 5]
            });
        },
    };
}