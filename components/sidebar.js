export function sidebar() {
    return {
        openSidebar: false,
        openUserPreferencesSidebar: false,

        toggleSidebar() {
            this.openSidebar = !this.openSidebar;
            this.openUserPreferencesSidebar = false
        },

        toggleOpenUserPreferencesSidebar() {
            this.openUserPreferencesSidebar = !this.openUserPreferencesSidebar;
        }
    };
}